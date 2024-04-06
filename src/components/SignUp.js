import React ,{useState} from 'react'
import './SignIn.css'
import benn from '../images/Kosi/benn.png'
import logo from '../images/Kosi/image 1.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
const SignIn = () => {
    const [details, setDetails] = useState({
        email: "",
        password: '',
        user_type: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details)
        try {
            axios.post('dc68-105-113-107-96.ngrok.io/auth/signin', details).then(res=>console.log('successful'))
        } catch (error) {
            console.log(error)
        }
        setDetails({...details, email:'', password:''})
    }
    const handleChange = (e) => {
        
    }
  return (
      <div className='container'>
          
          <nav className='logo'>
              <img src={logo} alt="" />
          </nav>
          <div className="main">
              <div className='pic'>
                  <img className='first' src={benn} alt="photo1"  />
                  
                  
              </div>
              <div className='log-details'>
                  <form onSubmit= {handleSubmit}>
                      <h2>Be Part of Us!</h2>
                    <input type='text' placeholder="Full Name" id='email'
                          onChange={e => setDetails({ ...details, name: e.target.value })}
                          value = {details.name||''}
                      />
                      <input type='text' placeholder="Enter email address" id='email'
                          onChange={e => setDetails({ ...details, email: e.target.value })}
                          value = {details.email}
                      />
                      <input type='password' placeholder="Password" id='password'
                          onChange={e => setDetails({ ...details, password: e.target.value })}
                          value = {details.password}
                      />
                      <input type='password' placeholder="Confirm Password" id='cpassword'
                          onChange={e => setDetails({ ...details, cPassword: e.target.value })}
                          value = {details.cPassword||''}
                      />
                      <select onChange={e => setDetails({ ...details, user_type: e.target.value })}
                      value={details.option}>
                          <option value="" key="">School or Donor</option>
                          <option value='Donor'>Donor</option>
                          <option value="School" key="">School</option>
                      </select>
                      <input type='text' placeholder="Contact" id='text'
                          onChange={e => setDetails({ ...details, contact: e.target.value })}
                          value = {details.contact}
                      />
                      <input type='text' placeholder="Occupation" id='occupation'
                          onChange={e => setDetails({ ...details, password: e.target.value })}
                          value = {details.password}
                      />
                      
                      <input className='login' type='submit' value='Login' />
                  </form>
                  <p>Already have an account? <Link to={'/sign-in'}>Sign In</Link></p>
                  

              </div>
          </div>
    </div>
  )
}

export default SignIn