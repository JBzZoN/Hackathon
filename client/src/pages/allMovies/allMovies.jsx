import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../config'
import CreateReview from '../createReview/createReview'


function AllMovies() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  async function generateMovies() {
    const response = await axios.get(config.base_url + "/movie")
    const data = await response.data

    setData(data.data)
  }

  useEffect(() => {
    setPage(0)
    generateMovies()
  }, [])

  return (
    (page == 0) ? (<div className='row'>
      <h1 className='display-1'>ALL MOVIES</h1>
      {data.map(e => <div class="card col-3 me-3 mb-3" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">{e.title}</h5>
            <p class="card-text">{e.released}</p>
            <a href="#" class="btn btn-primary" onClick={() => {
              setPage(1)
              localStorage.setItem("currMovieForReview", JSON.stringify(e))
            }}>Review this movie</a>
          </div>
      </div>)}
    </div>) : <CreateReview state={{page, setPage}}/>
  )
}

export default AllMovies
