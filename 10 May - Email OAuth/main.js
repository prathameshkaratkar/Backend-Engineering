import "dotenv/config";

import {google} from "googleapis";
import nodemailer from "nodemailer";
import {config} from "./config.js";

//Initialize OAuth2Client with your credentials
const OAuth2Client = new google.auth.OAuth2(
    config.clientId,
    config.clientSecret
)

// Set the refresh token obtained during the authorization process
OAuth2Client.setCredentials({
    refresh_token: config.refreshToken
})

// Create a transporter with OAuth2
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth:{
        type: "OAuth2",
        user: config.senderEmail,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        refreshToken: config.refreshToken,
        accessToken: OAuth2Client.getAccessToken()
    }
})

// Send mail function 
const sendMail = async (mailOptions) =>{
    try{
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully")
    } catch(err) {
        console.error("Error sending email:", err)
    }
}

// Example usage

const mailOptions = {
    from: `Prathamesh Karatkar NodeJS <${config.senderEmail}>`,
    bcc: "tusharsarade1@gmail.com, prathameshkaratkar2224@gmail.com, karatkarraj@gmail.com",
    subject: "Nodemailer with OAuth2",
    text: "This is a test email sent using Nodemailer with OAuth2 and Gmail API."
}

sendMail(mailOptions);