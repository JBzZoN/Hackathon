const express = require('express')

// userdefined modules
const pool = require('../config/pool')
const result = require('../utils/result')

const allRouter = express.Router()

allRouter.get('/all', (req, res) => {
    const sql = `SELECT id, first_name, last_name, email FROM users`
    pool.query(sql, (error, data) => {
        if (data != '')
            res.send(result.createResult(error, data))
        else
            res.send(result.createError("Invalid Credentials"))
    })
})

module.exports = allRouter