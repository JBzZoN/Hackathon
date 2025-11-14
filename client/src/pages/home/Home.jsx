import React from 'react'
import Navbar from '../../components/navbar'
import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'

function Home() {

  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('data')) {

    }else {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Home
