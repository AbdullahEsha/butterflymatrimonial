import React, { useEffect, useState } from 'react'
import logo from '../../asset/image/butterfly.png'
import '../../asset/css/sidebar.css'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
import { MdForwardToInbox } from 'react-icons/md'

const DisplayContact = () => {
  const [contact, setContact] = useState([])
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/admin/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/admin/login')
  }

  useEffect(() => {
    getAllCv()
    return () => {
      //console.log("removing...", e);
    }
  }, [])

  const getAllCv = async () => {
    fetch(`http://localhost:8000/api/get/contact/all`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setContact(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }
  return (
    <>
      <div class="sidebar">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/display-cv">Display CV</Link>
        <Link class="active" to="/admin/contact">
          Display Contacts
        </Link>
        <Link to="/admin/venus">Venus</Link>
        <Link to="/admin/special-pairing">Special Pairing</Link>
        <Link to="/admin/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>

      <div
        class="content"
        style={{ backgroundColor: '#ededed', padding: '20px' }}
      >
        <div style={{ backgroundColor: '#fff', padding: '20px' }}>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Question</th>
                  <th scope="col">Date</th>
                  <th scope="col">Send Mail</th>
                </tr>
              </thead>
              <tbody>
                {contact.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.question}</td>
                        <td>{`${
                          item.created_at
                            ? new Date(item.created_at).toLocaleString(
                                'en-GB',
                                {
                                  weekday: 'short',
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                },
                              )
                            : ''
                        }`}</td>
                        <td>
                          <a
                            href={`mailto:${item.email}`}
                            title="Send Mail"
                            className="btn btn-outline-info"
                          >
                            <MdForwardToInbox size={20} />
                          </a>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="logoStyle">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default DisplayContact
