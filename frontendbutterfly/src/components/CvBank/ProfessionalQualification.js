import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const ProfessionalQulification = (props) => {
  const [fromdate, setFromDate] = useState([{ dateset: '' }])
  const [todate, setToDate] = useState([{ dateset: '' }])
  const [current, setCurrent] = useState('NotChacked')
  const professionalData_ = useSelector(
    (state) => state.cvDataReducer.professionalData,
  )

  const [professionalQulification, setProfessionalQulification] = useState([
    {
      designation: professionalData_[0] ? professionalData_[0].designation : '',
      organizationName: professionalData_[0]
        ? professionalData_[0].organizationName
        : '',
      com_department: professionalData_[0]
        ? professionalData_[0].com_department
        : '',
      com_location: professionalData_[0]
        ? professionalData_[0].com_location
        : '',
      from_employment: professionalData_[0]
        ? professionalData_[0].from_employment
        : '',
      to_employment: professionalData_[0]
        ? professionalData_[0].to_employment
        : '',
      com_reference: professionalData_[0]
        ? professionalData_[0].com_reference
        : '',
    },
  ])

  const handleServiceAdd = (index) => {
    var updateIndex = index + 1
    setProfessionalQulification([
      ...professionalQulification,
      {
        designation: professionalData_[updateIndex]
          ? professionalData_[updateIndex].designation
          : '',
        organizationName: professionalData_[updateIndex]
          ? professionalData_[updateIndex].organizationName
          : '',
        com_department: professionalData_[updateIndex]
          ? professionalData_[updateIndex].com_department
          : '',
        com_location: professionalData_[updateIndex]
          ? professionalData_[updateIndex].com_location
          : '',
        from_employment: professionalData_[updateIndex]
          ? professionalData_[updateIndex].from_employment
          : '',
        to_employment: professionalData_[updateIndex]
          ? professionalData_[updateIndex].to_employment
          : '',
        com_reference: professionalData_[updateIndex]
          ? professionalData_[updateIndex].com_reference
          : '',
      },
    ])
    setFromDate([
      ...fromdate,
      {
        dateset: '',
      },
    ])
    setToDate([
      ...todate,
      {
        dateset: '',
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

  const handleInput = (index, event) => {
    const values = [...professionalQulification]
    values[index][event.target.name] = event.target.value
    setProfessionalQulification(values)
  }

  const hendleDateFrom = (index, inputdate) => {
    const values = [...fromdate]
    values[index]['dateset'] = inputdate
    setFromDate(values)
  }

  const hendleDateTo = (index, inputdate) => {
    const values = [...todate]
    values[index]['dateset'] = inputdate
    setToDate(values)
  }

  const autofill = () => {
    setProfessionalQulification([
      {
        designation: 'none',
        organizationName: 'none',
        com_department: 'none',
        com_location: 'none',
        from_employment: 'none',
        to_employment: 'none',
        com_reference: 'none',
      },
    ])
    document.querySelector('.hide_profession').style.display = 'none'
  }

  return (
    <>
      <Container className="cv_bank_container21">
        <p className="skip-content" onClick={autofill}>
          Skip Profession
        </p>
        {professionalQulification.map((item, index) => {
          return (
            <div key={index} className="hide_profession">
              <div>
                <br />
                <h5
                  style={{
                    borderBottom: '1px solid #ff566b',
                    color: '#ff566b',
                  }}
                >
                  Profession {index + 1}
                </h5>
              </div>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>
                    Designation
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="text"
                    className="form-control designation"
                    placeholder="Enter your designation."
                    name="designation"
                    value={professionalQulification[index].designation}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>
                    Company Name
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="text"
                    className="form-control organizationName"
                    placeholder="Enter company name."
                    name="organizationName"
                    value={professionalQulification[index].organizationName}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>
                    Department
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="text"
                    className="form-control com_department"
                    placeholder="Enter department."
                    name="com_department"
                    value={professionalQulification[index].com_department}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>
                    Location
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="text"
                    className="form-control com_location"
                    placeholder="Enter location."
                    name="com_location"
                    value={professionalQulification[index].com_location}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <h5>
                  Employment Period
                  <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                </h5>
                <Col xs={12} md={6}>
                  <div class="from-group">
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        className="form-control input-background from_employment"
                        placeholder="From Date (M DD, YYYY)"
                        value={
                          fromdate.map((item) => item.dateset)[index] !== ''
                            ? fromdate.map((item) => item.dateset)[index]
                            : professionalQulification[index].from_employment
                        }
                        disabled
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input
                            type="date"
                            id="date-change"
                            name="from_employment"
                            onChange={(event) => {
                              hendleDateFrom(index, event.target.value)
                              handleInput(index, event)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  {current !== `Chacked_${index}` && (
                    <div class="from-group">
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          className="form-control input-background to_employment"
                          value={
                            todate.map((item) => item.dateset)[index] !== ''
                              ? todate.map((item) => item.dateset)[index]
                              : professionalQulification[index].to_employment
                          }
                          placeholder="To Date (MM, DD, YYYY)"
                          disabled
                        />
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input
                              type="date"
                              id="date-change"
                              name="to_employment"
                              onChange={(event) => {
                                hendleDateTo(index, event.target.value)
                                handleInput(index, event)
                              }}
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
                      value={`Chacked_${index}`}
                      className="form-check-input"
                      onChange={(event) => {
                        if (event.target.checked) {
                          setCurrent(event.target.value)
                          const values = [...professionalQulification]
                          values[index]['to_employment'] =
                            'Currently working here'
                          setProfessionalQulification(values)
                        } else if (!event.target.checked) {
                          setCurrent(`NotChacked`)
                          const values = [...professionalQulification]
                          values[index]['to_employment'] = todate.map(
                            (item) => item.dateset,
                          )[index]
                          setProfessionalQulification(values)
                        }
                      }}
                    />{' '}
                    Currently working here?
                  </label>
                </div>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={12}>
                  <h5>
                    Reference
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <div class="input-group">
                    <textarea
                      className="form-control com_reference"
                      placeholder="Please share your immediate superior name, email/phone number."
                      aria-label="With textarea"
                      rows="5"
                      name="com_reference"
                      value={professionalQulification[index].com_reference}
                      onChange={(event) => handleInput(index, event)}
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
                        <FaMinus size={15} color="white" /> Close
                      </button>
                    )}{' '}
                  {professionalQulification.length - 1 === index &&
                    professionalQulification.length < 4 && (
                      <button
                        className="educationAdd"
                        title="Add More"
                        onClick={() => handleServiceAdd(index)}
                      >
                        <FaPlus size={15} color="white" /> Add More
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
