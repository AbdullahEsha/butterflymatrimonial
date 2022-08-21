import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import logo from '../../asset/image/butterfly.png'
import '../../asset/css/sidebar.css'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf'

const DisplayCV = () => {
  const [cvdata, setCvData] = useState([])
  const [edudata, setEduData] = useState([])
  const [preferenceData, setPreferenceData] = useState([])
  const [siblingData, setSiblingData] = useState([])
  const [professionData, setProfessionData] = useState([])

  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  const { id } = useParams()

  useEffect(() => {
    getCv()
    getEdu()
    getPreference()
    getSibling()
    getProfession()
    return () => {
      //console.log("removing...", e);
    }
  }, [])

  const getCv = async () => {
    fetch(`https://api.butterflymatrimonial.com/api/get/cv/${id}`, {})
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
    fetch(
      `https://api.butterflymatrimonial.com/api/get/education/qualification/${id}`,
      {},
    )
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
    fetch(`https://api.butterflymatrimonial.com/api/get/preference/${id}`, {})
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
    fetch(`https://api.butterflymatrimonial.com/api/get/sibling/${id}`, {})
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
  const getProfession = async () => {
    fetch(`https://api.butterflymatrimonial.com/api/get/professional/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setProfessionData(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  // let file = new File([`http://api.butterflymatrimonial.com/${cvdata.image}`], 'foo.jpg', {
  //   type: 'image/jpg',
  // })

  // fetch(img.src)
  //   .then((res) => console.log(res))
  //   .then((blob) => {
  //     const file = new File([blob], 'dot.png', blob)
  //     console.log('src', file)
  //   })

  const exportPdf = async () => {
    var doc = new jsPDF('p', 'mm', 'a4')
    let img = document.getElementById('image')
    var urlEncoded = encodeURI(img.src)

    var img2 = new Image()
    img2.src = urlEncoded
    img2.crossOrigin = false
    doc.addImage(img2, 20, 24, 30, 30)

    doc.setFontSize(16)
    doc.addFont('ComicSansMS', 'Comic Sans', 'normal')
    doc.setFont('Comic Sans')
    doc.setFont(undefined, 'bold')
    doc.text(20, 20, 'Profile Information:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 22, 170, 0.1, 'F') // black line

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 60, 'Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(31, 60, `${cvdata.name}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 60, 'Gender:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(123, 60, `${cvdata.gender}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 68, 'Phone:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(31, 68, `${cvdata.phone}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 68, 'Religion:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(125, 68, `${cvdata.religion}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 76, 'Email:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(31, 76, `${cvdata.email}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 84, 'Present Address:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(47, 84, `${cvdata.presentAddress}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 92, 'Present Division:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(47, 92, `${cvdata.divisionPresent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 92, 'Present Dristrict:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(137, 92, `${cvdata.dristrictPresent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 100, 'Permanent Address:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(52, 100, `${cvdata.parmanentAddress}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 108, 'Permanent Division:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(52, 108, `${cvdata.divisionParmanent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 108, 'Permanent Dristrict:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(142, 108, `${cvdata.dristrictParmanent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 116, 'Date Of Birth:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(42, 116, `${cvdata.age}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 116, 'Limitations Or Species Case:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(155, 116, `${cvdata.specialCase}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 124, 'Spouse Preference:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(49, 124, `${cvdata.spousePreference}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 124, 'Preference:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(
      127.5,
      124,
      `${preferenceData.map((item) => item.preference)}`,
      'left',
    )

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 132, 'About:', 'left')

    var y = 132

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    var text_width = doc.getTextWidth(cvdata.about)
    var splitTitle = doc.splitTextToSize(cvdata.about, 170)
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25

    y = y - 2.5
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Personal Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Height:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(32, y, `${cvdata.height}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, y, 'Weight:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(122, y, `${cvdata.weight + '(kg)'}`, 'left')

    y = y + 8
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Blood Group:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(41.5, y, `${cvdata.bloodGroup}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, y, 'Grown Up At:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(132, y, `${cvdata.grownUpAt}`, 'left')

    y = y + 8
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Special Condition:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    text_width = doc.getTextWidth(cvdata.specialCondition)
    splitTitle = doc.splitTextToSize(cvdata.specialCondition, 170)
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Educational Qualification:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    let x = 20
    y = y + 5

    edudata.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Institute Name:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(
        x + 24,
        y,
        `${item.instituteName + '(' + item.passingYear + ')'}`,
        'left',
      )

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Concentration/Major/Group:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 135, y, `${item.group}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Level of Education:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 30, y, `${item.levelOfEducation}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Institute Location:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 118.5, y, `${item.instituteLocation}`, 'left')

      y += 8
    })

    if (y >= 260) {
      doc.addPage()
      y = 20 // Restart height position
      var f = true
    } else {
      y = y + 2
      f = false
    }

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Professional Qualification:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    professionData.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Designation:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 19, y, `${item.designation}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Name:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 116, y, `${item.organizationName}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Department:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 20, y, `${item.com_department}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Location:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 120.5, y, `${item.com_location}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Employment Period:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(
        x + 32,
        y,
        `${item.from_employment} to ${item.to_employment}`,
        'left',
      )

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Reference:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.com_reference)
      splitTitle = doc.splitTextToSize(item.com_reference, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25
      //doc.text(x, y, `${item.com_reference}`, 'left')

      y += 8
    })

    if (y >= 260 && f === false) {
      doc.addPage()
      y = 20 // Restart height position
    }

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Family Member:', 'left')

    y += 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Father Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 22, y, `${cvdata.fatherName}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Father Ocupation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 119, y, `${cvdata.fatherOcupation}`, 'left')

    y = y + 8
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Mother Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 23, y, `${cvdata.motherName}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Mother Ocupation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 120, y, `${cvdata.motherOcupation}`, 'left')

    y = y + 8
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Sibling`s:', 'left')

    y = y + 5
    siblingData.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Name:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 10.5, y, `${item.name}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Ocupation:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 107.5, y, `${item.ocupation}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Details:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.details)
      splitTitle = doc.splitTextToSize(item.details, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25

      y += 8
    })

    doc.save(cvdata.name + ' Cv.pdf')
  }

  return (
    <>
      <div class="sidebar">
        <Link to="/">Dashboard</Link>
        <Link class="active" to="/display-cv">
          Display CV
        </Link>
        <Link to="/contact">Display Contacts</Link>
        <Link to="/venus">Venus</Link>
        <Link to="/special-pairing">Special Pairing</Link>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>
      <div
        class="content"
        style={{ backgroundColor: '#ededed', padding: '30px' }}
      >
        <div className="download-pdf-btn-outer">
          <button
            onClick={exportPdf}
            className="cv_bankButton_BackNext"
            style={{ float: 'right' }}
          >
            Download PDF
          </button>
        </div>

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
                src={'https://api.butterflymatrimonial.com/' + cvdata.image}
                id="image"
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
          {professionData.map((item, index) => {
            return (
              <>
                <h5 style={{ color: '#ff425c' }}>Company {index + 1}</h5>
                <Row>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Company Name:</b> {item.organizationName}
                    </h6>
                  </Col>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Designation:</b> {item.designation}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Company Department:</b> {item.com_department}
                    </h6>
                  </Col>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Company Location:</b> {item.com_location}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Employment Period:</b> {item.from_employment} to{' '}
                      {item.to_employment}
                    </h6>
                  </Col>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Reference:</b> {item.com_reference}
                    </h6>
                  </Col>
                </Row>
              </>
            )
          })}
          <Row>
            <Col>
              <br />
              <h4>
                <b>Educational Qualification:</b>
              </h4>
              <hr />
            </Col>
          </Row>
          {edudata.map((item, index) => {
            return (
              <>
                <h5 style={{ color: '#ff425c' }}>Academic {index + 1}</h5>
                <Row>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Institute Name:</b> {item.instituteName}(
                      {item.passingYear})
                    </h6>
                  </Col>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Institute Location:</b> {item.instituteLocation}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Group:</b> {item.group}
                    </h6>
                  </Col>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Level Of Education:</b> {item.levelOfEducation}
                    </h6>
                  </Col>
                </Row>
              </>
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
          {siblingData.map((item, index) => {
            return (
              <>
                <h5 style={{ color: '#ff425c' }}>Sibling {index + 1}</h5>
                <Row>
                  <Col xs={6} md={6}>
                    <h6>
                      <b>Name:</b> {item.name}
                    </h6>
                  </Col>
                  <Col xs={6} md={6}>
                    <h6>
                      <b>Ocupation:</b> {item.ocupation}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>
                      <b>Details:</b> {item.details}
                    </h6>
                  </Col>
                </Row>
              </>
            )
          })}
        </div>
      </div>

      <div className="logoStyle">
        <Link to="https://butterflymatrimonial.com/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default DisplayCV
