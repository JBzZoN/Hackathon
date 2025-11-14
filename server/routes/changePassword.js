const express = require('express')

const pool = require('../config/pool') 
const result = require('../utils/result')

const changePasswordRouter = express.Router()

changePasswordRouter.post('/changepassword', async (req, res) => { 
    const { passwordO,passwordN } = req.body 
const sql = `UPDATE users SET password="${passwordN}" where password="${passwordO}"`
pool.query(sql, (error, data) => { res.send(result.createResult(error, data)) }) })

module.exports = changePasswordRouter