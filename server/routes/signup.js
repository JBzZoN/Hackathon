const express = require('express')

const pool = require('../config/pool')
const result = require('../utils/result')

const signUpRouter = express.Router()

signUpRouter.post('/signup', async (req, res) => {
    const { firstName,lastName, emailAddress, password, mobileNumber, dob } = req.body
    const sql = `INSERT INTO users(first_name,last_name,email,password,mobile,birth) VALUES(?,?,?,?,?,?)`
    pool.query(sql, [firstName,lastName, emailAddress, password, mobileNumber, dob], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = signUpRouter