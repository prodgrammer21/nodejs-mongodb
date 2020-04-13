const Accounts = require('../models/Accounts')

module.exports = async (_id) => {
  try {
    let results;

    if (_id) {
      results = await Accounts.findOne({ _id })
    } else {
      results = await Accounts.find()
    }

    return results
  } catch (err) {
    return []
  }
}