import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { config } from '../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

function Login() {
  const [emailAddress, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()

  const onSignIn = async () => {
    const response = await axios.post(config.base_url + "/", {emailAddress, password})
    const data = await response.data;
    console.log(data)
    if(data.status == "success") {
      toast.success("GOOD")
      localStorage.setItem('data', JSON.stringify(data.data[0]))
      navigate('/dashboard/allMovies')
    }else {
      toast.error("BAD")  
    }
  }

  const onRegister = () => {
    navigate('/register')
  }

  return (
    <div>
      <h1 className='display-1 mb-3'>Login</h1>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value)}}/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="mb-3 form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <label for="floatingPassword">Password</label>
      </div>
      <button type="button" class="btn btn-primary btn-lg" onClick={onSignIn}>Sign in</button>
      <button type="button" class="btn btn-link btn-lg" onClick={onRegister}>No Account? Register here</button>
    </div>
  )
}

export default Login
