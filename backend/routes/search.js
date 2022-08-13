const express = require('express')
const searchRouter = express.Router()
const { getSearched } = require('../controllers/searchController')


searchRouter.get('/' , getSearched)

module.exports = searchRouter