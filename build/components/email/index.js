"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
async function SendEmail(req, res) {
    //My email informations
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: "Gmail",
        auth: {
            user: "marvel.developedbyaryan@gmail.com",
            pass: "gyqs zvig ldsh mhrc",
        },
    });
    // Email options
    const mailOptions = {
        from: {
            name: "Marvel App",
            address: "marvel.developedbyaryan@gmail.com",
        },
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    };
    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Success:", info.response);
        return res.status(200).send("Email sent successfully.");
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Email sending failed.");
    }
}
exports.default = SendEmail;
