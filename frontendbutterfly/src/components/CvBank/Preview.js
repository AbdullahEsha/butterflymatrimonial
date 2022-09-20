import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Preview = (props) => {
  const img = `${URL.createObjectURL(props.profileData.image)}`

  return (
    <>
      <Container
        style={{ marginRight: '50px' }}
        className="cv_bank_container21 preview-content"
      >
        <Row>
          <Col>
            <h3>
              <b>Profile Information:</b>
            </h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="previewImg">
              <img src={img} alt="previewImg" />
            </div>
            <br />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Name:</b> {props.profileData.name}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Gender:</b> {props.profileData.gender}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Phone:</b> {props.profileData.phone}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Religion:</b> {props.profileData.religion}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Email:</b> {props.profileData.email}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Annual Income:</b> {props.profileData.annualIncome}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              <b>Present Address:</b> {props.profileData.presentAddress}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Date Of Birth:</b>{' '}
              {`${
                props.profileData.dob
                  ? new Date(props.profileData.dob).toLocaleString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : ''
              }`}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Limitations Or Special Case:</b>{' '}
              {props.profileData.specialCase}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Height:</b> {props.profileData.height}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Weight:</b> {props.profileData.weight}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Blood Group:</b> {props.profileData.bloodGroup}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Grown Up At:</b> {props.profileData.grownUpAt}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Citizenship:</b> {props.profileData.citizenship}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Complexion:</b> {props.profileData.complexion}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Family Status:</b> {props.profileData.familyStatus}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Hobby:</b> {props.profileData.hobby}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Hometown:</b> {props.profileData.hometown}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Marital Status:</b> {props.profileData.maritalStatus}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Physical Status:</b> {props.profileData.physicalStatus}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              <b>About:</b> {props.profileData.about}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h4>
              <b>Professional Information:</b>
            </h4>
            <hr />
          </Col>
        </Row>
        {props.professionalData.map((item, index) => {
          return (
            <>
              <label>Profession {index + 1}</label>
              <Row>
                <Col xs="12" md="6">
                  <h6>
                    <b>Designation:</b>
                    {item.designation}
                  </h6>
                </Col>
                <Col xs="12" md="6">
                  <h6>
                    <b>Organization Name:</b>
                    {item.companyName}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <h6>
                    <b>Location:</b>
                    {item.com_location}
                  </h6>
                </Col>
                <Col xs="12" md="6">
                  <h6>
                    <b>Employment Period:</b> {item.from_employment} to{' '}
                    {item.to_employment}
                  </h6>
                </Col>
              </Row>
            </>
          )
        })}
        <Row>
          <Col>
            <br />
            <h4>
              <b>Educational Information:</b>
            </h4>
            <hr />
          </Col>
        </Row>
        {props.educationalData.map((item, index) => {
          return (
            <>
              <label>Academic {index + 1}</label>
              <Row>
                <Col xs={12} md={6}>
                  <h6>
                    <b>Institute Name:</b> {item.instituteName}(
                    {item.passingYear})
                  </h6>
                </Col>
                <Col xs={12} md={6}>
                  <h6>
                    <b>Concentration/Major/Group:</b> {item.group}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <h6>
                    <b>Level of Education:</b> {item.levelOfEducation}(
                    {item.passingYear})
                  </h6>
                </Col>
              </Row>
            </>
          )
        })}
        <Row>
          <Col>
            <br />
            <h4>
              <b>Family Member:</b>
            </h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Father Name:</b> {props.familyData.fatherName}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Ocupation:</b> {props.familyData.fatherOccupation}
            </h6>
          </Col>
          <Col xs={6} md={12}>
            <h6>
              <b>Details:</b> {props.familyData.fatherDetails}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Mother Name:</b> {props.familyData.motherName}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Ocupation:</b> {props.familyData.motherOccupation}
            </h6>
          </Col>
          <Col xs={6} md={12}>
            <h6>
              <b>Details:</b> {props.familyData.motherDetails}
            </h6>
          </Col>
        </Row>
        {props.siblingData.map((item, index) => {
          return (
            <>
              <label>Sibling {index + 1}</label>
              <Row>
                <Col xs={6} md={6}>
                  <h6>
                    <b>Name:</b> {item.name}
                  </h6>
                </Col>
                <Col xs={6} md={6}>
                  <h6>
                    <b>Ocupation:</b> {item.occupation}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6>
                    <b>Details:</b> {item.details}
                  </h6>
                </Col>
              </Row>
            </>
          )
        })}
        <Row>
          <Col>
            <br />
            <h4>
              <b>Preference Information:</b>
            </h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Education:</b> {props.preferenceInfoData.educationPreference}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Complexion:</b> {props.preferenceInfoData.complexionPreference}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Marital Status:</b>{' '}
              {props.preferenceInfoData.maritalStatusPreference}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Occupation:</b> {props.preferenceInfoData.occupationPreference}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Religion:</b> {props.preferenceInfoData.religionPreference}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Location:</b> {props.preferenceInfoData.location}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Age Range:</b> {props.preferenceInfoData.ageMinimum} to{' '}
              {props.preferenceInfoData.ageMaximum}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Height Range:</b> {props.preferenceInfoData.heightMinimum} to{' '}
              {props.preferenceInfoData.heightMaximum}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Details:</b> {props.preferenceInfoData.preferenceDetails}
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Preview
