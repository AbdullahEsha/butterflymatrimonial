import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import logo from '../../asset/image/butterfly.png'
import '../../asset/css/sidebar.css'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const DisplayCV = () => {
  const [cvdata, setCvData] = useState([])
  const [edudata, setEduData] = useState([])
  const [preferenceData, setPreferenceData] = useState([])
  const [siblingData, setSiblingData] = useState([])

  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/admin/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/admin/login')
  }

  const { id } = useParams()

  useEffect(() => {
    getCv()
    getEdu()
    getPreference()
    getSibling()
    return () => {
      //console.log("removing...", e);
    }
  }, [])

  const getCv = async () => {
    fetch(`http://localhost:8000/api/get/cv/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setCvData(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const getEdu = async () => {
    fetch(`http://localhost:8000/api/get/education/qualification/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setEduData(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const getPreference = async () => {
    fetch(`http://localhost:8000/api/get/preference/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setPreferenceData(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const getSibling = async () => {
    fetch(`http://localhost:8000/api/get/sibling/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setSiblingData(data)
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
        <Link class="active" to="/admin/display-cv">
          Display CV
        </Link>
        <Link to="/admin/contact">Display Contacts</Link>
        <Link to="/admin/venus">Venus</Link>
        <Link to="/admin/special-pairing">Special Pairing</Link>
        <Link to="/admin/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>
      <div
        class="content"
        style={{ backgroundColor: '#ededed', padding: '30px' }}
      >
        <div style={{ backgroundColor: '#fff', padding: '30px' }}>
          <Row>
            <Col>
              <h3>
                <b>Profile Information:</b>
              </h3>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={'http://localhost:8000/' + cvdata.image}
                alt="mage"
                height="150px"
              />
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              {' '}
              <h6>
                <b>Name:</b> {cvdata.name}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Gender:</b> {cvdata.gender}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Phone:</b> {cvdata.phone}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Religion:</b> {cvdata.religion}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>Email:</b> {cvdata.email}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>Present Address:</b> {cvdata.presentAddress}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Division:</b> {cvdata.divisionPresent}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Dristrict:</b> {cvdata.dristrictPresent}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>Parmanent Address:</b> {cvdata.parmanentAddress}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Division:</b> {cvdata.divisionParmanent}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Dristrict:</b> {cvdata.dristrictParmanent}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Date Of Birth:</b>{' '}
                {`${
                  cvdata.age
                    ? new Date(cvdata.age).toLocaleString('en-GB', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : ''
                }`}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Limitations Or Special Case:</b> {cvdata.specialCase}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Spouse Preference:</b> {cvdata.spousePreference}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Preference:</b>{' '}
                {preferenceData.map((item) => {
                  return item.preference + ' '
                })}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>About:</b> {cvdata.about}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <h4>
                <b>Professional Qualification:</b>
              </h4>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>Designation:</b> {cvdata.designation}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>Organization Name:</b> {cvdata.organizationName}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <h4>
                <b>Educational Qualification:</b>
              </h4>
              <hr />
            </Col>
          </Row>
          {edudata.map((item) => {
            return (
              <Row>
                <Col>
                  <h6>
                    <b>Institute Name:</b> {item.instituteName}(
                    {item.passingYear})
                  </h6>
                </Col>
              </Row>
            )
          })}
          <Row>
            <Col>
              <br />
              <h4>
                <b>Personal Information:</b>
              </h4>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Height:</b> {cvdata.height}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Weight:</b> {cvdata.weight}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Blood Group:</b> {cvdata.bloodGroup}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Grown Up At:</b> {cvdata.grownUpAt}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                <b>Special Condition:</b> {cvdata.specialCondition}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <h4>
                <b>Family Member:</b>
              </h4>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Father Name:</b> {cvdata.fatherName}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Ocupation:</b> {cvdata.fatherOcupation}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Mother Name:</b> {cvdata.motherName}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Ocupation:</b> {cvdata.motherOcupation}
              </h6>
            </Col>
          </Row>
          <br />
          <h5>
            <b>Sibling</b>
          </h5>
          {siblingData.map((item) => {
            return (
              <>
                <Row>
                  <Col>
                    <h6>
                      <b>Name:</b> {item.name}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <h6>
                      <b>Details:</b> {item.spouseDetails}
                    </h6>
                  </Col>
                  <Col xs={6} md={6}>
                    <h6>
                      <b>Ocupation:</b> {item.ocupation}
                    </h6>
                  </Col>
                </Row>
              </>
            )
          })}
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

export default DisplayCV
