import express from "express";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import dotenv from "dotenv";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Proxy for Netlify Function local testing
app.post("/.netlify/functions/register", async (req, res) => {
  try {
    const { handler } = require("./netlify/functions/register.js");
    const event = {
      httpMethod: req.method,
      body: JSON.stringify(req.body),
      headers: req.headers,
    };
    const response = await handler(event);
    res.status(response.statusCode).send(response.body);
  } catch (error) {
    console.error("Netlify Function Proxy Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Initialize Google Sheets
let doc: GoogleSpreadsheet | null = null;

async function getDoc() {
  if (doc) return doc;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
  if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
  }
  privateKey = privateKey.replace(/\\n/g, '\n');
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !privateKey || !sheetId) {
    throw new Error("Google Sheets credentials are not fully configured in environment variables.");
  }

  const serviceAccountAuth = new JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
  await doc.loadInfo();
  return doc;
}

// Helper to generate Unique ID for Talent Test
function generateTalentTestId(dob: string, aadhar: string) {
  try {
    const [year, month, day] = dob.split('-');
    const formattedDob = `${day}${month}${year}`;
    
    const cleanAadhar = aadhar.replace(/\s/g, '');
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
function generateSchoolId(prefix: string) {
  const date = new Date();
  const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
  const randomStr = Math.floor(1000 + Math.random() * 9000).toString();
  return `${prefix}-${dateStr}-${randomStr}`;
}

// Ensure sheet exists or create it
async function getOrCreateSheet(doc: GoogleSpreadsheet, title: string, headerValues: string[]) {
  let sheet = doc.sheetsByTitle[title];
  if (!sheet) {
    sheet = await doc.addSheet({ title, headerValues });
  } else {
    try {
      // Ensure headers are loaded
      await sheet.loadHeaderRow();
      // If headers are missing, set them
      if (sheet.headerValues.length === 0) {
        await sheet.setHeaderRow(headerValues);
      }
    } catch (e) {
      // If loadHeaderRow fails (e.g., empty sheet), set headers
      await sheet.setHeaderRow(headerValues);
    }
  }
  return sheet;
}

app.post("/api/register/talent-test", async (req, res) => {
  try {
    const data = req.body;
    const uniqueId = generateTalentTestId(data.dob, data.aadhar || "");
    
    const rowData = {
      "Application ID": uniqueId,
      "Full Name": data.fullName,
      "Date of Birth": data.dob,
      "Aadhar Number": data.aadhar,
      "School Name": data.schoolName,
      "Residential Address": data.address,
      "Phone Number": data.phone,
      "Email ID": data.email,
      "Teacher 1 Contact": data.teacher1,
      "Teacher 2 Contact": data.teacher2,
      "Father Name": data.fatherName,
      "Mother Name": data.motherName,
      "Guardian Name": data.guardianName,
      "Annual Income": data.income,
      "Occupation": data.occupation === 'Other' ? data.otherOccupation : data.occupation,
      "Registration Date": new Date().toISOString()
    };

    try {
      const document = await getDoc();
      const sheet = await getOrCreateSheet(document, "Talent Test Registrations", Object.keys(rowData));
      await sheet.addRow(rowData);
    } catch (sheetError) {
      console.error("Google Sheets Error:", sheetError);
      // We continue even if sheets fail, to allow local testing
    }

    res.json({ success: true, applicationId: uniqueId });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: "Failed to register" });
  }
});

app.post("/api/register/nmms", async (req, res) => {
  try {
    const data = req.body;
    const uniqueId = generateSchoolId("NMMS");
    
    const rowData = {
      "Registration ID": uniqueId,
      "School Name": data.schoolName,
      "Full Address": data.address,
      "Teacher 1 Name": data.teacher1Name,
      "Teacher 1 Phone": data.teacher1Phone,
      "Teacher 2 Name": data.teacher2Name,
      "Teacher 2 Phone": data.teacher2Phone,
      "Aadhar Number": data.aadhar,
      "Student Count": data.studentCount,
      "Preferred Date": data.date,
      "Preferred Time": data.time,
      "Registration Date": new Date().toISOString()
    };

    try {
      const document = await getDoc();
      const sheet = await getOrCreateSheet(document, "NMMS Registrations", Object.keys(rowData));
      await sheet.addRow(rowData);
    } catch (sheetError) {
      console.error("Google Sheets Error:", sheetError);
    }

    res.json({ success: true, registrationId: uniqueId });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: "Failed to register" });
  }
});

app.post("/api/register/knowledge-quest", async (req, res) => {
  try {
    const data = req.body;
    const uniqueId = generateSchoolId("KQ");
    
    // Convert dynamic students array to a string for the spreadsheet
    const studentsList = data.students ? data.students.map((s: any, i: number) => `${i+1}. ${s.name} (Class ${s.class})`).join("\n") : "";

    const rowData = {
      "Registration ID": uniqueId,
      "School Name": data.schoolName,
      "Full Address": data.address,
      "Teacher 1 Name": data.teacher1Name,
      "Teacher 1 Phone": data.teacher1Phone,
      "Teacher 2 Name": data.teacher2Name,
      "Teacher 2 Phone": data.teacher2Phone,
      "Aadhar Number": data.aadhar,
      "Student Count": data.studentCount,
      "Students List": studentsList,
      "Registration Date": new Date().toISOString()
    };

    try {
      const document = await getDoc();
      const sheet = await getOrCreateSheet(document, "Knowledge Quest Registrations", Object.keys(rowData));
      await sheet.addRow(rowData);
    } catch (sheetError) {
      console.error("Google Sheets Error:", sheetError);
    }

    res.json({ success: true, registrationId: uniqueId });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: "Failed to register" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { id, password } = req.body;
    
    if (!id || !password) {
      return res.status(400).json({ success: false, error: "ID and password are required" });
    }

    const document = await getDoc();
    
    // Check Talent Test
    let sheet = document.sheetsByTitle["Talent Test Registrations"];
    if (sheet) {
      const rows = await sheet.getRows();
      const user = rows.find(r => r.get("Application ID") === id && r.get("Password") === password);
      if (user) {
        return res.json({ success: true, type: "student", name: user.get("Full Name") });
      }
    }

    // Check NMMS
    sheet = document.sheetsByTitle["NMMS Registrations"];
    if (sheet) {
      const rows = await sheet.getRows();
      const user = rows.find(r => r.get("Registration ID") === id && r.get("Password") === password);
      if (user) {
        return res.json({ success: true, type: "school", name: user.get("School Name") });
      }
    }

    // Check Knowledge Quest
    sheet = document.sheetsByTitle["Knowledge Quest Registrations"];
    if (sheet) {
      const rows = await sheet.getRows();
      const user = rows.find(r => r.get("Registration ID") === id && r.get("Password") === password);
      if (user) {
        return res.json({ success: true, type: "school", name: user.get("School Name") });
      }
    }

    res.status(401).json({ success: false, error: "Invalid ID or password" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, error: "Login failed" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
