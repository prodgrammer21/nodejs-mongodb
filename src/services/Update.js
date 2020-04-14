const Accounts = require('../models/Accounts')

module.exports = async (_id, set) => {
  try {
    await Accounts.update({ _id }, { $set: set })

    return true
  } catch (err) {
    return false
  }
}