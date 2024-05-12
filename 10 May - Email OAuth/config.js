const {SENDER_EMAIL_ADDRESS, CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET} = process.env

export const config = {
   senderEmail: SENDER_EMAIL_ADDRESS,
   clientId: CLIENT_ID,
    refreshToken: REFRESH_TOKEN,
    clientSecret: CLIENT_SECRET
}