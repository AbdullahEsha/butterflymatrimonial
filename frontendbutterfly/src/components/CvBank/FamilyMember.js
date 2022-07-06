import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FamilyMember = (props) => {
  const [sibling, setSibling] = useState([
    {
      name: '',
      spouseDetails: '',
      ocupation: '',
      details: '',
    },
  ])

  const handleServiceAdd = () => {
    setSibling([
      ...sibling,
      {
        name: '',
        spouseDetails: '',
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
        <h5>Father’s Name:</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your father’s Name"
          onChange={(event) =>
            setFamilyMember({
              ...familyMember,
              fatherName: event.target.value,
            })
          }
        />
        <br />
        <h5>Ocupation:</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter father’s Ocupation."
          onChange={(event) =>
            setFamilyMember({
              ...familyMember,
              fatherOcupation: event.target.value,
            })
          }
        />
        <br />
        <h5>Mother’s Name:</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Mother’s Name."
          onChange={(event) =>
            setFamilyMember({
              ...familyMember,
              motherName: event.target.value,
            })
          }
        />
        <br />
        <h5>Ocupation:</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Mother’s Ocupation."
          onChange={(event) =>
            setFamilyMember({
              ...familyMember,
              motherOcupation: event.target.value,
            })
          }
        />
        <br />
        <br />
        <h4>Add Sibling:</h4>
        <br />
        {sibling.map((item, index) => {
          return (
            <div key={index}>
              <h5>Name:</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name."
                value={sibling.name}
                name="name"
                onChange={(event) => handleInput(index, event)}
              />
              <br />
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h5>Spouse Details:</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter spouse Details."
                    name="spouseDetails"
                    value={sibling.spouseDetails}
                    onChange={(event) => handleInput(index, event)}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <h5>Ocupation:</h5>
                  <input
                    type="text"
                    className="form-control"
                    name="ocupation"
                    placeholder="Enter ocupation."
                    value={sibling.ocupation}
                    onChange={(event) => handleInput(index, event)}
                  />
                </div>
              </div>
              <br />
              <h5>Details:</h5>
              <div class="input-group">
                <textarea
                  class="form-control"
                  placeholder="Write Details here."
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
                      <FaMinus size={15} color="white" />
                    </button>
                  )}{' '}
                {sibling.length - 1 === index && sibling.length < 6 && (
                  <button
                    className="educationAdd"
                    title="Add More"
                    onClick={handleServiceAdd}
                  >
                    <FaPlus size={15} color="white" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </Container>
    </>
  )
}

export default FamilyMember
