import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import img from '../../asset/image/butterfly.png'
import '../../asset/css/login.css'

const Login = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [errorText, seterrorText] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/admin'
  const handleLogin = () => {
    if (user === 'admin@butterflymatrimonial.com' && pass === 'admin123123') {
      auth.login(user)
      navigate(redirectPath, { replace: true })
    } else {
      seterrorText('Invalid Email or Password!')
    }
  }
  return (
    <div className="background_login">
      <div className="container_login">
        <div className="w-full h-full flex justify-center items-center min-h-screen">
          <div className="max-w-md px-6 py-10 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg">
            <form className="flex flex-col">
              <div className="flex justify-center mb-2">
                <img src={img} alt="swopImage" className="w-1/5" />
              </div>
              <h3 id="logintext">Login to your account</h3>
              <br />
              <div align="left">
                <h5>Email</h5>
                <input
                  id="email"
                  type="email"
                  name="email"
                  style={{ backgroundColor: '#ffffff' }}
                  placeholder="Enter Your email."
                  onChange={(e) => setUser(e.target.value)}
                  className="form-control"
                />
              </div>
              <div align="left">
                <h5 id="pass_space">Password</h5>
                <input
                  id="password"
                  type="password"
                  name="password"
                  style={{ backgroundColor: '#ffffff' }}
                  placeholder="Enter Your Password."
                  onChange={(e) => setPass(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="flex justify-center">
                <button id="button_login" type="button" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              {errorText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
