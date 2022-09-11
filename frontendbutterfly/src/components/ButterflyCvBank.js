import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

const ButterflyCvBank = () => {
  const [cvdata, setCvData] = useState([])
  const [edudata, setEduData] = useState([])
  const [siblingData, setSiblingData] = useState([])
  const [professionData, setProfessionData] = useState([])

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

  return (
    <>
      <div className="cv-bank-butterfly-outside">
        <Container className="cv-bank-butterfly">
          <Link
            to={'/butterfly-gallery/' + cvdata.id}
            className="butterfly-gallery-link"
          >
            <h4>Go to Gallery</h4>
          </Link>
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
                />
              </div>
              <br />
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
                <b>Permanent Address:</b> {cvdata.parmanentAddress}
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
              <h6>
                <b>About:</b> {cvdata.about}
              </h6>
            </Col>
          </Row>
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
                      <b>Organization Name:</b>
                      {item.organizationName}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="6">
                    <h6>
                      <b>Department:</b>
                      {item.com_department}
                    </h6>
                  </Col>
                  <Col xs="12" md="6">
                    <h6>
                      <b>Location:</b>
                      {item.com_location}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="12">
                    <h6>
                      <b>Employment Period:</b> {item.from_employment} to{' '}
                      {item.to_employment}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="12">
                    <h6>
                      <b>Reference:</b>
                      {item.com_reference}
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
                      <b>Level of Education:</b> {item.levelOfEducation}(
                      {item.passingYear})
                    </h6>
                  </Col>
                  <Col xs={12} md={6}>
                    <h6>
                      <b>Institute Location:</b> {item.instituteLocation}
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
                <label>Sibling {index + 1}</label>
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
                <b>Profession:</b> {cvdata.profession}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Skin Tone:</b> {cvdata.skinTone}
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
                <b>Preference:</b> {cvdata.preference}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h6>
                <b>Religion:</b> {cvdata.religionPreference}
              </h6>
            </Col>
            <Col xs={6} md={6}>
              <h6>
                <b>Physical Status:</b> {cvdata.physicalStatus}
              </h6>
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
                <b>District Preference:</b> {cvdata.districtPreference}
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ButterflyCvBank
