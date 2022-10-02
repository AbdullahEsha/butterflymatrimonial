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

  const exportPdf = async () => {
    // const previewImageFile = document.getElementById('previewImgFile')

    // const response = await fetch(previewImageFile)
    // const blob = await response.blob()
    // const imageFill = new File([blob], 'image.jpg', { type: blob.type })

    // let result_base64 = await new Promise((resolve) => {
    //   let fileReader = new FileReader()
    //   fileReader.onload = () => resolve(fileReader.result)
    //   fileReader.onerror = (error) => {
    //     console.log(error)
    //     alert('An Error occurred please try again, File might be corrupt')
    //   }
    //   fileReader.readAsDataURL(imageFill)
    // })

    var doc = new jsPDF('p', 'mm', 'a4')

    // var img = new Image()
    // img.src = result_base64

    // doc.addImage(img, '*', 20, 24, 30, 30)

    doc.setFontSize(16)
    doc.addFont('ComicSansMS', 'Comic Sans', 'normal')
    doc.setFont('Comic Sans')
    doc.setFont(undefined, 'bold')
    doc.text(20, 20, 'Profile Information:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 22, 170, 0.1, 'F') // black line

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(20, 60, 'Name:', 'left')

    doc.setFontSize(11)
    doc.setFont(undefined, 'normal')
    doc.text(32, 60, `${cvdata.name}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 60, 'Gender:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(125, 60, `${cvdata.gender}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 68, 'Phone:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(32, 68, `${cvdata.phone}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 68, 'Religion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(126, 68, `${cvdata.religion}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 76, 'Email:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(32, 76, `${cvdata.email}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 76, 'Annual Income:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(138, 76, `${cvdata.annualIncome}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 84, 'Present Address:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(49, 84, `${cvdata.presentAddress}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 94, 'Date Of Birth:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(45, 94, `${cvdata.dob}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 94, 'Special Case:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      132.5,
      94,
      `${cvdata.specialCase ? cvdata.specialCase : 'None'}`,
      'left',
    )

    doc.setFont(undefined, 'bold')
    doc.text(20, 102, 'Height:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(33.5, 102, `${cvdata.height}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 102, 'Weight:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(124, 102, `${cvdata.weight}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 110, 'Blood Group:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(43.5, 110, `${cvdata.bloodGroup}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 110, 'Grown Up At:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(134.5, 110, `${cvdata.grownUpAt}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 118, 'Citizenship:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(41, 118, `${cvdata.citizenship}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 118, 'Complexion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(132, 118, `${cvdata.complexion}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 126, 'Family Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(45, 126, `${cvdata.familyStatus}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 126, 'Hobby:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(123, 126, `${cvdata.hobby}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 134, 'Home Town:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(42, 134, `${cvdata.hometown}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 134, 'Marital Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(136, 134, `${cvdata.maritalStatus}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 142, 'Physical Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(47, 142, `${cvdata.physicalStatus}`, 'left') //

    doc.setFont(undefined, 'bold')
    doc.text(20, 150, 'About:', 'left')

    var y = 150

    doc.setFont(undefined, 'normal')
    var text_width = doc.getTextWidth(cvdata.about ? cvdata.about : 'None')
    var splitTitle = doc.splitTextToSize(
      cvdata.about ? cvdata.about : 'None',
      170,
    )
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25

    y = y + 10

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Educational Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    let x = 20
    y = y + 5

    doc.setFontSize(11)
    edudata.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Institute Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(
        x + 27,
        y,
        `${item.instituteName + '(' + item.passingYear + ')'}`,
        'left',
      )

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Concentration/Major/Group:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 139.5, y, `${item.group}`, 'left')

      y = y + 6

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Level of Education:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 33, y, `${item.levelOfEducation}`, 'left')

      y += 8
    })

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Professional Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 7
    doc.setFontSize(11)
    professionData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Designation:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 21.5, y, `${item.designation}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 118.5, y, `${item.companyName}`, 'left')

      y = y + 6

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Company Location:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 34, y, `${item.com_location}`, 'left')

      y = y + 6

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Employment Period:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(
        x + 35,
        y,
        `${item.from_employment} to ${item.to_employment}`,
        'left',
      )
      y = y + 8
    })

    if (y >= 210) {
      doc.addPage()
      y = 20 // Restart height position
    } else {
      y = y + 8
    }

    // y += 8
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Family Member:', 'left')

    y += 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Father Name:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 24, y, `${cvdata.fatherName}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Father Ocupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 121,
      y,
      `${cvdata.fatherOccupation ? cvdata.fatherOccupation : 'None'}`,
      'left',
    )

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Details:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 13,
      y,
      `${cvdata.fatherDetails ? cvdata.fatherDetails : 'None'}`,
      'left',
    )

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Mother Name:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 25, y, `${cvdata.motherName}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Mother Ocupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 122.5,
      y,
      `${cvdata.motherOccupation ? cvdata.motherOccupation : 'None'}`,
      'left',
    )

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Details:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 13,
      y,
      `${cvdata.motherDetails ? cvdata.motherDetails : 'None'}`,
      'left',
    )

    y = y + 8
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Siblings:', 'left')

    y = y + 5
    siblingData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 12.5, y, `${item.name}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Ocupation:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 111, y, `${item.occupation}`, 'left')

      y = y + 8

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Details:', 'left')

      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.details)
      splitTitle = doc.splitTextToSize(item.details, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25
      y += 8
    })

    y += 8

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Preference Information:', 'left')

    y += 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Age Range:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 20, y, `${cvdata.ageMinimum} to ${cvdata.ageMaximum}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Height Range:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 115,
      y,
      `${cvdata.heightMinimum} to ${cvdata.heightMaximum}`,
      'left',
    )

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Marital Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 26, y, `${cvdata.maritalStatusPreference}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Complexion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 112, y, `${cvdata.complexionPreference}`, 'left')

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Occupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 21, y, `${cvdata.occupationPreference}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Education:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 108.5, y, `${cvdata.educationPreference}`, 'left')

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Location:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 16.5, y, `${cvdata.location}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Religion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 106, y, `${cvdata.religionPreference}`, 'left')

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Details:', 'left')

    doc.setFont(undefined, 'normal')
    text_width = doc.getTextWidth(
      cvdata.preferenceDetails ? cvdata.preferenceDetails : 'None',
    )
    splitTitle = doc.splitTextToSize(
      cvdata.preferenceDetails ? cvdata.preferenceDetails : 'None',
      170,
    )
    doc.text(x, y + 5, splitTitle, 'left')
    y = y + text_width / 25
    y += 8

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
          <div className="cv-bank-butterfly-outside">
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
                <div className="previewImg">
                  <img
                    src={'https://api.butterflymatrimonial.com/' + cvdata.image}
                    alt="previewImg"
                    id="previewImgFile"
                  />
                </div>
                <a
                  href={
                    'https://www.butterflymatrimonial.com/butterfly-gallery/' +
                    cvdata.u_id
                  }
                  className="butterfly-gallery-link"
                >
                  <h5 className="show-image-btn">View more image.</h5>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
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
                  <b>Date Of Birth:</b>{' '}
                  {`${
                    cvdata.dob
                      ? new Date(cvdata.dob).toLocaleString('en-GB', {
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
                  <b>About:</b> {cvdata.about}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <br />
                <h4>
                  <b>Educational Information:</b>
                </h4>
                <hr />
              </Col>
            </Row>
            {edudata.map((item, index) => {
              return (
                <>
                  <label>Academic {index + 1}</label>
                  <Row>
                    <Col xs={12} md={6}>
                      <h6>
                        <b>Institute Name:</b> {item.instituteName}(
                        {item.passingYear})
                      </h6>
                    </Col>
                    <Col xs={12} md={6}>
                      <h6>
                        <b>Concentration/Major/Group:</b> {item.group}
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <h6>
                        <b>Level of Education:</b> {item.levelOfEducation}
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
                  <b>Professional Information:</b>
                </h4>
                <hr />
              </Col>
            </Row>
            {professionData.map((item, index) => {
              return (
                <>
                  <label>Profession {index + 1}</label>
                  <Row>
                    <Col xs="12" md="6">
                      <h6>
                        <b>Designation:</b>
                        {item.designation}
                      </h6>
                    </Col>
                    <Col xs="12" md="6">
                      <h6>
                        <b>Company Name:</b>
                        {item.companyName}
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" md="6">
                      <h6>
                        <b>Employment Period:</b> {item.from_employment} to{' '}
                        {item.to_employment}
                      </h6>
                    </Col>
                    <Col xs="12" md="6">
                      <h6>
                        <b>Location:</b>
                        {item.com_location}
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
                  <b>Occupation:</b> {cvdata.fatherOccupation}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h6>
                  <b>Father Details:</b> {cvdata.fatherDetails}
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
                  <b>Ocupation:</b> {cvdata.motherOccupation}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h6>
                  <b>Mother Details:</b> {cvdata.motherDetails}
                </h6>
              </Col>
            </Row>
            {siblingData.map((item, index) => {
              return (
                <>
                  <label>Sibling {index + 1}</label>
                  <Row>
                    <Col xs={6} md={6}>
                      <h6>
                        <b>Name:</b> {item.name}
                      </h6>
                    </Col>
                    <Col xs={6} md={6}>
                      <h6>
                        <b>Ocupation:</b> {item.occupation}
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
            <Row>
              <Col>
                <br />
                <h4>
                  <b>Preference Information:</b>
                </h4>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <h6>
                  <b>Age Range:</b> {cvdata.ageMinimum} to {cvdata.ageMaximum}
                </h6>
              </Col>
              <Col xs={6} md={6}>
                <h6>
                  <b>Height Range:</b> {cvdata.heightMinimum} to{' '}
                  {cvdata.heightMaximum}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <h6>
                  <b>Marital Status:</b> {cvdata.maritalStatusPreference}
                </h6>
              </Col>
              <Col xs={6} md={6}>
                <h6>
                  <b>Complexion:</b> {cvdata.complexionPreference}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <h6>
                  <b>Occupation:</b> {cvdata.occupationPreference}
                </h6>
              </Col>
              <Col xs={6} md={6}>
                <h6>
                  <b>Education:</b> {cvdata.educationPreference}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <h6>
                  <b>Location:</b> {cvdata.location}
                </h6>
              </Col>
              <Col xs={6} md={6}>
                <h6>
                  <b>Religion:</b> {cvdata.religionPreference}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h6>
                  <b>Details:</b> {cvdata.preferenceDetails}
                </h6>
              </Col>
            </Row>
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

export default DisplayCV
