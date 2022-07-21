import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Select from 'react-select'

const options = [
  { label: 'Science', value: 'Science', name: 'group' },
  { label: 'Commerce', value: 'Commerce', name: 'group' },
  { label: 'Arts', value: 'Arts', name: 'group' },
  { label: 'Biology', value: 'Biology', name: 'group' },
  { label: 'Physics', value: 'Physics', name: 'group' },
  { label: 'Chemistry', value: 'Chemistry', name: 'group' },
]

const EducationalQulification = (props) => {
  const [educationalQulification, setEducationalQulification] = useState([
    {
      instituteName: '',
      passingYear: '',
      levelOfEducation: '',
      instituteLocation: '',
      group: '',
    },
  ])

  const handleServiceAdd = () => {
    setEducationalQulification([
      ...educationalQulification,
      {
        instituteName: '',
        passingYear: '',
        levelOfEducation: '',
        instituteLocation: '',
        group: '',
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

  const handleInput2 = (index, event) => {
    const values = [...educationalQulification]
    values[index][event.name] = event.value
    setEducationalQulification(values)
  }

  return (
    <>
      <Container className="cv_bank_container21">
        {educationalQulification.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <br />
                <h5
                  style={{
                    borderBottom: '1px solid #ff566b',
                    color: '#ff566b',
                  }}
                >
                  Academic {index + 1}
                </h5>
              </div>

              <Row className="row-padding custom-font-size">
                <Col xs={12} md={6} className="">
                  <h5>Level of Education:</h5>
                  <select
                    className="form-control"
                    name="levelOfEducation"
                    onChange={(event) => handleInput(index, event)}
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
                  <h5>Concentration/Major/Group</h5>
                  <div className="App2">
                    <Select
                      options={options}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 3,
                        colors: {
                          ...theme.colors,
                          primary25: '#ff566a56',
                          primary: '#ff566b',
                        },
                      })}
                      onChange={(event) => handleInput2(index, event)}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={12}>
                  <h5>Institute Name</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your institute name."
                    name="instituteName"
                    value={educationalQulification.instituteName}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>Institute Location</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your institute location."
                    name="instituteLocation"
                    value={educationalQulification.instituteLocation}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>Year of Passing</h5>
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
