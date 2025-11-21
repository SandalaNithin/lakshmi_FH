const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/booking", async (req, res) => {
  const {
    name,
    email,
    phone,
    eventType,
    guests,
    fromDate,
    toDate,
    checkIn,
    checkOut,
    message
  } = req.body;

  // EMAIL SENDING SETUP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sandalanithinkumar2@gmail.com",       // OWNER EMAIL
      pass: "nmmg nwhz wlkn trdx"           // Gmail App Password (16-digit code)
    },
  });

  const mailOptions = {
    from: email,
    to: "sandalanithinkumar2@gmail.com",          // Owner receives mail
    subject: `New Booking Request from ${name}`,
    html: `
      <h2>📩 New Event Booking Request</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Guests:</strong> ${guests}</p>

      <h3>Event Schedule:</h3>
      <p><strong>From Date:</strong> ${fromDate}</p>
      <p><strong>To Date:</strong> ${toDate}</p>
      <p><strong>Check-in Time:</strong> ${checkIn}</p>
      <p><strong>Check-out Time:</strong> ${checkOut}</p>

      <h3>Message:</h3>
      <p>${message || "No additional message provided."}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Booking email sent successfully!" });
  } catch (error) {
    console.log("Email error:", error);
    res.status(500).json({ success: false, message: "Email sending failed!" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
