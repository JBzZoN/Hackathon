import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../config';

function AllReviews() {
  const [data, setData] = useState([])

  //*******************CHANGE THIS AFTER LOGIN*******************//
  const user_id = 1;

  async function generateReviews() {
    const response = await axios.get(config.base_url + "/review/")
    const data = await response.data
    console.log(data.data)
    setData(data.data)
  }

  useEffect(() => {
    generateReviews();
  }, [])

  return (

     <div>
       <h1 className='display-1'>ALL REVIEWS</h1>
    <div class="accordion" id="accordionExample">
      
      {
          data.map(e => <div key={e.id}>
            <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${e.id}`} aria-expanded="true" aria-controls={`collapse${e.id}`}>
          {e.title + " review by " + e.first_name + " " + e.last_name}
        </button>
      </h2>
      <div id={`collapse${e.id}`} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>Rating: {e.rating}</p>
          <p>Review: {e.review}</p>
          <p>Last updated: {e.modified}</p>
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

export default AllReviews
