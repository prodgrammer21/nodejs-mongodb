const Accounts = require('../models/Accounts')

module.exports = async (_id, obj) => {
  try {
    /* Remove Empty Property */
    for (const key of Object.keys(obj)) {
      if (obj[key] == null || obj[key] == undefined) {
        delete obj[key]
      }
    }

    await Accounts.updateOne({ _id }, { $set: obj })

    return true
  } catch (err) {
    return false
  }

}