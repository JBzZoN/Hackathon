import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../config';

function SharedWithMe() {
  const [data, setData] = useState([])

  //*******************CHANGE THIS AFTER LOGIN*******************//
  const user_id = 1;

  async function generateReviews() {
    console.log()
    const response = await axios.get(config.base_url + "/review/getShares/" + JSON.parse(localStorage.getItem('data')).id)
    const data = await response.data
    console.log(data.data)
    setData(data.data)
  }

  useEffect(() => {
    generateReviews();
  }, [])

  return (

     <div>
       <h1 className='display-1'>SHARED REVIEWS</h1>
    <div class="accordion" id="accordionExample">
      
      {
          data.map(e => <div key={e.id}>
            <div class="accordion-item">
      <h2 class="accordion-header"> 
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${e.id}`} aria-expanded="true" aria-controls={`collapse${e.id}`}>
          {e.title + " review sent to you"}
        </button>
      </h2>
      <div id={`collapse${e.id}`} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>Rating: {e.rating}</p>
          <p>Review: {e.review}</p>
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

export default SharedWithMe
