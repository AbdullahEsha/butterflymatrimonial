import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const options = [
  { label: 'Unmarried', value: 'Unmarried' },
  { label: 'Widow/Widower', value: 'Widow/Widower' },
  { label: 'Divorced', value: 'Divorced' },
  { label: 'Separated', value: 'Separated' },
  { label: 'Married', value: 'Married' },
]

const PreferenceInformation = (props) => {
  const preferenceInfoData_ = useSelector(
    (state) => state.cvDataReducer.preferenceInfoData,
  )

  const [preferenceInformation, setPreferenceInformation] = useState({
    ageMinimum: preferenceInfoData_ ? preferenceInfoData_.ageMinimum : '',
    ageMaximum: preferenceInfoData_ ? preferenceInfoData_.ageMaximum : '',
    heightMinimum: preferenceInfoData_ ? preferenceInfoData_.heightMinimum : '',
    heightMaximum: preferenceInfoData_ ? preferenceInfoData_.heightMaximum : '',
    maritalStatusPreference: preferenceInfoData_
      ? preferenceInfoData_.maritalStatusPreference
      : '',
    complexionPreference: preferenceInfoData_
      ? preferenceInfoData_.complexionPreference
      : '',
    occupationPreference: preferenceInfoData_
      ? preferenceInfoData_.occupationPreference
      : '',
    educationPreference: preferenceInfoData_
      ? preferenceInfoData_.educationPreference
      : '',
    location: preferenceInfoData_ ? preferenceInfoData_.location : '',
    religionPreference: preferenceInfoData_
      ? preferenceInfoData_.religionPreference
      : '',
    preferenceDetails: preferenceInfoData_
      ? preferenceInfoData_.preferenceDetails
      : '',
  })

  const { updatePreferenceInfoData } = props

  useEffect(() => {
    updatePreferenceInfoData(preferenceInformation)
  }, [preferenceInformation, updatePreferenceInfoData])

  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Age Range(kg)
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div className="row">
              <div className="col-sm-6">
                <select
                  class="form-control ageMinimum"
                  placeholder="Choose One"
                  name="minimum-age"
                  value={preferenceInformation.ageMinimum}
                  onChange={(event) => {
                    setPreferenceInformation({
                      ...preferenceInformation,
                      ageMinimum: event.target.value,
                    })
                  }}
                >
                  <option value="" disabled selected>
                    Choose Minimum
                  </option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="Above 35">Above 35</option>
                </select>
              </div>
              <div className="col-sm-6">
                <select
                  class="form-control ageMaximum"
                  placeholder="Choose One"
                  name="maximum-age"
                  value={preferenceInformation.ageMaximum}
                  onChange={(event) => {
                    setPreferenceInformation({
                      ...preferenceInformation,
                      ageMaximum: event.target.value,
                    })
                  }}
                >
                  <option value="" disabled selected>
                    Choose Maximum
                  </option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="39">39</option>
                  <option value="Above 39">Above 39</option>
                </select>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Height Range
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div className="row">
              <div className="col-sm-6">
                <select
                  class="form-control heightMinimum"
                  placeholder="Choose One"
                  name="minimum-height"
                  value={preferenceInformation.heightMinimum}
                  onChange={(event) => {
                    setPreferenceInformation({
                      ...preferenceInformation,
                      heightMinimum: event.target.value,
                    })
                  }}
                >
                  <option value="" disabled selected>
                    Choose Minimum
                  </option>
                  <option value="4ft 5">4ft 5</option>
                  <option value="4ft 6">4ft 6</option>
                  <option value="4ft 6">4ft 7</option>
                  <option value="4ft 8">4ft 8</option>
                  <option value="4ft 9">4ft 9</option>
                  <option value="4ft 10">4ft 10</option>
                  <option value="4ft 11">4ft 11</option>
                  <option value="5ft">5ft</option>
                  <option value="5ft 1">5ft 1</option>
                  <option value="5ft 2">5ft 2</option>
                  <option value="5ft 3">5ft 3</option>
                  <option value="5ft 4">5ft 4</option>
                  <option value="5ft 5">5ft 5</option>
                  <option value="5ft 6">5ft 6</option>
                  <option value="5ft 7">5ft 7</option>
                  <option value="5ft 8">5ft 8</option>
                  <option value="5ft 9">5ft 9</option>
                  <option value="5ft 10">5ft 10</option>
                  <option value="5ft 11">5ft 11</option>
                  <option value="6ft">6ft</option>
                  <option value="6ft 1">6ft 1</option>
                  <option value="6ft 2">6ft 2</option>
                  <option value="6ft 3">6ft 3</option>
                  <option value="6ft 4">6ft 4</option>
                  <option value="6ft 5">6ft 5</option>
                </select>
              </div>
              <div className="col-sm-6">
                <select
                  class="form-control heightMaximum"
                  placeholder="Choose One"
                  name="maximum-height"
                  value={preferenceInformation.heightMaximum}
                  onChange={(event) => {
                    setPreferenceInformation({
                      ...preferenceInformation,
                      heightMaximum: event.target.value,
                    })
                  }}
                >
                  <option value="" disabled selected>
                    Choose Maximum
                  </option>
                  <option value="4ft 5">4ft 5</option>
                  <option value="4ft 6">4ft 6</option>
                  <option value="4ft 6">4ft 7</option>
                  <option value="4ft 8">4ft 8</option>
                  <option value="4ft 9">4ft 9</option>
                  <option value="4ft 10">4ft 10</option>
                  <option value="4ft 11">4ft 11</option>
                  <option value="5ft">5ft</option>
                  <option value="5ft 1">5ft 1</option>
                  <option value="5ft 2">5ft 2</option>
                  <option value="5ft 3">5ft 3</option>
                  <option value="5ft 4">5ft 4</option>
                  <option value="5ft 5">5ft 5</option>
                  <option value="5ft 6">5ft 6</option>
                  <option value="5ft 7">5ft 7</option>
                  <option value="5ft 8">5ft 8</option>
                  <option value="5ft 9">5ft 9</option>
                  <option value="5ft 10">5ft 10</option>
                  <option value="5ft 11">5ft 11</option>
                  <option value="6ft">6ft</option>
                  <option value="6ft 1">6ft 1</option>
                  <option value="6ft 2">6ft 2</option>
                  <option value="6ft 3">6ft 3</option>
                  <option value="6ft 4">6ft 4</option>
                  <option value="6ft 5">6ft 5</option>
                </select>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Marital Status
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <Select
              className="maritalStatusPreference"
              options={options}
              isMulti={true}
              defaultValue={
                preferenceInformation.maritalStatusPreference === ''
                  ? {
                      label: `${preferenceInformation.maritalStatusPreference}`,
                      value: `${preferenceInformation.maritalStatusPreference}`,
                    }
                  : false
              }
              placeholder="Choose one."
              theme={(theme) => ({
                ...theme,
                borderRadius: 3,
                colors: {
                  ...theme.colors,
                  primary25: '#ff566a56',
                  primary: '#ff566b',
                },
              })}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  maritalStatusPreference: event
                    .map((item) => item.label)
                    .join(),
                })
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Complexion
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control complexionPreference"
              placeholder="Choose One"
              name="complexionPreference"
              value={preferenceInformation.complexionPreference}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  complexionPreference: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Extremely fair">Extremely Fair</option>
              <option value="Fair">Fair</option>
              <option value="Medium">Medium</option>
              <option value="Olive">Olive</option>
              <option value="Brown">Brown</option>
              <option value="Dark">Dark</option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Occupation
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control occupationPreference"
              placeholder="Choose One"
              name="profession"
              value={preferenceInformation.occupationPreference}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  occupationPreference: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Gov. Employee">Gov. Job</option>
              <option value="Private Job">Private Job</option>
              <option value="Business">Business</option>
              <option value="Physiotherapists">Physiotherapists</option>
              <option value="Engineer">Engineer</option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Bank Employee">Bank Employee</option>
              <option value="Doctor">Doctor</option>
              <option value="Scientist">Scientist</option>
              <option value="No Specific">No Specific</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Education
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              class="form-control educationPreference"
              placeholder="Enter education preference"
              name="education"
              value={preferenceInformation.educationPreference}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  educationPreference: event.target.value,
                })
              }}
            ></input>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Location
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              class="form-control location"
              type="text"
              placeholder="Enter location preference"
              name="location"
              value={preferenceInformation.location}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  location: event.target.value,
                })
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Religion
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control religionPreference"
              placeholder="Choose One"
              name="religionPreference"
              value={preferenceInformation.religionPreference}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  religionPreference: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Islam">Islam</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Christianity">Christianity</option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Details
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <textarea
              rows="3"
              className="form-control preferenceDetails"
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  preferenceDetails: event.target.value,
                })
              }}
            ></textarea>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PreferenceInformation
