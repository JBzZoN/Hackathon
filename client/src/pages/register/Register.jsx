import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { config  } from '../../config'
import { toast } from 'react-toastify';

function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [passwordC, setPasswordC] = useState("")

    const navigate = useNavigate()
    
    const onLogin = () => {
        navigate('/')
    }
    const onRegister = async() => {
      if (firstName.length == 0) {
        toast.warning('please enter first name')
      } else if (lastName.length == 0) {
        toast.warning('please enter last name')
      } else if (emailAddress.length == 0) {
        toast.warning('please enter email')
      } else if (mobileNumber.length == 0) {
        toast.warning('please enter phone number')
      } else if (password.length == 0) {
        toast.warning('please enter password')
      } else if (passwordC.length == 0) {
        toast.warning('please confirm password')
      } else if (password != passwordC) {
        toast.warning('password does not match')
      } else {
        console.log(firstName, lastName, emailAddress, mobileNumber, dob, password, passwordC)
        const response = await axios.post(config.base_url + "/signup", {firstName,lastName, emailAddress, password, mobileNumber, dob})
        const data = await response.data;
        console.log(data)
        if(data.status == "success") {
          toast.success("GOOD")
          navigate('/')
        }else {
          toast.error("BAD")
        }
      }
    }

  return (
    <div>
      <h1 className='display-1 mb-3'>Sign up</h1>
      <div class="form-floating mb-3">
        
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
            id="floatingInput"
          /><label htmlFor='floatingInput'>First Name</label>
      </div>
      <div class="form-floating mb-3">
        
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
            id="floatingInput"
          /><label htmlFor='floatingInput'>Last Name</label>
      </div>
      <div class="form-floating mb-3">
        
          <input
            onChange={(e) => setEmailAddress(e.target.value)}
            type='email'
            className='form-control'
            id="floatingInput"
          /><label htmlFor='floatingInput'>Email</label>
      </div>
      <div class="form-floating mb-3">
        
          <input
            onChange={(e) => setMobileNumber(e.target.value)}
            type='tel'
            className='form-control'
            id="floatingInput"
          /><label htmlFor='floatingInput'>Phone Number</label>
      </div>
      <div class="form-floating mb-3">
         
          <input
            onChange={(e) => setDob(e.target.value)}
            type='date'
            className='form-control'
            id="floatingInput"
          /><label htmlFor='floatingInput'>Date of birth</label>
      </div>
      <div class="mb-3 form-floating">
        
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            id="floatingInput"
          />  <label htmlFor='floatingInput'>Password</label>
      </div>
      <div class="mb-3 form-floating">
        
          <input
            onChange={(e) => setPasswordC(e.target.value)}
            type='password'
            className='form-control'
            id="floatingInput"
          /><label htmlFor='floatingInput'>Confirm Password</label>
      </div>
      <button type="button" class="btn btn-success btn-lg" onClick={onRegister}>Register</button>
      <button type="button" class="btn btn-lg btn-link" onClick={onLogin}>Already registered? Sign in</button>
    </div>
  )
}


export default Register