
import { Founder, Program, Event, Stat } from './types';
import { BookOpen, Users, Heart, GraduationCap, Globe, Lightbulb } from 'lucide-react';

export const NGO_DETAILS = {
  name: "Akshara Bharatam Society",
  shortIntro: "An NGO whose objective is to bring quality in Education and support the students.",
  location: "Rambilli mandal, Visakhapatnam, India, Andhra Pradesh",
  phone: "072594 90606, +91 93474 62851, +91 99668 55355",
  email: "aksharabharatamsociety@gmail.com",
  blog: "aksharabharatamsociety.blogspot.com",
  coordinates: { lat: 17.5196, lng: 82.8465 } // Approx for Rambilli
};

export const WEBHOOK_URL = "https://corn-routes-connectors-birmingham.trycloudflare.com/webhook/ngo-booking";

/** 
 * LOGO_URL: 
 * Updated with user provided image link.
 */
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1lnTV8LvhJ4OWVL2-gkklZgByDzM68P7J";

export const FOUNDERS: Founder[] = [
  {
    id: "f1",
    name: "Ramana Mylappali",
    role: "President",
    specialization: "Organizational Leadership",
    quote: "Education is the key to unlocking the potential of our rural communities.",
    bio: "As the President, Ramana Mylappali steers the vision of Akshara Bharatam Society. With a deep-rooted commitment to social upliftment, he ensures that the organization stays true to its mission of providing quality education to every child.",
    experience: "Leadership",
    tags: ["Visionary", "Governance"],
    image: "https://lh3.googleusercontent.com/d/1Qex-Yk22TH-SyM44lSt5IuMA1hCxz7CS"
  },
  {
    id: "f2",
    name: "Srinu Mylappali",
    role: "Vice President",
    specialization: "Strategic Planning",
    quote: "We believe in action over words. Every initiative is a step towards a brighter tomorrow.",
    bio: "Srinu Mylappali plays a pivotal role in strategy and execution. He works closely with the core team to expand the reach of the NGO's programs and ensuring operational excellence.",
    experience: "Strategy",
    tags: ["Operations", "Strategy"],
    image: "https://lh3.googleusercontent.com/d/1RRebrVzYK0-v7igIwepqsHZCKoDQ1rJu"
  },
  {
    id: "f3",
    name: "Suryam Surada",
    role: "Secretary",
    specialization: "Administration",
    quote: "Transparency and dedication are what drive our daily operations.",
    bio: "As Secretary, Suryam Surada manages the administrative backbone of the society. He ensures compliance, manages records, and facilitates smooth communication between all stakeholders.",
    experience: "Administration",
    tags: ["Admin", "Compliance"],
    image: "https://lh3.googleusercontent.com/d/18jKMmckjUU5dS_NqejjAVLACd3A2qWVr"
  },
  {
    id: "f4",
    name: "Lakshman Rao Mylappali",
    role: "Joint Secretary",
    specialization: "Project Coordination",
    quote: "Together, we can bridge the gap between urban and rural education.",
    bio: "Lakshman Rao assists in the coordination of field projects and volunteer activities. His hands-on approach ensures that our initiatives are implemented effectively at the grassroots level.",
    experience: "Field Work",
    tags: ["Coordination", "Outreach"],
    image: "https://lh3.googleusercontent.com/d/1ecPH3I8GeJccgcmAOzTOETehb3UlL3bk"
  },
  {
    id: "f5",
    name: "Venkata Ramana Mylapalli",
    role: "Treasurer",
    specialization: "Financial Management",
    quote: "Financial integrity is crucial for building trust and sustaining our impact.",
    bio: "Venkata Ramana oversees the financial health of the organization. He is responsible for budgeting, financial planning, and ensuring that every donation is utilized efficiently.",
    experience: "Finance",
    tags: ["Finance", "Integrity"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "p1",
    title: "ABS Talent Test",
    category: "Talent Test",
    description: "A state-level competitive examination aimed at identifying and nurturing academic talent among rural students. We test proficiency in Math, Science, and Logic to recognize future leaders.",
    impact: "5,000+ Aspirants",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p2",
    title: "Knowledge Quest",
    category: "Knowledge Quest",
    description: "An interactive quiz competition designed to spark curiosity and improve general awareness about current affairs, history, and science among high school students.",
    impact: "50+ Schools",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    title: "NMMS Coaching Program",
    category: "NMMS Coaching",
    description: "Specialized coaching for Grade 8 students to help them clear the National Means-cum-Merit Scholarship (NMMS) exam, securing financial aid for 4 years.",
    impact: "200+ Scholarships",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p4",
    title: "Education Awareness",
    category: "Awareness",
    description: "Community outreach programs and door-to-door campaigns to educate parents and students about the value of education, available government schemes, and career opportunities.",
    impact: "10,000+ Families",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p5",
    title: "Merit Awards Ceremony",
    category: "Talent Test",
    description: "Annual event recognizing top performers of the ABS Talent Test with medals, certificates, and scholarships to encourage sustained academic excellence.",
    impact: "Annual Event",
    image: "https://images.unsplash.com/photo-1623039405147-947792796a33?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p6",
    title: "Career Guidance Workshops",
    category: "Awareness",
    description: "Expert-led sessions for high school students to explore various career paths beyond traditional options, helping them make informed decisions.",
    impact: "500+ Students",
    image: "https://images.unsplash.com/photo-1521791136064-7985c2d1103b?auto=format&fit=crop&q=80&w=800"
  }
];

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Annual Charity Gala Night",
    date: "Dec 15, 2024",
    location: "Visakhapatnam Convention Center",
    description: "Join us for an evening of inspiration, performances by our students, and fundraising to support our scholarship programs.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "e2",
    title: "Rural Science Fair 2024",
    date: "Jan 20, 2025",
    location: "ZPHS Rambilli School Grounds",
    description: "Showcasing innovative science projects created by students from 10 neighboring villages.",
    image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "e3",
    title: "Volunteer Orientation Drive",
    date: "Feb 05, 2025",
    location: "ABS Main Office, Rambilli",
    description: "A workshop for new volunteers interested in teaching and field work. Includes training and lunch.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "e4",
    title: "Book Donation Camp",
    date: "March 10, 2025",
    location: "City Library, Visakhapatnam",
    description: "Donate your old books and stationery to help build libraries in rural schools.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
  }
];

