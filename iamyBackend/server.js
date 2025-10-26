import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// --- Needed for serving static files ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse incoming JSON
app.use(bodyParser.json());

// --- API route for contact form ---
app.post("/send-email", async (req, res) => {
  const { name, email, number, message } = req.body;
  console.log(
    "Email user loaded:",
    process.env.EMAIL_USER ? "✅ Yes" : "❌ No"
  );
  console.log(
    "Email pass loaded:",
    process.env.EMAIL_PASS ? "✅ Yes" : "❌ No"
  );

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000,
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Message from Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({
      success: false,
      message: `Failed to send email. Error: ${error.message}`,
    });
  }
});

// --- Serve Vite frontend build ---
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
