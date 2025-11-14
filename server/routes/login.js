const express = require('express')

// userdefined modules
const pool = require('../config/pool')
const result = require('../utils/result')

const signInRouter = express.Router()

signInRouter.post('/', (req, res) => {
    const { emailAddress, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ? and password = ?`
    pool.query(sql, [emailAddress, password], (error, data) => {
        if (data != '')
            res.send(result.createResult(error, data))
        else
            res.send(result.createError("Invalid Credentials"))
    })
})

module.exports = signInRouter