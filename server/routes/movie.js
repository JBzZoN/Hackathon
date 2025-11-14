const express = require('express')
const movieRouter = express.Router()
const pool = require('../config/pool')
const { createResult } = require('../utils/result')

movieRouter.get("/", (request, response) => {
    const sql = "select * from movies"
    pool.query(sql, (error, data) => {
        response.send(createResult(error, data))
    })
})

module.exports = movieRouter