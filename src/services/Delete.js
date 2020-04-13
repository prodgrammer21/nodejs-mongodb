const Accounts = require('../models/Accounts')

module.exports = async (_id) => {
  try {
    await Accounts.deleteOne({ _id })

    return true
  } catch (err) {
    return false
  }
}