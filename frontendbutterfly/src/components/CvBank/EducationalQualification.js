import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Select from 'react-select'

const options = [
  { label: 'Science', value: 'Science' },
  { label: 'Commerce', value: 'Commerce' },
  { label: 'Arts', value: 'Arts' },
  { label: 'Biology', value: 'Biology' },
  { label: 'Physics', value: 'Physics' },
  { label: 'Chemistry', value: 'Chemistry' },
]

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
        {educationalQulification.map((item, index) => {
          return (
            <div key={index}>
              <div className="row-padding">
                <h4
                  style={{
                    borderBottom: '1px solid #ff566b',
                    color: '#ff566b',
                  }}
                >
                  Academic {index + 1}
                </h4>
              </div>

              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h4>Level of Education:</h4>
                  <select
                    className="form-control"
                    // onChange={(event) =>
                    //   setPersonalInformation({
                    //     ...personalInformation,
                    //     bloodGroup: event.target.value,
                    //   })
                    // }
                  >
                    <option value="" disabled selected>
                      Choose One
                    </option>
                    <option value="Secondary">Secondary</option>
                    <option value="Higher Secondary">Higher Secondary</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor Honors">Bachelor Honors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD(Doctor of philosophy)</option>
                  </select>
                </Col>
                <Col xs={0} md={6}>
                  <h4>Concentration/Major/Group</h4>
                  <div className="App2">
                    <Select options={options} />
                  </div>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h4>Institute Name</h4>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your institute name."
                    name="instituteName"
                    value={educationalQulification.instituteName}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h4>Year of Passing</h4>
                  <input
                    type="month"
                    className="form-control"
                    name="passingYear"
                    placeholder="mm/yyyy"
                    value={educationalQulification.passingYear}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <h4>Institute Location</h4>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your institute location."
                    name="instituteLocation"
                    value={educationalQulification.instituteName}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col align="right" className="cv_bank_container21">
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
                </Col>
              </Row>
            </div>
          )
        })}
      </Container>
    </>
  )
}

export default EducationalQulification
