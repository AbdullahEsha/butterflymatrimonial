import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import ImageUploader from 'react-images-upload'

const FamilyMember = (props) => {
  const familyData_ = useSelector((state) => state.cvDataReducer.familyData)
  const siblingData_ = useSelector((state) => state.cvDataReducer.siblingData)
  const [galleryImage, setGalleryImage] = useState({ imageFill: '' })
  const [sibling, setSibling] = useState([
    {
      name: siblingData_[0] ? siblingData_[0].name : '',
      ocupation: siblingData_[0] ? siblingData_[0].ocupation : '',
      details: siblingData_[0] ? siblingData_[0].details : '',
    },
  ])

  const handleServiceAdd = (index) => {
    var updateIndex = index + 1
    setSibling([
      ...sibling,
      {
        name: siblingData_[updateIndex] ? siblingData_[updateIndex].name : '',
        ocupation: siblingData_[updateIndex]
          ? siblingData_[updateIndex].ocupation
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
    fatherOcupation: familyData_ ? familyData_.fatherOcupation : '',
    motherName: familyData_ ? familyData_.motherName : '',
    motherOcupation: familyData_ ? familyData_.motherOcupation : '',
  })

  const { updateFamilyData, updateSiblingData, updateGalleryData } = props

  const handleInput = (index, event) => {
    const values = [...sibling]
    values[index][event.target.name] = event.target.value
    setSibling(values)
  }

  useEffect(() => {
    updateGalleryData(galleryImage)
    updateFamilyData(familyMember)
    updateSiblingData(sibling)
  }, [
    familyMember,
    updateFamilyData,
    sibling,
    updateSiblingData,
    galleryImage,
    updateGalleryData,
  ])

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
              Ocupation
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control fatherOcupation"
              placeholder="Enter father’s Ocupation."
              value={familyMember.fatherOcupation}
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
              Ocupation
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control motherOcupation"
              placeholder="Enter Mother’s Ocupation."
              value={familyMember.motherOcupation}
              onChange={(event) =>
                setFamilyMember({
                  ...familyMember,
                  motherOcupation: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <h5>
              Add Image To Gallery
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              buttonText="Choose Images"
              label="Max file size: 2mb | accepted: jpg, png, jpeg"
              // value={data.images}
              // defaultImages={data.images}
              name="images"
              onChange={(image) => {
                setGalleryImage({ ...galleryImage, imageFill: image })
              }}
              imgExtension={['.jpg', '.png', '.jpeg']}
              maxFileSize={2097152}
              className="mb-4"
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
                      <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                    </h5>
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
                    <h5>
                      Ocupation
                      <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                    </h5>
                    <input
                      type="text"
                      className="form-control sibocupation"
                      name="ocupation"
                      placeholder="Enter ocupation."
                      value={sibling[index].ocupation}
                      onChange={(event) => handleInput(index, event)}
                    />
                  </div>
                </div>
                <br />
                <h5>
                  Details
                  <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                </h5>
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
                      onClick={() => handleServiceAdd(index)}
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
