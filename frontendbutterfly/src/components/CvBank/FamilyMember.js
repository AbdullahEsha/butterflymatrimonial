import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const FamilyMember = (props) => {
  const familyData_ = useSelector((state) => state.cvDataReducer.familyData)
  const siblingData_ = useSelector((state) => state.cvDataReducer.siblingData)

  const [sibling, setSibling] = useState([
    {
      name: siblingData_[0] ? siblingData_[0].name : '',
      occupation: siblingData_[0] ? siblingData_[0].occupation : '',
      details: siblingData_[0] ? siblingData_[0].details : '',
    },
  ])

  const handleServiceAdd = (index) => {
    var updateIndex = index + 1
    setSibling([
      ...sibling,
      {
        name: siblingData_[updateIndex] ? siblingData_[updateIndex].name : '',
        occupation: siblingData_[updateIndex]
          ? siblingData_[updateIndex].occupation
          : '',
        details: siblingData_[updateIndex]
          ? siblingData_[updateIndex].details
          : '',
      },
    ])
  }
  const handleServiceRemove = (index) => {
    const list = [...sibling]
    list.splice(index, 1)
    setSibling(list)
  }

  const [familyMember, setFamilyMember] = useState({
    fatherName: familyData_ ? familyData_.fatherName : '',
    fatherOccupation: familyData_ ? familyData_.fatherOccupation : '',
    fatherDetails: familyData_ ? familyData_.fatherDetails : '',
    motherName: familyData_ ? familyData_.motherName : '',
    motherOccupation: familyData_ ? familyData_.motherOccupation : '',
    motherDetails: familyData_ ? familyData_.motherDetails : '',
  })

  const { updateFamilyData, updateSiblingData } = props

  const handleInput = (index, event) => {
    const values = [...sibling]
    values[index][event.target.name] = event.target.value
    setSibling(values)
  }

  useEffect(() => {
    updateFamilyData(familyMember)
    updateSiblingData(sibling)
  }, [familyMember, updateFamilyData, sibling, updateSiblingData])

  const autofill = () => {
    setSibling([
      {
        name: 'none',
        occupation: 'none',
        details: 'none',
      },
    ])
    document.querySelector('.sibling_info').style.display = 'none'
  }

  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Father’s Name
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control fatherName"
              placeholder="Enter your father’s Name"
              value={familyMember.fatherName}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  fatherName: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Occupation
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control fatherOccupation"
              placeholder="Enter father’s occupation."
              value={familyMember.fatherOccupation}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  fatherOccupation: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>Details:</h5>
            <input
              type="text"
              className="form-control fatherDetails"
              placeholder="Write more about your father."
              value={familyMember.fatherDetails}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  fatherDetails: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Mother’s Name
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control motherName"
              placeholder="Enter your Mother’s Name."
              value={familyMember.motherName}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  motherName: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Occupation
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control motherOccupation"
              placeholder="Enter mother’s occupation."
              value={familyMember.motherOccupation}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  motherOccupation: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>Details:</h5>
            <input
              type="text"
              className="form-control motherDetails"
              placeholder="Write more about your mother."
              value={familyMember.motherDetails}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  motherDetails: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        {/* <Row className="row-padding">
          <h5>Brother:</h5>
          <h5>Sister:</h5>
        </Row> */}
        <Row className="row-padding">
          {sibling.map((item, index) => {
            return (
              <div key={index} className="sibling_info">
                <div className="font-form-size">
                  <br />
                  <h5
                    style={{
                      color: '#ff566b',
                    }}
                  >
                    Sibling {index + 1}
                  </h5>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5>Name:</h5>
                    <input
                      type="text"
                      className="form-control sibname"
                      placeholder="Enter name."
                      value={sibling[index].name}
                      name="name"
                      onChange={(event) => handleInput(index, event)}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <h5>Occupation:</h5>
                    <input
                      type="text"
                      className="form-control sibOccupation"
                      name="occupation"
                      placeholder="Enter occupation."
                      value={sibling[index].occupation}
                      onChange={(event) => handleInput(index, event)}
                    />
                  </div>
                </div>
                <br />
                <h5>Details:</h5>
                <div class="input-group">
                  <textarea
                    className="form-control sibdetails"
                    placeholder="Write here about your sibling. For example his/her marital status, current study or job detail etc."
                    aria-label="With textarea"
                    rows="7"
                    name="details"
                    value={sibling[index].details}
                    onChange={(event) => handleInput(index, event)}
                  ></textarea>
                </div>
                <br />
                <div className="cv_bank_add_button">
                  {sibling.length === 1 ? (
                    <label className="skip-content" onClick={autofill}>
                      Skip Sibling
                    </label>
                  ) : (
                    ''
                  )}
                  <div className="cv_bank_button_inside">
                    {sibling.length - 1 === index &&
                      sibling.length > 1 &&
                      sibling.length < 7 && (
                        <button
                          className="educationAdd"
                          title="Remove One"
                          onClick={() => handleServiceRemove(index)}
                        >
                          <FaMinus size={15} color="white" /> Close
                        </button>
                      )}{' '}
                    {sibling.length - 1 === index && sibling.length < 6 && (
                      <button
                        className="educationAdd"
                        title="Add More"
                        onClick={() => handleServiceAdd(index)}
                      >
                        <FaPlus size={15} color="white" /> Add More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default FamilyMember