export const STATS: Stat[] = [
  { label: "Students Reached", value: "15000", icon: GraduationCap },
  { label: "Volunteers", value: "450", icon: Users },
  { label: "Programs Run", value: "25", icon: BookOpen },
  { label: "Lives Impacted", value: "50000", icon: Heart },
];

export const BLOG_POSTS = [
  {
    id: 'b1',
    title: "The State of Rural Education in 2024",
    excerpt: "Exploring the challenges and triumphs of bringing digital tools to remote villages.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'b2',
    title: "Volunteer Spotlight: Sarah's Journey",
    excerpt: "How one volunteer helped set up 5 libraries in a single summer.",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'b3',
    title: "Annual Charity Gala Success",
    excerpt: "We raised over ₹50 Lakhs for our scholarship fund thanks to your generosity.",
    date: "January 10, 2024",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
  }
];

export const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/d/1MoAeyApBFhJdEFjdcnyPUFivyKh37FYG",
  "https://lh3.googleusercontent.com/d/1Jz1HI4Vc5MWh973Mbon_j2iIzVE_RXE-",
  "https://lh3.googleusercontent.com/d/1JmKqP1BLO2Xmrpa8YSJ9sbyoRHdNJCzE",
  "https://lh3.googleusercontent.com/d/1VfBlUwEnJctP7a_6lBV_3iQMagTHr0nb",
  "https://lh3.googleusercontent.com/d/1MIHR_JLonNeXrR9T3xgacX9sCLzslaOI"
];

