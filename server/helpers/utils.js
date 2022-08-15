const crypto = require('crypto')
const nodemailer = require('nodemailer')
const key = Buffer.from(
  '2a46294a404e635266556a586e3272357538782f413f4428472b4b6150645367',
  'hex'
)
// const iv = 'BDA30EGDH1578F81'
// console.log('iv+++++++++++++++++++', iv)

const transporter = nodemailer.createTransport({
  service: process.env.TRANSPORTER_SERVICER,
  auth: {
    user: process.env.TRANSPORTER_USERNAME,
    pass: process.env.TRANSPORTER_PASSWORD,
  },
})

exports.generateRandomSecurityCode = (length = 6) => {
  let result = ''
  const numbers = '0123456789'

  for (let i = 0; i < length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length))
  }

  return result
}

exports.encryption = (message) => {
  let cipher = crypto.createCipheriv('aes-256-ecb', key, iv)
  let encrypted = cipher.update(message, 'utf-8', 'hex')
  encrypted += cipher.final('hex')

  return encrypted
}

exports.decryption = (encryptedMessage) => {
  let decipher = crypto.createDecipheriv('aes-256-ecb', key, iv)
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf-8')
  decrypted += decipher.final('utf-8')

  return decrypted
}

exports.sendEmail = (clientUUID, securityCode) => {
  const now = new Date()
  const date = now.toString()

  const mailOptions = {
    from: process.env.TRANSPORTER_USERNAME,
    to: 'bc6016@mun.ca',
    subject: `Taskly - New Task Available ${date}`,
    html: `<html><b>Hey there! </b><br> You have new tasks available <p><a href="http://localhost:3000/client/view/${clientUUID}">click here to access the page</a></p> <p>Your security code: <b>${securityCode}</b></p></html>`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return {
        success: false,
        error,
      }
    } else {
      console.log('Email sent: ' + info.response)
      return {
        success: true,
        error: null,
      }
    }
  })
}
