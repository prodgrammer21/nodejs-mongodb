const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')

router.post('/create', async (req, res) => {
  const { username, password } = req.body

  const results = await CreateService(username, password)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Successfully Created!'
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Not Created!'
      })
  }
})

router.post('/retrieve', async (req, res) => {
  const results = await RetrieveService()

  if (results) {
    res
      .status(200)
      .send(results)
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Not Retrieved!'
      })
  }
})

router.post('/update', async (req, res) => {
  const { _id, set } = req.body

  const results = await UpdateService(_id, set)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Successfully Updated!'
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Not Updated!'
      })
  }
})

router.post('/delete', async (req, res) => {
  const { _id } = req.body

  const results = await DeleteService(_id)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Successfully Deleted!'
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: 'Not Deleted!'
      })
  }
})

module.exports = router