import React from 'react'
import logo from '../../asset/image/butterfly.png'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const AdminVenus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  return (
    <>
      <div class="sidebar">
        <Link to="/">Dashboard</Link>
        <Link to="/display-cv">Display CV</Link>
        <Link to="/contact">Display Contacts</Link>
        <Link class="active" to="/admin/venus">
          Venus
        </Link>
        <Link to="/special-pairing">Special Pairing</Link>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>

      <div
        class="content"
        style={{ backgroundColor: '#ededed', padding: '20px' }}
      ></div>
      <div className="logoStyle">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default AdminVenus
