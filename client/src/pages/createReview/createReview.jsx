import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { config } from '../../config'
import axios from 'axios'

function CreateReview({state}) {

    const navigate = useNavigate()

    const [review, setReview] = useState(0)
    const [rating, setRating] = useState("")

    //*******************CHANGE THIS AFTER LOGIN*******************//
    const user_id = JSON.parse(localStorage.getItem('data')).id

    const {page, setPage} = state
    const onSubmit = async () => {
        console.log(JSON.parse(localStorage.getItem('currMovieForReview')))
        const {id} = JSON.parse(localStorage.getItem('currMovieForReview'));
        const response = await axios.post(config.base_url + "/review", {movie_id: parseInt(id),review,rating,user_id: parseInt(user_id)})
        const data = await response.data
        console.log(data)
        setPage(0)  
    }

    const onCancel = () => {
        setPage(0)
    }

  return (
    <div>
      <h1 className='display-3'>Create Review for "{JSON.parse(localStorage.getItem('currMovieForReview')).title}"</h1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Rating</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" onChange={(e) => {setRating(e.target.value)}}/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Your review</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => {setReview(e.target.value)}}></textarea>
        </div>

        <button type="button" class="btn btn-success me-3" onClick={onSubmit}>Submit Review</button>
        <button type="button" class="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default CreateReview