export const TESTIMONIALS = [
  {
    quote: "It wasn't just about books or computers; it was about believing that we mattered. The mentors from Akshara Bharatam looked us in the eye and told us we could be scientists, writers, and leaders. That belief changed my life more than any textbook ever could. I am now pursuing my engineering degree.",
    author: "Sunita Rao",
    role: "Alumni, Class of 2018"
  },
  {
    quote: "Our school in Rambilli was on the verge of closing down due to lack of funds and attendance. The Society stepped in, renovated the building, and introduced digital classrooms. Today, we have a waiting list for admissions. They revived the heart of our community.",
    author: "M. Venkata Ramana",
    role: "Village Elder & School Committee"
  },
  {
    quote: "I have volunteered with many NGOs, but the dedication I see here is unmatched. Whether it's the midnight fundraising calls or the early morning drives to remote hamlets, the team's passion is infectious. It's an honor to serve alongside them.",
    author: "David Fernandez",
    role: "Senior Volunteer"
  },
  {
    quote: "The scholarship didn't just pay for my college fees; it bought me the freedom to dream. I come from a family of daily wage laborers. Today, we have a waiting list for admissions. They revived the heart of our community.",
    author: "P. Ganesh",
    role: "Financial Analyst"
  },
  {
    quote: "As a mother, my only wish was for my daughter to have a better life than me. Akshara Bharatam's 'Girl Child Initiative' ensured she stayed in school when we couldn't afford it. She is now preparing for her medical entrance exams.",
    author: "Lakshmi Devi",
    role: "Parent"
  },
  {
    quote: "The digital literacy camp opened a new world for me. I had never touched a laptop before. Now I can code basic websites and I'm helping my father digitize his small shop's accounts. Technology is truly a great equalizer.",
    author: "K. Arjun",
    role: "Student, Grade 10"
  }
];

export const STUDENT_ACHIEVEMENTS = [
  {
    id: 'sa1',
    name: 'K. Divya',
    achievement: 'State 1st Rank in 10th Mathematics',
    image: 'https://images.unsplash.com/photo-1623039405147-947792796a33?auto=format&fit=crop&q=80&w=400',
    description: 'Scored 100/100 in SSC Board Exams 2023, setting a new record for our district school.'
  },
  {
    id: 'sa2',
    name: 'M. Rajesh',
    achievement: 'National Science Fair Finalist',
    image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=400',
    description: 'Designed a low-cost water purification system using locally available herbs.'
  },
  {
    id: 'sa3',
    name: 'P. Sai Kumar',
    achievement: 'District Chess Champion',
    image: 'https://images.unsplash.com/photo-1581726707445-75c7d617936f?auto=format&fit=crop&q=80&w=400',
    description: 'Secured Gold Medal in Under-15 category at the Visakhapatnam District Championship.'
  },
  {
    id: 'sa4',
    name: 'L. Anusha',
    achievement: 'Best Speaker - Youth Parliament',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400',
    description: 'Awarded for her eloquent speech on "Rural Development" at the State Youth Parliament.'
  },
  {
    id: 'sa5',
    name: 'Ch. Venkat',
    achievement: 'Young Innovator Award',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    description: 'Developed a solar-powered irrigation alert system for farmers.'
  }
];

