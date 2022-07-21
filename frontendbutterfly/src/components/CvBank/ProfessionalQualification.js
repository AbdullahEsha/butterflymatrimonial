import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'

const ProfessionalQulification = (props) => {
  const [fromdate, setFromDate] = useState('')
  const [todate, setToDate] = useState('')
  const [current, setCurrent] = useState('notChacked')

  const [professionalQulification, setProfessionalQulification] = useState([
    {
      designation: '',
      organizationName: '',
      com_department: '',
      com_location: '',
      from_employment: '',
      to_employment: '',
      com_reference: '',
    },
  ])

  const handleServiceAdd = () => {
    setProfessionalQulification([
      ...professionalQulification,
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
    const list = [...professionalQulification]
    list.splice(index, 1)
    setProfessionalQulification(list)
  }

  const { updateProfessionalData } = props

  useEffect(() => {
    updateProfessionalData(professionalQulification)
  }, [professionalQulification, updateProfessionalData])

  const DATE_OPTIONS = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return (
    <>
      <Container className="cv_bank_container21">
        {professionalQulification.map((item, index) => {
          return (
            <div key={index}>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>Designation:</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your designation."
                    onChange={(event) =>
                      setProfessionalQulification({
                        ...professionalQulification,
                        designation: event.target.value,
                      })
                    }
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>Company Name:</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter company name."
                    onChange={(event) =>
                      setProfessionalQulification({
                        ...professionalQulification,
                        organizationName: event.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>Department:</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter department."
                    onChange={(event) =>
                      setProfessionalQulification({
                        ...professionalQulification,
                        organizationName: event.target.value,
                      })
                    }
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>Location:</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location."
                    onChange={(event) =>
                      setProfessionalQulification({
                        ...professionalQulification,
                        organizationName: event.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <h5>Employment Period:</h5>
                <Col xs={12} md={6}>
                  <div class="from-group">
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        className="form-control input-background"
                        placeholder="From Date (M DD, YYYY)"
                        value={
                          fromdate
                            ? new Date(fromdate).toLocaleDateString(
                                'en-US',
                                DATE_OPTIONS,
                              )
                            : ''
                        }
                        disabled
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input
                            type="date"
                            id="date-change"
                            onChange={(event) =>
                              setFromDate(
                                event.target.value
                                  ? new Date(
                                      event.target.value,
                                    ).toLocaleDateString('en-US', DATE_OPTIONS)
                                  : '',
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  {current === 'notChacked' && (
                    <div class="from-group">
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          className="form-control input-background"
                          value={todate}
                          placeholder="To Date (M DD, YYYY)"
                          disabled
                        />
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input
                              type="date"
                              id="date-change"
                              onChange={(event) =>
                                setToDate(
                                  event.target.value
                                    ? new Date(
                                        event.target.value,
                                      ).toLocaleDateString(
                                        'en-US',
                                        DATE_OPTIONS,
                                      )
                                    : '',
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Col>
                <div class="checkbox">
                  <label style={{ marginLeft: '20px' }}>
                    <input
                      type="checkbox"
                      value="Chacked"
                      className="form-check-input"
                      onChange={(event) => {
                        if (event.target.checked) {
                          setCurrent(event.target.value)
                        } else if (!event.target.checked) {
                          setCurrent('notChacked')
                        }
                      }}
                    />{' '}
                    Currently working here?
                  </label>
                </div>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={12}>
                  <h5>Reference:</h5>
                  <div class="input-group">
                    <textarea
                      class="form-control"
                      placeholder="Please share your immediate superior name, email/phone number."
                      aria-label="With textarea"
                      rows="3"
                    ></textarea>
                  </div>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col align="right" className="cv_bank_container21">
                  {professionalQulification.length - 1 === index &&
                    professionalQulification.length > 1 &&
                    professionalQulification.length < 5 && (
                      <button
                        className="educationAdd"
                        title="Remove One"
                        onClick={() => handleServiceRemove(index)}
                      >
                        <FaMinus size={15} color="white" />
                      </button>
                    )}{' '}
                  {professionalQulification.length - 1 === index &&
                    professionalQulification.length < 4 && (
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

export default ProfessionalQulification
