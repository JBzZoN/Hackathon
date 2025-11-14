import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { config  } from '../../config'
import { toast } from 'react-toastify'

function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [dob, setDob] = useState("")

    const navigate = useNavigate()
    
    const onRegister = async() => {
      if (firstName.length == 0) {
        toast.warning('please enter first name')
      } else if (lastName.length == 0) {
        toast.warning('please enter last name')
      } else if (emailAddress.length == 0) {
        toast.warning('please enter email')
      } else if (mobileNumber.length == 0) {
        toast.warning('please enter phone number')
      }  else {
        const response = await axios.post(config.base_url + "/editProfile/"+JSON.parse(localStorage.getItem('data')).id, {firstName,lastName, emailAddress, mobileNumber, dob})
        const data = await response.data;
        if(data.status == "success") {
          toast.success("GOOD")
          navigate('/dashboard/myReviews')
        }else {
          toast.error("BAD")
        }
      }
    }

  return (
    <div>
      <h1 className='display-1 mb-3'>Edit Profile</h1>
      <div class="form-floating mb-3">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
          />
          
        <label htmlFor=''>First Name</label>
      </div>
      <div class="form-floating mb-3">
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
          />
        <label htmlFor=''>Last Name</label>
      </div>
      <div class="form-floating mb-3">
          <input
            onChange={(e) => setEmailAddress(e.target.value)}
            type='email'
            className='form-control'
          />
        <label htmlFor=''>Email</label>
      </div>
      <div class="form-floating mb-3">
          <input
            onChange={(e) => setMobileNumber(e.target.value)}
            type='tel'
            className='form-control'
          />
        <label htmlFor=''>Phone Number</label>
      </div>
      <div class="form-floating mb-3">
          <input
            onChange={(e) => setDob(e.target.value)}
            type='date'
            className='form-control'
          />
         <label htmlFor=''>Date of Birth</label>
      </div>
      <button type="button" class="btn btn-success btn-lg" onClick={onRegister}>Save changes</button>
      
    </div>
  )
}


export default Register