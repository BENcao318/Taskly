const crypto = require('crypto')
const nodemailer = require('nodemailer')
const algorithm = 'aes-256-ctr'
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'

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

//Encrypting text
exports.encrypt = (text) => {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv)
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  }
}

// Decrypting text
exports.decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, 'hex')
  )

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, 'hex')),
    decipher.final(),
  ])

  return decrpyted.toString()
}

exports.sendEmail = (clientUUID, securityCode, email) => {
  const now = new Date()
  const date = now.toString()

  const mailOptions = {
    from: process.env.TRANSPORTER_USERNAME,
    to: 'bc6016@mun.ca',
    // to: email,
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
