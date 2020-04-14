const Accounts = require('../models/Accounts')

module.exports = async () => {
  try {
    const results = await Accounts.find()

    return results
  } catch (err) {
    return []
  }
}