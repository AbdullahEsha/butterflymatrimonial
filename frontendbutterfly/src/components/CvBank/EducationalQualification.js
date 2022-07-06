import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'

const EducationalQulification = (props) => {
  const [educationalQulification, setEducationalQulification] = useState([
    {
      instituteName: '',
      passingYear: '',
    },
  ])

  const handleServiceAdd = () => {
    setEducationalQulification([
      ...educationalQulification,
      {
        instituteName: '',
        passingYear: '',
      },
    ])
  }
  const handleServiceRemove = (index) => {
    const list = [...educationalQulification]
    list.splice(index, 1)
    setEducationalQulification(list)
  }

  const { updateEducationalData } = props

  useEffect(() => {
    updateEducationalData(educationalQulification)
  }, [educationalQulification, updateEducationalData])

  const handleInput = (index, event) => {
    const values = [...educationalQulification]
    values[index][event.target.name] = event.target.value
    setEducationalQulification(values)
  }

  return (
    <>
      <Container className="cv_bank_container21">
        <Row>
          <Col xs={12} md={6}>
            <h4>Write Your School/College/University Name</h4>
          </Col>
          <Col xs={0} md={6} className="hideyear">
            <h4>Select Year Completed</h4>
          </Col>
        </Row>
      </Container>
      <div className="positionQualification">
        {educationalQulification.map((item, index) => {
          return (
            <div key={index}>
              <br />
              <Container className="cv_bank_container21">
                <Row>
                  <Col xs={12} md={6}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your school/college/university name."
                      name="instituteName"
                      value={educationalQulification.instituteName}
                      onChange={(event) => handleInput(index, event)}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <input
                      type="month"
                      className="form-control"
                      name="passingYear"
                      value={educationalQulification.passingYear}
                      onChange={(event) => handleInput(index, event)}
                    />
                  </Col>
                </Row>
              </Container>
              <Container align="right" className="cv_bank_container21">
                {educationalQulification.length - 1 === index &&
                  educationalQulification.length > 1 &&
                  educationalQulification.length < 5 && (
                    <button
                      className="educationAdd"
                      title="Remove One"
                      onClick={() => handleServiceRemove(index)}
                    >
                      <FaMinus size={15} color="white" />
                    </button>
                  )}{' '}
                {educationalQulification.length - 1 === index &&
                  educationalQulification.length < 4 && (
                    <button
                      className="educationAdd"
                      title="Add More"
                      onClick={handleServiceAdd}
                    >
                      <FaPlus size={15} color="white" />
                    </button>
                  )}
              </Container>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EducationalQulification
