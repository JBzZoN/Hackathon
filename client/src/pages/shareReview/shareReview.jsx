import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { config } from '../../config'
import { toast } from 'react-toastify'

function ShareReview() {

  const navigate = useNavigate()

  const [data, setData] = useState([])

  const [shareUserId, setShareUserId] = useState([])

  async function loadData() {
    const response = await axios.get(config.base_url + "/all")
    const data = await response.data
    setData(data.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const onShare = async () => {
    
    console.log(shareUserId)
    if(shareUserId == JSON.parse(localStorage.getItem('data')).id) {
      toast.warning("You cannot share to yourself")
      return
    }

    shareUserId.forEach(async (val) => {
      const response = await axios.post(config.base_url + "/review/addShare", {"user_id": val, "review_id": JSON.parse(localStorage.getItem('currentReviewData')).id})
          navigate('/dashboard/myReviews')
    })
  }

  return <div className='mt-5'>
      <div className="card text-center bg-danger text-light">
  <div className="card-header">
    Share review
  </div>
  <div className="card-body bg-danger-subtle text-dark">
    <h5 className="card-title">Are your sure you want to delete this review?</h5>



{data.map(e =><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id={"checkDefault"+e.id} onChange={(f) => {
    if(f.target.checked) {
      setShareUserId(shareUserId.concat([e.id]))
    }else {
      setShareUserId(shareUserId.filter(m => {return (m != e.id);}))
    }
  }}/>
  <label class="form-check-label" for="checkDefault">
    {`${e.first_name} ${e.last_name}(${e.email})`}
  </label>
</div>
    )}

    <a href="#" className="btn btn-primary" onClick={onShare}>Share</a>
  </div>
  <div className="card-footer text-body-secondary bg-danger">
    {JSON.parse(localStorage.getItem('currentReviewData')).modified}
  </div>
</div>
    </div>
}

export default ShareReview
