import React, { useMemo } from 'react'
import { Row, Col } from 'react-bootstrap'
import logo from '../../asset/image/butterfly.png'
import { AiOutlineCamera, AiOutlineUser } from 'react-icons/ai'
import { BsWallet2 } from 'react-icons/bs'
import { Chart } from 'react-charts'
import '../../asset/css/sidebar.css'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/admin/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/admin/login')
  }

  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    [],
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  )

  return (
    <>
      <div class="sidebar">
        <Link class="active" to="/admin">
          Dashboard
        </Link>
        <Link to="/admin/display-cv">Display CV</Link>
        <Link to="/admin/contact">Display Contacts</Link>
        <Link to="/admin/venus">Venus</Link>
        <Link to="/admin/special-pairing">Special Pairing</Link>
        <Link to="/admin/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>
      <div class="content" style={{ backgroundColor: '#ededed' }}>
        <br />
        <Row>
          <Col xs={12} md={4}>
            <div id="firstComponentDisplay" className="componentDisplay">
              <div className="row">
                <div className="col-3">
                  <AiOutlineCamera
                    size={45}
                    color="white"
                    className="iconTopDisplay"
                  />
                </div>
                <div className="col-9">
                  <h6 className="textVartical">
                    All CV Count
                    <br />
                    55+
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div id="secondComponentDisplay" className="componentDisplay">
              <div className="row">
                <div className="col-3">
                  <AiOutlineUser
                    size={45}
                    color="white"
                    className="iconTopDisplay"
                  />
                </div>
                <div className="col-9">
                  <h6 className="textVartical">
                    Recently added CV
                    <br />
                    55+
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div id="thirdComponentDisplay" className="componentDisplay">
              <div className="row">
                <div className="col-3">
                  <BsWallet2
                    size={45}
                    color="white"
                    className="iconTopDisplay"
                  />
                </div>
                <div className="col-9">
                  <h6 className="textVartical">
                    Others
                    <br />
                    55+
                  </h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <div className="row" style={{ padding: '15px' }}>
          <div
            className="col-sm-12 col-md-8 col-lg-8"
            align="center"
            id="backgroundDashboard"
            style={{ padding: '40px' }}
          >
            <div style={{ height: '280px' }}>
              <Chart data={data} axes={axes} />
            </div>
            <br />
            <h6>Cv data Chart</h6>
          </div>

          <div
            className="col-sm-12 col-md-4 col-lg-4"
            align="center"
            id="backgroundDashboard"
            style={{ padding: '40px' }}
          >
            <div style={{ height: '280px' }}>
              <Chart data={data} axes={axes} />
            </div>
            <br />
            <h6>Cv data Chart</h6>
          </div>
        </div>
        <div className="row" style={{ padding: '15px' }}>
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            style={{ backgroundColor: '#fff' }}
          >
            <br />
            <p>Recent CV's</p>
            <br />
            <div class="table-responsive table-hover">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6" style={{ backgroundColor: '#fff' }}></div>
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

export default Dashboard
