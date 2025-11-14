import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../config'
import { useNavigate } from 'react-router';

function MyReviews() {

  const [data, setData] = useState([])

  //*******************CHANGE THIS AFTER LOGIN*******************//
  const user_id = JSON.parse(localStorage.getItem('data')).id;

  async function generateReviews() {
    const response = await axios.get(config.base_url + "/review/" + user_id)
    const data = await response.data
    setData(data.data)
  }

  const navigate = useNavigate()

  useEffect(() => {
    generateReviews();
  }, [])

  return (

     <div>
       <h1 className='display-1'>MY REVIEWS</h1>
    <div class="accordion" id="accordionExample">
      
      {
          data.map(e => <div key={e.id}>
            <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${e.id}`} aria-expanded="true" aria-controls={`collapse${e.id}`}>
          {e.title + " review"}
        </button>
      </h2>
      <div id={`collapse${e.id}`} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>Rating: {e.rating}</p>
          <p>Review: {e.review}</p>
          <p>Last updated: {e.modified}</p>
          <button className='btn btn-primary me-3' onClick={() => {
            localStorage.setItem('currentReviewData', JSON.stringify(e))
    navigate("/dashboard/editReview")

  }}>Edit</button>
          <button className='btn btn-success me-3' onClick={() => {
            localStorage.setItem('currentReviewData', JSON.stringify(e))
    navigate("/dashboard/shareReview")

  }}>Share</button>
          <button className='btn btn-danger me-3' onClick={() => {
    localStorage.setItem('currentReviewData', JSON.stringify(e))
    navigate("/dashboard/deleteReview")
  }}>Delete</button>
        </div>
      </div>
    </div>
          </div>
          )
        }
    </div>
     </div>
  )
}

export default MyReviews
