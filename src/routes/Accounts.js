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
        message: 'Succesfully Created!'
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
  const { _id } = req.query

  const results = await RetrieveService(_id)

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
  const { _id, username, password } = req.body
  const obj = { username, password }
  
  const results = await UpdateService(_id, obj)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Succesfully Updated!'
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
  const { _id } = req.query

  const results = await DeleteService(_id)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: 'Succesfully Deleted!'
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