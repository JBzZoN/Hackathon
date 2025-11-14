const express = require('express')

const pool = require('../config/pool')
const result = require('../utils/result')

const editProfileRouter = express.Router()

editProfileRouter.post('/editProfile/:id', async (req, res) => {
    const { firstName,lastName, emailAddress, mobileNumber, dob } = req.body
    const sql = `UPDATE users SET first_name="${firstName}",last_name="${lastName}",email="${emailAddress}",mobile="${mobileNumber}",birth="${dob}" where id=${req.params.id}`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = editProfileRouter