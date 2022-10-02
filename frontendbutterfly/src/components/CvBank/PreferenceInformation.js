import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const options = [
  { label: 'Unmarried', value: 'Unmarried' },
  { label: 'Widow/Widower', value: 'Widow/Widower' },
  { label: 'Separated', value: 'Separated' },
  { label: 'Divorced Without Child', value: 'Divorced Without Child' },
  { label: 'Divorced With Child', value: 'Divorced With Child' },
  { label: 'Married', value: 'Married' },
]

const optionComplexion = [
  { label: 'Extremely Fair', value: 'Extremely fair' },
  { label: 'Fair', value: 'Medium' },
  { label: 'Olive', value: 'Olive' },
  { label: 'Brown', value: 'Brown' },
  { label: 'Dark', value: 'Dark' },
]

const optionOccupation = [
  { label: 'Gov. Employee', value: 'Gov. Employee' },
  { label: 'Private Job', value: 'Private Job' },
  { label: 'Business', value: 'Business' },
  { label: 'Physiotherapists', value: 'Physiotherapists' },
  { label: 'Engineer', value: 'Engineer' },
  { label: 'Pharmacist', value: 'Pharmacist' },
  { label: 'Bank Employee', value: 'Bank Employee' },
  { label: 'Doctor', value: 'Doctor' },
  { label: 'Journalist', value: 'Journalist' },
  { label: 'Not Specific', value: 'No Specific' },
]

const PreferenceInformation = (props) => {
  const preferenceInfoData_ = useSelector(
    (state) => state.cvDataReducer.preferenceInfoData,
  )

  const [preferenceInformation, setPreferenceInformation] = useState({
    ageMinimum: preferenceInfoData_.ageMinimum
      ? preferenceInfoData_.ageMinimum
      : 18,
    ageMaximum: preferenceInfoData_.ageMaximum
      ? preferenceInfoData_.ageMaximum
      : 20,
    heightMinimum: preferenceInfoData_.heightMinimum
      ? preferenceInfoData_.heightMinimum
      : '4ft 5',
    heightMaximum: preferenceInfoData_.heightMaximum
      ? preferenceInfoData_.heightMaximum
      : '4ft 6',
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
    location: preferenceInfoData_.location ? preferenceInfoData_.location : '',
    religionPreference: preferenceInfoData_
      ? preferenceInfoData_.religionPreference
      : '',
    preferenceDetails: preferenceInfoData_.preferenceDetails
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
        <h3 className="hide_title">Preference Information</h3>
        <br className="hide_title" />
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>Age Range :</h5>
            <div className="row">
              <div className="col-range">
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
                  <option value="18">18</option>
                  <option value="19">19</option>
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
                </select>
              </div>
              <div className="col-range">
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
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="41">41</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5>Height Range :</h5>
            <div className="row">
              <div className="col-range">
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
              <div className="col-range">
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
                preferenceInformation.maritalStatusPreference
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
            <Select
              className="complexionPreference"
              options={optionComplexion}
              isMulti={true}
              defaultValue={
                preferenceInformation.complexionPreference
                  ? {
                      label: `${preferenceInformation.complexionPreference}`,
                      value: `${preferenceInformation.complexionPreference}`,
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
                  complexionPreference: event.map((item) => item.label).join(),
                })
              }}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Occupation
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <Select
              className="occupationPreference"
              options={optionOccupation}
              isMulti={true}
              defaultValue={
                preferenceInformation.occupationPreference
                  ? {
                      label: `${preferenceInformation.occupationPreference}`,
                      value: `${preferenceInformation.occupationPreference}`,
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
                  occupationPreference: event.map((item) => item.label).join(),
                })
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Education Level
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control educationPreference"
              placeholder="Choose One"
              name="educationPreference"
              value={preferenceInformation.educationPreference}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  educationPreference: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose one
              </option>
              <option value="Minimum Secondary">Minimum Secondary</option>
              <option value="Minimum Higher Secondary">
                Minimum Higher Secondary
              </option>
              <option value="Minimum Diploma">Minimum Bachelor Honors</option>
              <option value="Minimum Masters">Minimum Masters</option>
              <option value="Minimum PhD">Minimum PhD</option>
              <option value="Not Specific">Not Specific</option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Location
              <span
                style={{
                  fontSize: '24px',
                  visibility: 'hidden',
                }}
              >
                *
              </span>
              :
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
            <h5>Details :</h5>
            <textarea
              rows="3"
              className="form-control preferenceDetails"
              value={preferenceInformation.preferenceDetails}
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
