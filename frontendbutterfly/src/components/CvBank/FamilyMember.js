import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FamilyMember = (props) => {
  const [sibling, setSibling] = useState([
    {
      name: '',
      ocupation: '',
      details: '',
    },
  ])

  const handleServiceAdd = () => {
    setSibling([
      ...sibling,
      {
        name: '',
        ocupation: '',
        details: '',
      },
    ])
  }
  const handleServiceRemove = (index) => {
    const list = [...sibling]
    list.splice(index, 1)
    setSibling(list)
  }

  const [familyMember, setFamilyMember] = useState({
    fatherName: '',
    fatherOcupation: '',
    motherName: '',
    motherOcupation: '',
  })

  const { updateFamilyData } = props
  const { updateSiblingData } = props

  const handleInput = (index, event) => {
    const values = [...sibling]
    values[index][event.target.name] = event.target.value
    setSibling(values)
  }

  useEffect(() => {
    updateFamilyData(familyMember)
    updateSiblingData(sibling)
  }, [familyMember, updateFamilyData, sibling, updateSiblingData])

  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Father’s Name
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control fatherName"
              placeholder="Enter your father’s Name"
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
              Ocupation
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control fatherOcupation"
              placeholder="Enter father’s Ocupation."
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  fatherOcupation: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Mother’s Name
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control motherName"
              placeholder="Enter your Mother’s Name."
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
              Ocupation
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control motherOcupation"
              placeholder="Enter Mother’s Ocupation."
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  motherOcupation: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          {sibling.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <br />
                  <h5
                    style={{
                      borderBottom: '0.2px solid #ff566b',
                      color: '#ff566b',
                    }}
                  >
                    Sibling {index + 1}
                  </h5>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5>
                      Name
                      <span class="" style={{ color: 'red', fontSize: '24px' }}>
                        *
                      </span>
                      :
                    </h5>
                    <input
                      type="text"
                      className="form-control sibname"
                      placeholder="Enter name."
                      value={sibling.name}
                      name="name"
                      onChange={(event) => handleInput(index, event)}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <h5>
                      Ocupation
                      <span class="" style={{ color: 'red', fontSize: '24px' }}>
                        *
                      </span>
                      :
                    </h5>
                    <input
                      type="text"
                      className="form-control sibocupation"
                      name="ocupation"
                      placeholder="Enter ocupation."
                      value={sibling.ocupation}
                      onChange={(event) => handleInput(index, event)}
                    />
                  </div>
                </div>
                <br />
                <h5>
                  Details
                  <span class="" style={{ color: 'red', fontSize: '24px' }}>
                    *
                  </span>
                  :
                </h5>
                <div class="input-group">
                  <textarea
                    className="form-control sibdetails"
                    placeholder="Write here about your sibling. For example his/her marital status, current study or job detail etc."
                    aria-label="With textarea"
                    rows="7"
                    name="details"
                    value={sibling.details}
                    onChange={(event) => handleInput(index, event)}
                  ></textarea>
                </div>
                <br />
                <div align="right">
                  {sibling.length - 1 === index &&
                    sibling.length > 1 &&
                    sibling.length < 7 && (
                      <button
                        className="educationAdd"
                        title="Remove one"
                        onClick={() => handleServiceRemove(index)}
                      >
                        <FaMinus size={15} color="white" /> Close
                      </button>
                    )}{' '}
                  {sibling.length - 1 === index && sibling.length < 6 && (
                    <button
                      className="educationAdd"
                      title="Add More"
                      onClick={handleServiceAdd}
                    >
                      <FaPlus size={15} color="white" /> Add More
                    </button>
                  )}
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
