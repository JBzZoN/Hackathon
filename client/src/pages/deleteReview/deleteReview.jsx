import React from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { config } from '../../config'

function DeleteReview() {

  const navigate = useNavigate()
  const onDelete = async () => {
    
    const response = await axios.delete(config.base_url + "/review/" + JSON.parse(localStorage.getItem('currentReviewData')).id)
    navigate("/dashboard/myReviews")
  }

  return (
    <div className='mt-5'>
      <div className="card text-center bg-danger text-light">
  <div className="card-header">
    Delete Review
  </div>
  <div className="card-body bg-danger-subtle text-dark">
    <h5 className="card-title">Are your sure you want to delete this review?</h5>
    <h5 className="card-title">DATA OF REVIEW</h5>

    <a href="#" className="btn btn-primary" onClick={onDelete}>Delete</a>
  </div>
  <div className="card-footer text-body-secondary bg-danger">
    2 days ago
  </div>
</div>
    </div>
  )
}

export default DeleteReview
