const crypto = require('crypto')
// const iv = 'BDA30EGDH1578F81'
// console.log('iv+++++++++++++++++++', iv)
let key = Buffer.from(
  '2a46294a404e635266556a586e3272357538782f413f4428472b4b6150645367',
  'hex'
)

exports.generateRandomSecurityCode = (length = 6) => {
  let result = ''
  const numbers = '0123456789'

  for (let i = 0; i < length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length))
  }

  return result
}

exports.encryption = (message) => {
  let cipher = crypto.createCipheriv('aes-256-ecb', key, null)
  let encrypted = cipher.update(message, 'utf-8', 'hex')
  encrypted += cipher.final('hex')

  return encrypted
}

exports.decryption = (encryptedMessage) => {
  let decipher = crypto.createDecipheriv('aes-256-ecb', key, null)
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf-8')
  decrypted += decipher.final('utf-8')

  return decrypted
}
