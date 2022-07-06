import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

const ProfessionalQulification = (props) => {
  const [professionalQulification, setProfessionalQulification] = useState({
    designation: '',
    organizationName: '',
  })

  const { updateProfessionalData } = props

  useEffect(() => {
    updateProfessionalData(professionalQulification)
  }, [professionalQulification, updateProfessionalData])

  return (
    <>
      <Container className="cv_bank_container21">
        <h4>Designation:</h4>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your designation."
          onChange={(event) =>
            setProfessionalQulification({
              ...professionalQulification,
              designation: event.target.value,
            })
          }
        />
        <br />
        <h4>Name Of The Organization:</h4>
        <input
          type="text"
          className="form-control"
          placeholder="Enter organization name."
          onChange={(event) =>
            setProfessionalQulification({
              ...professionalQulification,
              organizationName: event.target.value,
            })
          }
        />
      </Container>
    </>
  )
}

export default ProfessionalQulification
