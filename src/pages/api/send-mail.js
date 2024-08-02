import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const OAuth2 = google.auth.OAuth2

export default function handler (req, res) {
  // Process a POST request
  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    })

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject(new Error('Failed to create access token with message: ' + err))
        }
        resolve(token)
      })
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    })

    return transporter
  }

  // emailOptions - who sends what to whom
  const sendEmail = async (emailOptions) => {
    const emailTransporter = await createTransporter()
    await emailTransporter.sendMail(emailOptions)
  }

  const { ownersName, dogsName, phone, email, message, service } = req.body

  sendEmail({
    subject: `New inquiry from ${ownersName}`,
    text: `You have received a new inquiry.
          Owner's Name: ${ownersName}
          Dog's name: ${dogsName}
          Phone: ${phone}
          Email: ${email}
          Service: ${service}
          Message: ${message}`,
    to: process.env.EMAIL,
    from: process.env.EMAIL
  })

  sendEmail({
    subject: `Email sent!`,
    text: `Your email has been sent. We will reach out soon!`,
    to: email,
    from: process.env.EMAIL
  })
}