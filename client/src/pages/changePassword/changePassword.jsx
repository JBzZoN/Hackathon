import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { config  } from '../../config'
import { toast } from 'react-toastify';

function ChangePassword() {

    const [passwordO, setPasswordO] = useState("")
    const [passwordN, setPasswordN] = useState("")
    const [passwordCN, setPasswordCN] = useState("")

    const navigate = useNavigate()
    
    const onChange = async () => {
    	console.log(passwordO, passwordN, passwordCN)
    	if(passwordN != passwordCN) {
    		toast.warning('password does not match')
    	} else {
    		const responce = await axios.post(config.base_url + '/changepassword',{passwordO,passwordN})
    		const data = await responce.data;
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
      <h1 className='display-1 mb-3'>Change Password</h1>
      <div class="mb-3 form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPasswordO(e.target.value)}}/>
        <label for="floatingPassword">Current Password</label>
      </div>
      <div class="mb-3 form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPasswordN(e.target.value)}}/>
        <label for="floatingPassword">New Password</label>
      </div>
      <div class="mb-3 form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {setPasswordCN(e.target.value)}}/>
        <label for="floatingPassword">Confirm New Password</label>
      </div>
      <button type="button" class="btn btn-success btn-lg" onClick={onChange}>Change Password</button>
    </div>
  )
}

export default ChangePassword