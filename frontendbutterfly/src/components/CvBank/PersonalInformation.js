import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PersonalInformation = (props) => {
  const [personalInformation, setPersonalInformation] = useState({
    height: '',
    weight: '',
    bloodGroup: '',
    grownUpAt: '',
    specialCondition: '',
  })

  const { updatePersonalData } = props

  useEffect(() => {
    updatePersonalData(personalInformation)
  }, [personalInformation, updatePersonalData])

  return (
    <>
      <Container className="cv_bank_container21">
        <Row>
          <Col xs={12} md={6}>
            <h4>Height:</h4>
            <select
              class="form-control"
              placeholder="Choose One"
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
            <h4>Weight in (kg):</h4>
            <input
              type="number"
              min="30"
              max="150"
              step="5"
              className="form-control"
              placeholder="Enter your weight."
              onChange={(event) =>
                setPersonalInformation({
                  ...personalInformation,
                  weight: event.target.value,
                })
              }
            />
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="cv_bank_container21">
        <Row>
          <Col xs={12} md={3}>
            <h4>Blood Group</h4>
            <select
              class="form-control"
              placeholder="Choose One"
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
        </Row>
      </Container>
      <br />
      <Container className="cv_bank_container21">
        <h4>Where You Grown Up?(Country)</h4>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the country name."
          onChange={(event) => {
            setPersonalInformation({
              ...personalInformation,
              grownUpAt: event.target.value,
            })
          }}
        />
      </Container>
      <br />
      <Container className="cv_bank_container21">
        <h4>Special Condition:</h4>
        <div class="input-group">
          <textarea
            class="form-control"
            placeholder="Please Share Details."
            aria-label="With textarea"
            rows="7"
            onChange={(event) => {
              setPersonalInformation({
                ...personalInformation,
                specialCondition: event.target.value,
              })
            }}
          ></textarea>
        </div>
      </Container>
      <br />
    </>
  )
}

export default PersonalInformation
