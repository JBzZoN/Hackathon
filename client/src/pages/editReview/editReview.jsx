import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { config } from '../../config'
import axios from 'axios'
function EditReview() {
  const [review, setReview] = useState(0)
  const [rating, setRating] = useState("")

  const navigate = useNavigate()

  const onSubmit = async () => {
    const response = await axios.put(config.base_url + "/review/" + JSON.parse(localStorage.getItem('currentReviewData')).id, {review, rating})
    navigate("/dashboard/myReviews")
  }

  const onCancel = () => {
    navigate("/dashboard/myReviews")
  }
  return (
    <div>
         <div>
      <h1 className='display-3'>Edit Review for "{JSON.parse(localStorage.getItem('currentReviewData')).title}"</h1>
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
    </div>
  )
}

export default EditReview
