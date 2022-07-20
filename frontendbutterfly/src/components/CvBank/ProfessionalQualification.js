import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProfessionalQulification = (props) => {
  const [fromdate, setFromDate] = useState('')
  const [todate, setToDate] = useState('')
  const [current, setCurrent] = useState('notChacked')

  const [professionalQulification, setProfessionalQulification] = useState({
    designation: '',
    organizationName: '',
  })

  const { updateProfessionalData } = props

  useEffect(() => {
    updateProfessionalData(professionalQulification)
  }, [professionalQulification, updateProfessionalData])

  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h4>Designation:</h4>
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
            <h4>Company Name:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter organization name."
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
            <h4>Department:</h4>
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
            <h4>Location:</h4>
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
          <h4>Employment Period:</h4>
          <Col xs={12} md={6}>
            <div class="from-group">
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  value={fromdate}
                  placeholder="From Date(MM/DD/YYYY)"
                  disabled
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input
                      type="date"
                      id="date-change"
                      onChange={(event) => setFromDate(event.target.value)}
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
                    class="form-control"
                    id="inlineFormInputGroup"
                    value={todate}
                    placeholder="To Date(MM/DD/YYYY)"
                    disabled
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="date"
                        id="date-change"
                        onChange={(event) => setToDate(event.target.value)}
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
        <Row>
          <Col xs={12} md={12}>
            <h4>Reference:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter department name."
              onChange={(event) =>
                setProfessionalQulification({
                  ...professionalQulification,
                  organizationName: event.target.value,
                })
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProfessionalQulification
