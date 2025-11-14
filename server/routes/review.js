const express = require('express')
const reviewRouter = express.Router()

const pool = require('../config/pool')
const { createResult } = require('../utils/result')

reviewRouter.post("/", (request, response) => {
    const {movie_id, review, rating, user_id} = request.body
    console.log(movie_id, review, rating, user_id)
    const sql = `insert into reviews(movie_id, review, rating, user_id) values(?, ?, ?, ?)`
    pool.query(sql, [movie_id, review, rating, user_id],(error, data) => {
        response.send(createResult(error, data))
    })
})

reviewRouter.post("/addShare", (request, response) => {
    const {review_id, user_id} = request.body
    const sql = `insert into shares(user_id, review_id) values(?, ?)`
    pool.query(sql, [user_id, review_id],(error, data) => {
        response.send(createResult(error, data))
    })
})

reviewRouter.get("/getShares/:id", (request, response) => {
    const id = request.params.id
    const sql = `select users.first_name, users.last_name, reviews.review, reviews.rating, movies.title from users, reviews, movies,shares where shares.review_id=reviews.id and shares.user_id=users.id and movies.id=reviews.movie_id and shares.user_id=${id}`
    pool.query(sql,(error, data) => {
        response.send(createResult(error, data))
    })
})
reviewRouter.get("/:id", (request, response) => {
    const id = request.params.id
    const sql = `select reviews.id, title, review, rating, modified from reviews, movies where reviews.movie_id = movies.id and reviews.user_id = ${id}`
    pool.query(sql,(error, data) => {
        response.send(createResult(error, data))
    })
})

reviewRouter.get("/", (request, response) => {
    const id = request.params.id
    const sql = `select reviews.id, title, users.first_name, users.last_name, review, rating, modified from reviews, movies, users where reviews.movie_id = movies.id and reviews.user_id = users.id`
    pool.query(sql,(error, data) => {
        response.send(createResult(error, data))
    })
})

reviewRouter.delete("/:id", (request, response) => {
    const id = request.params.id

    pool.query("set FOREIGN_KEY_CHECKS=0", (error, data) => {
    })

    const sql = `delete from reviews where id = ${id}`
    pool.query(sql,(error, data) => {
    })
    const sql2 = `delete from shares where id = ${id}`
    pool.query(sql2,(error, data) => {
        response.send(createResult(error, data))
    })
})

reviewRouter.put("/:id", (request, response) => {
    const id = request.params.id
    const {rating, review} = request.body
    const sql = `update reviews set rating=?,review=? where id = ${id}`
    pool.query(sql, [rating, review],(error, data) => {
        response.send(createResult(error, data))
    })
})

module.exports = reviewRouter