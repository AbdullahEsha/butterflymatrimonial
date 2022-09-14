import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const PreferenceInformation = (props) => {
  const [preferenceData, setPreferenceData] = useState([])
  const preferenceInfoData_ = useSelector(
    (state) => state.cvDataReducer.preferenceInfoData,
  )
  const profileData_ = useSelector((state) => state.cvDataReducer.profileData)
  const [preferenceInformation, setPreferenceInformation] = useState({
    profession: preferenceInfoData_ ? preferenceInfoData_.profession : '',
    districtPreference: preferenceInfoData_
      ? preferenceInfoData_.districtPreference
      : '',
    spousePreference: preferenceInfoData_
      ? preferenceInfoData_.spousePreference
      : '',
    religionPreference: preferenceInfoData_
      ? preferenceInfoData_.religionPreference
      : '',
    physicalStatus: preferenceInfoData_
      ? preferenceInfoData_.physicalStatus
      : '',
    ageMinimum: preferenceInfoData_ ? preferenceInfoData_.ageMinimum : '',
    ageMaximum: preferenceInfoData_ ? preferenceInfoData_.ageMaximum : '',
    heightMinimum: preferenceInfoData_ ? preferenceInfoData_.heightMinimum : '',
    heightMaximum: preferenceInfoData_ ? preferenceInfoData_.heightMaximum : '',
    skinTone: preferenceInfoData_ ? preferenceInfoData_.skinTone : '',
    preference: preferenceInfoData_ ? preferenceInfoData_.preference : '',
  })

  const { updatePreferenceInfoData, updatePreferenceData } = props

  useEffect(() => {
    updatePreferenceData(preferenceData)
    updatePreferenceInfoData(preferenceInformation)
  }, [
    preferenceInformation,
    preferenceData,
    updatePreferenceInfoData,
    updatePreferenceData,
  ])

  const checkPreference = (event, name) => {
    if (event) {
      let prefData = [...preferenceData, name]
      setPreferenceData(prefData)
      setPreferenceInformation({
        ...preferenceInformation,
        preference: prefData.join(', '),
      })
    } else {
      preferenceData.forEach((item, index) => {
        if (item === name) {
          preferenceData.splice(index, 1)
          setPreferenceData(preferenceData)
          setPreferenceInformation({
            ...preferenceInformation,
            preference: preferenceData.join(', '),
          })
        }
      })
    }
  }

  // console.log(preferenceData)

  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Profession
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control profession"
              placeholder="Choose One"
              name="profession"
              value={preferenceInformation.profession}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  profession: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Gov. Employee">Gov. Employee</option>
              <option value="Doctor">Doctor</option>
              <option value="Engineer">Engineer</option>
              <option value="Bank Employee">Bank Employee</option>
              <option value="Business">Business</option>
              <option value="No Specific">No Specific</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Skin Tone
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control skinTone"
              placeholder="Choose One"
              name="skin-tone"
              value={preferenceInformation.skinTone}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  skinTone: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Light">Light</option>
              <option value="Fair to Light">Fair to Light</option>
              <option value="Medium to Light">Medium to Light</option>
              <option value="Bellow Medium to Light">
                Bellow Medium to Light
              </option>
            </select>
          </Col>
        </Row>
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
              <option value="Practicing">Practicing</option>
              <option value="Neutral">Neutral</option>
              <option value="Modern">Modern</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              District
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control districtPreference"
              placeholder="Choose One"
              name="district-preference"
              value={preferenceInformation.districtPreference}
              onChange={(event) => {
                setPreferenceInformation({
                  ...preferenceInformation,
                  districtPreference: event.target.value,
                })
              }}
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Inside Barisal, Noakhali, Comilla, Chandpur">
                Inside Barisal, Noakhali, Comilla, Chandpur
              </option>
              <option
                value={profileData_ ? profileData_.divisionParmanent : 'Dhaka'}
              >
                {profileData_ ? profileData_.divisionParmanent : 'Dhaka'}
              </option>
              <option value="Any">Any</option>
            </select>
          </Col>
        </Row>
        {/* <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Annual Income Range
              <span  style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Choose One"
                  value={preferenceInformation.incomeMinimum}
                  onChange={(event) => {
                    setPreferenceInformation({
                      ...preferenceInformation,
                      incomeMinimum: event.target.value,
                    })
                  }}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Choose One"
                  value={preferenceInformation.incomeMaximum}
                  onChange={(event) => {
                    setPreferenceInformation({
                      ...preferenceInformation,
                      incomeMaximum: event.target.value,
                    })
                  }}
                />
              </div>
            </div>
          </Col>
        </Row> */}
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Physical Status
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redioPhysicalStatus"
                  value="Normal"
                  checked={
                    preferenceInformation.physicalStatus === 'Normal'
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setPreferenceInformation({
                      ...preferenceInformation,
                      physicalStatus: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="exampleRadios1">
                  Normal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redioPhysicalStatus"
                  value="Physically Challenged"
                  checked={
                    preferenceInformation.physicalStatus ===
                    'Physically Challenged'
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setPreferenceInformation({
                      ...preferenceInformation,
                      physicalStatus: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="exampleRadios2">
                  Physically Challenged
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redioPhysicalStatus"
                  value="Any"
                  checked={
                    preferenceInformation.physicalStatus === 'Any'
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setPreferenceInformation({
                      ...preferenceInformation,
                      physicalStatus: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="exampleRadios2">
                  Any
                </label>
              </div>
              <label className="physicalStatusCheck" style={{ color: 'red' }}>
                Please select at least one.
              </label>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Preference
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Single"
                onChange={(event) =>
                  checkPreference(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Single</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Divorce"
                onChange={(event) =>
                  checkPreference(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Divorce without child"
                onChange={(event) =>
                  checkPreference(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce without child</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Divorce with child"
                onChange={(event) =>
                  checkPreference(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce with child</label>
            </div>
            <label className="preferenceCheck" style={{ color: 'red' }}>
              Please select at least one.
            </label>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Spouse Preference
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redioJob"
                  value="Job"
                  checked={
                    preferenceInformation.spousePreference === 'Job'
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setPreferenceInformation({
                      ...preferenceInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="exampleRadios1">
                  Job
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redioJob"
                  value="No Job"
                  checked={
                    preferenceInformation.spousePreference === 'No Job'
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setPreferenceInformation({
                      ...preferenceInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="exampleRadios2">
                  No Job
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redioJob"
                  value="Any"
                  checked={
                    preferenceInformation.spousePreference === 'Any'
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setPreferenceInformation({
                      ...preferenceInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="exampleRadios2">
                  Any
                </label>
              </div>
              <label className="spousePreferenceCheck" style={{ color: 'red' }}>
                Please select at least one.
              </label>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PreferenceInformation
