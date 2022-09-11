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
          <Col>
            <h6>
              <b>Email:</b> {props.profileData.email}
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
              <b>Division:</b> {props.profileData.divisionPresent}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Dristrict:</b> {props.profileData.dristrictPresent}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              <b>Permanent Address:</b> {props.profileData.parmanentAddress}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Division:</b> {props.profileData.divisionParmanent}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Dristrict:</b> {props.profileData.dristrictParmanent}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Date Of Birth:</b>{' '}
              {`${
                props.profileData.age
                  ? new Date(props.profileData.age).toLocaleString('en-GB', {
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
          <Col>
            <h6>
              <b>Special Condition:</b> {props.profileData.specialCondition}
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
                    {item.organizationName}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <h6>
                    <b>Department:</b>
                    {item.com_department}
                  </h6>
                </Col>
                <Col xs="12" md="6">
                  <h6>
                    <b>Location:</b>
                    {item.com_location}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12">
                  <h6>
                    <b>Employment Period:</b> {item.from_employment} to{' '}
                    {item.to_employment}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12">
                  <h6>
                    <b>Reference:</b>
                    {item.com_reference}
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
                <Col xs={12} md={6}>
                  <h6>
                    <b>Institute Location:</b> {item.instituteLocation}
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
              <b>Ocupation:</b> {props.familyData.fatherOcupation}
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
              <b>Ocupation:</b> {props.familyData.motherOcupation}
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
                    <b>Ocupation:</b> {item.ocupation}
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
              <b>Profession:</b> {props.preferenceInfoData.profession}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Skin Tone:</b> {props.preferenceInfoData.skinTone}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <h6>
              <b>Spouse Preference:</b>{' '}
              {props.preferenceInfoData.spousePreference}
            </h6>
          </Col>
          <Col xs={6} md={6}>
            <h6>
              <b>Preference:</b> {props.preferenceInfoData.preference}
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
              <b>Physical Status:</b> {props.preferenceInfoData.physicalStatus}
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
              <b>District Preference:</b>{' '}
              {props.preferenceInfoData.districtPreference}
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Preview
