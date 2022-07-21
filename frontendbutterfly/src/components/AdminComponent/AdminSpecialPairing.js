import React from 'react'
import logo from '../../asset/image/butterfly.png'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const AdminSpecialPairing = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/admin/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/admin/login')
  }

  return (
    <>
      <div class="sidebar">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/display-cv">Display CV</Link>
        <Link to="/admin/contact">Display Contacts</Link>
        <Link to="/admin/venus">Venus</Link>
        <Link class="active" to="/admin/special-pairing">
          Special Pairing
        </Link>
        <Link to="/admin/login" onClick={handleLogout}>
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

export default AdminSpecialPairing