export const LEGAL_CONTENT = {
  privacy: `
# Privacy Policy

**Effective Date:** January 1, 2024

At Akshara Bharatam Society, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your data when you visit our website or interact with our services.

## 1. Information We Collect
We collect personal information that you voluntarily provide to us when you:
- Donate to our cause via our secure payment portals.
- Register as a volunteer through our application forms.
- Subscribe to our newsletter or blog updates.
- Contact us via our contact forms or email.

This information may include your name, email address, phone number, mailing address, and payment details (which are processed securely by third-party payment gateways like Razorpay/Stripe; we do not store full credit card numbers).

## 2. How We Use Your Information
We use the information we collect for the following purposes:
- **Donation Processing:** To process your donations, issue tax-exemption receipts (80G), and keep a record of your contributions.
- **Communication:** To send you updates, newsletters, and information about our programs, events, and volunteer opportunities.
- **Improvement:** To analyze website usage trends and improve our digital services.
- **Legal Compliance:** To comply with applicable laws and regulations regarding non-profit operations.

## 3. Data Sharing and Security
We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.

We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.

## 4. Your Rights
You have the right to request access to the personal information we hold about you and to ask for your data to be corrected or deleted. You can unsubscribe from our mailing lists at any time by clicking the "unsubscribe" link in our emails.

## 5. Contact Us
If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
**Email:** aksharabharatamsociety@gmail.com
**Phone:** 072594 90606
  `,
  terms: `
# Terms of Service

**Last Updated:** January 1, 2024

Welcome to the Akshara Bharatam Society website. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

## 1. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on Akshara Bharatam Society's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
- Modify or copy the materials;
- Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
- Attempt to decompile or reverse engineer any software contained on Akshara Bharatam Society's website;
- Remove any copyright or other proprietary notations from the materials; or
- Transfer the materials to another person or "mirror" the materials on any other server.

## 2. Disclaimer
The materials on Akshara Bharatam Society's website are provided on an 'as is' basis. Akshara Bharatam Society makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## 3. Limitations
In no event shall Akshara Bharatam Society or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Akshara Bharatam Society's website, even if Akshara Bharatam Society or a authorized representative has been notified orally or in writing of the possibility of such damage.

## 4. Accuracy of Materials
The materials appearing on Akshara Bharatam Society's website could include technical, typographical, or photographic errors. Akshara Bharatam Society does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.

## 5. Governing Law
These terms and conditions are governed by and construed in accordance with the laws of Andhra Pradesh, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
  `,
  cookies: `
# Cookie Policy

This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.

## 1. What are cookies?
Cookies are small text files that are sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.

## 2. How Akshara Bharatam Society uses cookies
When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
- **Essential Cookies:** To enable certain functions of the Service, such as authentication and remembering your preferences.
- **Analytics Cookies:** We use analytics cookies to track information on how the Service is used so that we can make improvements. We may also use analytics cookies to test new advertisements, pages, features or new functionality of the Service to see how our users react to them.

## 3. Third-party cookies
In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.

## 4. What are your choices regarding cookies?
If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
  `,
  financials: `
# Financial Reports & Transparency

Transparency is one of the core pillars of Akshara Bharatam Society. We believe our donors and stakeholders have the right to know exactly how their contributions are being utilized to impact lives.

## Financial Year 2023-2024 Overview
- **Total Donations Received:** ₹50,00,000
- **Total Expenditure:** ₹48,50,000
- **Surplus carried forward:** ₹1,50,000

### Expenditure Breakdown
1.  **Program Expenses (80%):** Direct costs related to running schools, buying books, teacher salaries, and digital lab setups.
2.  **Administrative Expenses (10%):** Office rent, utilities, and staff salaries.
3.  **Fundraising Expenses (10%):** Event costs and marketing.

## Audited Financial Statements
We undergo annual audits by independent chartered accountants to ensure compliance with all financial regulations.

- **[Download FY 2023-24 Audit Report (PDF)](#)** _(Placeholder)_
- **[Download FY 2022-23 Audit Report (PDF)](#)** _(Placeholder)_
- **[Download FY 2021-22 Audit Report (PDF)](#)** _(Placeholder)_

## FCRA Compliance
Akshara Bharatam Society is fully compliant with the Foreign Contribution Regulation Act (FCRA) and is eligible to receive foreign funds. Our FCRA registration number is available upon request.

For any specific financial queries, please reach out to our Finance Officer at finance@aksharabharatam.org.
  `
};
