const Accounts = require('../models/Accounts')

module.exports = async (username, password) => {
  try {
    await Accounts.insertMany({
      username,
      password
    })

    return true
  } catch (err) {
    return false
  }
}