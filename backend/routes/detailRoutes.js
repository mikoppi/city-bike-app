const express = require('express')
const detailsRouter = express.Router()
const { getDetails } = require('../controllers/detailController')


detailsRouter.get('/' , getDetails)

module.exports = detailsRouter