import React ,{useState} from 'react'
import './SignIn.css'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import logo from '../images/Kosi/image 1.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
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
                  <img className='first' src={photo1} alt="photo1"  />
                  <div className='float1'>
                      <img src={photo2} alt='image' />
                  </div>
                  <div className='float2'>
                      <img src={photo3} alt='image' />
                  </div>
                  
              </div>
              <div className='log-details'>
                  <form onSubmit= {handleSubmit}>
                      <h2>Welcome!</h2>

                      <input type='text' placeholder="Enter email " id='email'
                          onChange={e => setDetails({ ...details, email: e.target.value })}
                          value = {details.email}
                      />
                      <input type='password' placeholder="Password" id='password'
                          onChange={e => setDetails({ ...details, password: e.target.value })}
                          value = {details.password}
                      />
                      <select onChange={e => setDetails({ ...details, user_type: e.target.value })}
                      value={details.option}>
                          <option value="" key="">School or Donor</option>
                          <option value='Donor'>Donor</option>
                          <option value="School" key="">School</option>
                      </select>
                      <p>Forgot password?</p>
                      <input className='login' type='submit' value='Login' />
                  </form>
                  <p>Don't have an account? <Link to={'/sign-up'} >Sign Up</Link></p>
                  <p>or continue with</p>

              </div>
          </div>
    </div>
  )
}

export default SignIn