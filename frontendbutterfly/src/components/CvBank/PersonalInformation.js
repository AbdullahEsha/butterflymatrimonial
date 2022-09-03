import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const PersonalInformation = (props) => {
  const personalData_ = useSelector((state) => state.cvDataReducer.personalData)
  const [city, setCity] = useState([])
  const [personalInformation, setPersonalInformation] = useState({
    height: personalData_ ? personalData_.height : '',
    weight: personalData_ ? personalData_.weight : '',
    bloodGroup: personalData_ ? personalData_.bloodGroup : '',
    grownUpAt: personalData_ ? personalData_.grownUpAt : '',
    specialCondition: personalData_ ? personalData_.specialCondition : '',
  })

  const { updatePersonalData } = props

  useEffect(() => {
    getAllCity()
    updatePersonalData(personalInformation)
  }, [personalInformation, updatePersonalData])

  const getAllCity = async () => {
    fetch(`https://countriesnow.space/api/v0.1/countries`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          const countryInfo = [...data.data]
          let requiredCountryInfo = []
          countryInfo.map((item, index) =>
            requiredCountryInfo.push({
              label: `${item.country}`,
              value: `${item.country}`,
            }),
          )
          setCity(requiredCountryInfo)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }
  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Height
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <select
              class="form-control height"
              placeholder="Choose One"
              value={personalInformation.height}
              onChange={(event) =>
                setPersonalInformation({
                  ...personalInformation,
                  height: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
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
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Weight in (kg)
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="number"
              min="30"
              max="150"
              step="5"
              className="form-control weight"
              placeholder="Enter your weight."
              value={personalInformation.weight}
              onChange={(event) =>
                setPersonalInformation({
                  ...personalInformation,
                  weight: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Blood Group
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <select
              class="form-control bloodGroup"
              placeholder="Choose One"
              value={personalInformation.bloodGroup}
              onChange={(event) =>
                setPersonalInformation({
                  ...personalInformation,
                  bloodGroup: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Where You Grown Up?
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control grownUpAt"
              placeholder="Enter the Country and City name."
              onChange={(event) => {
                setPersonalInformation({
                  ...personalInformation,
                  grownUpAt: event.target.value,
                })
              }}
            />
            {/* <Select
              options={city}
              defaultValue={{
                label: `${personalInformation.grownUpAt}`,
                value: `${personalInformation.grownUpAt}`,
              }}
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
                setPersonalInformation({
                  ...personalInformation,
                  grownUpAt: event.target.value,
                })
              }}
            /> */}
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Special Condition
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div class="input-group">
              <textarea
                class="form-control specialCondition"
                placeholder="Please share if you have any disabilities, low eye vision etc."
                aria-label="With textarea"
                rows="7"
                value={personalInformation.specialCondition}
                onChange={(event) => {
                  setPersonalInformation({
                    ...personalInformation,
                    specialCondition: event.target.value,
                  })
                }}
              ></textarea>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PersonalInformation
