"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
function SendEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const info = yield transporter.sendMail(mailOptions);
            console.log("Success:", info.response);
            return res.status(200).send("Email sent successfully.");
        }
        catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Email sending failed.");
        }
    });
}
exports.default = SendEmail;
