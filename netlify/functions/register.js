const { google } = require("googleapis");

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    // Use environment variables (fallback to common names)
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;
    let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";
    
    // Handle escaped newlines in private key
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, "\n");

    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      throw new Error("Missing Google Sheets credentials in environment variables.");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    // Helper to generate Unique ID for Talent Test
    function generateTalentTestId(dob, aadhar) {
      try {
        const [year, month, day] = (dob || "").split('-');
        const formattedDob = `${day || '00'}${month || '00'}${year || '0000'}`;
        
        const cleanAadhar = (aadhar || "").replace(/\s/g, '');
        let aadharPart = '';
        for (let i = 0; i < cleanAadhar.length; i += 4) {
          aadharPart += cleanAadhar[i];
        }
        
        return formattedDob + aadharPart;
      } catch (e) {
        return `TT-${Date.now()}`;
      }
    }

    // Helper to generate Unique ID for Schools
    function generateSchoolId(prefix) {
      const date = new Date();
      const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
      const randomStr = Math.floor(1000 + Math.random() * 9000).toString();
      return `${prefix}-${dateStr}-${randomStr}`;
    }

    let sheetName = "Sheet1";
    let values = [];
    let uniqueId = "";
    const timestamp = new Date().toISOString();
    
    if (data.registerType === 'TalentTest') {
      sheetName = "Talent Test Registrations";
      uniqueId = generateTalentTestId(data.dob, data.aadhar || "");
      values = [[
        uniqueId,
        data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
        data.dob || "",
        data.aadhar || "",
        data.schoolName || "",
        data.address || "",
        data.phone || "",
        data.email || "",
        data.teacher1 || "",
        data.teacher2 || "",
        data.fatherName || "",
        data.motherName || "",
        data.guardianName || "",
        data.income || "",
        data.occupation === 'Other' ? data.otherOccupation : (data.occupation || ""),
        timestamp
      ]];
    } else if (data.registerType === 'NMMS') {
      sheetName = "NMMS Registrations";
      uniqueId = generateSchoolId("NMMS");
      values = [[
        uniqueId,
        data.schoolName || "",
        data.address || "",
        data.teacher1Name || "",
        data.teacher1Phone || "",
        data.teacher2Name || "",
        data.teacher2Phone || "",
        data.aadhar || "",
        data.studentCount || "",
        data.date || "",
        data.time || "",
        timestamp
      ]];
    } else if (data.registerType === 'KnowledgeQuest') {
      sheetName = "Knowledge Quest Registrations";
      uniqueId = generateSchoolId("KQ");
      const studentsList = data.students ? data.students.map((s, i) => `${i+1}. ${s.name} (Class ${s.class})`).join("\n") : "";
      values = [[
        uniqueId,
        data.schoolName || "",
        data.address || "",
        data.teacher1Name || "",
        data.teacher1Phone || "",
        data.teacher2Name || "",
        data.teacher2Phone || "",
        data.aadhar || "",
        data.studentCount || "",
        studentsList,
        timestamp
      ]];
    } else {
      // Default / StudentRegister
      sheetName = "General Registrations";
      uniqueId = `GEN-${Date.now()}`;
      values = [[
        uniqueId,
        timestamp,
        data.registerType || "General",
        `${data.firstName || ''} ${data.lastName || ''}`.trim() || data.schoolName || "",
        data.email || "",
        data.parentPhone || "",
        data.schoolName || "",
        data.grade || "",
        JSON.stringify(data)
      ]];
    }

    // Determine the range based on the number of columns
    const endColumn = String.fromCharCode(65 + values[0].length - 1); // A, B, C...
    const range = `${sheetName}!A:${endColumn}`;

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        resource: { values }
      });
    } catch (appendError) {
      if (appendError.message && appendError.message.includes("Unable to parse range")) {
        // Sheet might not exist, create it
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: sheetId,
          resource: {
            requests: [{
              addSheet: {
                properties: {
                  title: sheetName
                }
              }
            }]
          }
        });
        
        // Try appending again
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: range,
          valueInputOption: "USER_ENTERED",
          resource: { values }
        });
      } else {
        throw appendError;
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: "Registration successful",
        applicationId: uniqueId,
        registrationId: uniqueId
      })
    };

  } catch (error) {
    console.error("Netlify Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
