import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import CreatableSelect from 'react-select/creatable'
import { useSelector } from 'react-redux'

const options = [
  { label: 'Bangla', value: 'Bangla' },
  { label: 'English', value: 'English' },
  { label: 'ICT', value: 'ICT' },
  { label: 'Biology', value: 'Biology' },
  { label: 'Physics', value: 'Physics' },
  { label: 'Mathematics', value: 'Mathematics' },
  { label: 'Statistics', value: 'Statistics' },
  { label: 'Finance', value: 'Finance' },
  {
    label: 'Banking and Insurance',
    value: 'Banking and Insurance',
    name: 'group',
  },
  {
    label: 'Business Organization and management',
    value: 'Business Organization and management',
    name: 'group',
  },
  { label: 'Accounting', value: 'Accounting' },
  {
    label: 'Production Management',
    value: 'Production Management',
    name: 'group',
  },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Economics', value: 'Economics' },
  { label: 'Psychology', value: 'Psychology' },
  { label: 'Sociology', value: 'Sociology' },
  { label: 'Social Work', value: 'Social Work' },
  { label: 'Geography', value: 'Geography' },
  { label: 'Agriculture', value: 'Agriculture' },
  { label: 'Sociology', value: 'Sociology' },
  { label: 'Studies of Islam', value: 'Studies of Islam' },
  { label: 'Home Economics ', value: 'Home Economics ' },
  { label: 'Science', value: 'Science' },
  {
    label: 'Computer Application',
    value: 'Computer Application',
    name: 'group',
  },
  {
    label: 'Electrical Engineering',
    value: 'Electrical Engineering',
    name: 'group',
  },
  {
    label: 'Bachelor of Business Administration',
    value: 'Bachelor of Business Administration',
    name: 'group',
  },
  { label: 'Art and Craft', value: 'Art and Craft' },
  { label: 'Hospitality', value: 'Hospitality' },
  { label: 'Fashion Design', value: 'Fashion Design' },
  { label: 'Biotechnology', value: 'Biotechnology' },
  { label: 'Zoology', value: 'Zoology' },
  { label: 'Orthodontics', value: 'Orthodontics' },
  { label: 'Dental', value: 'Dental' },
  { label: 'Nursing', value: 'Nursing' },
  { label: 'Veterinary', value: 'Veterinary' },
  { label: 'Architecture', value: 'Architecture' },
  {
    label: 'Bangladesh and Global Studies',
    value: 'Bangladesh and Global Studies',
    name: 'group',
  },
  {
    label: 'Business Entrepreneurship',
    value: 'Business Entrepreneurship',
    name: 'group',
  },
  {
    label: 'Journalism and Mass Communication',
    value: 'Journalism and Mass Communication',
    name: 'group',
  },
  { label: 'LL.B', value: 'LL.B' },
  { label: 'Law', value: 'Law' },
  { label: 'Agronomy', value: 'Agronomy' },
  { label: 'Pharmacy', value: 'Pharmacy' },
  { label: 'Civil Engineering', value: 'Civil Engineering' },
  { label: 'Pathology', value: 'Pathology' },
  { label: 'Paramedical', value: 'Paramedical' },
  { label: 'Animation', value: 'Animation' },
  { label: 'Vocational', value: 'Vocational' },
  { label: 'Aviation', value: 'Aviation' },
  { label: 'Medical', value: 'Medical' },
  { label: 'Hotel Management', value: 'Hotel Management' },
]

const Qualification = (props) => {
  const eduData_ = useSelector((state) => state.cvDataReducer.educationalData)
  const professionalData_ = useSelector(
    (state) => state.cvDataReducer.professionalData,
  )
  const [fromdate, setFromDate] = useState([{ dateset: '' }])
  const [todate, setToDate] = useState([{ dateset: '' }])
  const [current, setCurrent] = useState('NotChacked')

  const [educationalQulification, setEducationalQulification] = useState([
    {
      levelOfEducation: eduData_[0] ? eduData_[0].levelOfEducation : '',
      group: eduData_[0] ? eduData_[0].group : '',
      instituteName: eduData_[0] ? eduData_[0].instituteName : '',
      passingYear: eduData_[0] ? eduData_[0].passingYear : 2022,
    },
  ])

  const [professionalQulification, setProfessionalQulification] = useState([
    {
      companyName: professionalData_[0] ? professionalData_[0].companyName : '',
      designation: professionalData_[0] ? professionalData_[0].designation : '',
      com_location: professionalData_[0]
        ? professionalData_[0].com_location
        : '',
      from_employment: professionalData_[0]
        ? professionalData_[0].from_employment
        : '',
      to_employment: professionalData_[0]
        ? professionalData_[0].to_employment
        : '',
    },
  ])

  const handleAcademicAdd = (index) => {
    var updateIndex = index + 1
    setEducationalQulification([
      ...educationalQulification,
      {
        levelOfEducation: eduData_[updateIndex]
          ? eduData_[updateIndex].levelOfEducation
          : '',
        group: eduData_[updateIndex] ? eduData_[updateIndex].group : '',
        instituteName: eduData_[updateIndex]
          ? eduData_[updateIndex].instituteName
          : '',
        passingYear: eduData_[updateIndex]
          ? eduData_[updateIndex].passingYear
          : '',
      },
    ])
  }

  const handleAcademicRemove = (index) => {
    const list = [...educationalQulification]
    list.splice(index, 1)
    setEducationalQulification(list)
  }

  const handleAcademicInput = (index, event) => {
    const values = [...educationalQulification]
    values[index][event.target.name] = event.target.value
    setEducationalQulification(values)
  }

  const handleAcademicInput2 = (index, event) => {
    const values = [...educationalQulification]
    values[index]['group'] = event.value
    setEducationalQulification(values)
  }

  const handleProfessionalAdd = (index) => {
    var updateIndex = index + 1
    setProfessionalQulification([
      ...professionalQulification,
      {
        companyName: professionalData_[updateIndex]
          ? professionalData_[updateIndex].companyName
          : '',
        designation: professionalData_[updateIndex]
          ? professionalData_[updateIndex].designation
          : '',
        com_location: professionalData_[updateIndex]
          ? professionalData_[updateIndex].com_location
          : '',
        from_employment: professionalData_[updateIndex]
          ? professionalData_[updateIndex].from_employment
          : '',
        to_employment: professionalData_[updateIndex]
          ? professionalData_[updateIndex].to_employment
          : '',
      },
    ])
    setFromDate([
      ...fromdate,
      {
        dateset: '',
      },
    ])
    setToDate([
      ...todate,
      {
        dateset: '',
      },
    ])
  }

  const { updateEducationalData, updateProfessionalData } = props

  useEffect(() => {
    updateEducationalData(educationalQulification)
    updateProfessionalData(professionalQulification)
  }, [
    educationalQulification,
    updateEducationalData,
    updateProfessionalData,
    professionalQulification,
  ])

  const handleProfessionalRemove = (index) => {
    const list = [...professionalQulification]
    list.splice(index, 1)
    setProfessionalQulification(list)
  }

  const handleProfessionalInput = (index, event) => {
    const values = [...professionalQulification]
    values[index][event.target.name] = event.target.value
    setProfessionalQulification(values)
  }

  const hendleDateFrom = (index, inputdate) => {
    const values = [...fromdate]
    values[index]['dateset'] = inputdate
    setFromDate(values)
  }

  const hendleDateTo = (index, inputdate) => {
    const values = [...todate]
    values[index]['dateset'] = inputdate
    setToDate(values)
  }

  const autofill = () => {
    setProfessionalQulification([
      {
        designation: 'none',
        companyName: 'none',
        com_location: 'none',
        from_employment: 'none',
        to_employment: 'none',
        com_reference: 'none',
      },
    ])
    document.querySelector('.hide_profession').style.display = 'none'
  }

  return (
    <>
      <Container className="cv_bank_container21">
        <div align="center" className="hide_title">
          <h3>Education & Profession</h3>
        </div>
        <br className="hide_title" />
        {educationalQulification.map((item, index) => {
          return (
            <div key={index}>
              <div className="font-form-size">
                <br />
                <h5
                  style={{
                    color: '#ff566b',
                  }}
                >
                  Academic {index + 1}
                </h5>
              </div>

              <Row className="row-padding custom-font-size">
                <Col xs={12} md={6}>
                  <h5>
                    Level of Education
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <select
                    className="form-control levelOfEducation"
                    name="levelOfEducation"
                    value={educationalQulification[index].levelOfEducation}
                    onChange={(event) => handleAcademicInput(index, event)}
                  >
                    <option value="" disabled selected>
                      Choose One
                    </option>
                    <option value="Secondary">Secondary</option>
                    <option value="Higher Secondary">Higher Secondary</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor Honors">Bachelor Honors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD(Doctor of philosophy)</option>
                  </select>
                </Col>
                <Col xs={0} md={6}>
                  <h5>
                    Concentration/Major/Group
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <div className="App2">
                    <CreatableSelect
                      options={options}
                      className={`group_${index}`}
                      defaultValue={
                        educationalQulification[index].group
                          ? {
                              label: `${educationalQulification[index].group}`,
                              value: `${educationalQulification[index].group}`,
                            }
                          : false
                      }
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 3,
                        colors: {
                          ...theme.colors,
                          primary25: '#ff566a56',
                          primary: '#ff566b',
                        },
                      })}
                      onChange={(event) => handleAcademicInput2(index, event)}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>
                    Institute Name
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="text"
                    className="form-control instituteName"
                    placeholder="Enter your institute name."
                    name="instituteName"
                    value={educationalQulification[index].instituteName}
                    onChange={(event) => handleAcademicInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>
                    Passing Year
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="number"
                    min="1900"
                    max="2022"
                    step="1"
                    className="form-control passingYear"
                    name="passingYear"
                    value={educationalQulification[index].passingYear}
                    onChange={(event) => handleAcademicInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col align="right" className="cv_bank_container21">
                  {educationalQulification.length - 1 === index &&
                    educationalQulification.length > 1 &&
                    educationalQulification.length < 5 && (
                      <button
                        className="educationAdd"
                        title="Remove One"
                        onClick={() => handleAcademicRemove(index)}
                      >
                        <FaMinus size={15} color="white" /> Close
                      </button>
                    )}{' '}
                  {educationalQulification.length - 1 === index &&
                    educationalQulification.length < 4 && (
                      <button
                        className="educationAdd"
                        title="Add More"
                        onClick={() => handleAcademicAdd(index)}
                      >
                        <FaPlus size={15} color="white" /> Add More
                      </button>
                    )}
                </Col>
              </Row>
            </div>
          )
        })}
        <br />
        {professionalQulification.map((item, index) => {
          return (
            <div key={index} className="hide_profession">
              <div className="font-form-size">
                <br />
                <h5
                  style={{
                    color: '#ff566b',
                  }}
                >
                  Profession {index + 1}
                </h5>
              </div>
              <Row className="row-padding">
                <Col xs={12} md={12}>
                  <h5>Company Name:</h5>
                  <input
                    type="text"
                    className="form-control companyName"
                    placeholder="Enter company name."
                    name="companyName"
                    value={professionalQulification[index].companyName}
                    onChange={(event) => handleProfessionalInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>Designation:</h5>
                  <input
                    type="text"
                    className="form-control designation"
                    placeholder="Enter your designation."
                    name="designation"
                    value={professionalQulification[index].designation}
                    onChange={(event) => handleProfessionalInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>Location:</h5>
                  <input
                    type="text"
                    className="form-control com_location"
                    placeholder="Enter location."
                    name="com_location"
                    value={professionalQulification[index].com_location}
                    onChange={(event) => handleProfessionalInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <h5>Employment Period:</h5>
                <Col xs={12} md={6}>
                  <div class="from-group">
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        className="form-control input-background from_employment"
                        placeholder="From Date (M DD, YYYY)"
                        value={
                          fromdate.map((item) => item.dateset)[index] !== ''
                            ? fromdate.map((item) => item.dateset)[index]
                            : professionalQulification[index].from_employment
                        }
                        disabled
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input
                            type="date"
                            id="date-change"
                            name="from_employment"
                            onChange={(event) => {
                              hendleDateFrom(index, event.target.value)
                              handleProfessionalInput(index, event)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  {current !== `Chacked_${index}` && (
                    <div class="from-group">
                      <div class="input-group mb-2">
                        <input
                          type="text"
                          className="form-control input-background to_employment"
                          value={
                            todate.map((item) => item.dateset)[index] !== ''
                              ? todate.map((item) => item.dateset)[index]
                              : professionalQulification[index].to_employment
                          }
                          placeholder="To Date (MM, DD, YYYY)"
                          disabled
                        />
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input
                              type="date"
                              id="date-change"
                              name="to_employment"
                              onChange={(event) => {
                                hendleDateTo(index, event.target.value)
                                handleProfessionalInput(index, event)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Col>
                <div class="checkbox">
                  <label style={{ marginLeft: '20px' }}>
                    <input
                      type="checkbox"
                      value={`Chacked_${index}`}
                      className="form-check-input"
                      onChange={(event) => {
                        if (event.target.checked) {
                          setCurrent(event.target.value)
                          const values = [...professionalQulification]
                          values[index]['to_employment'] =
                            'Currently working here'
                          setProfessionalQulification(values)
                        } else if (!event.target.checked) {
                          setCurrent(`NotChacked`)
                          const values = [...professionalQulification]
                          values[index]['to_employment'] = todate.map(
                            (item) => item.dateset,
                          )[index]
                          setProfessionalQulification(values)
                        }
                      }}
                    />{' '}
                    Currently working here?
                  </label>
                </div>
              </Row>
              <Row className="row-padding">
                <Col className="cv_bank_container21">
                  <div className="cv_bank_add_button">
                    {professionalQulification.length === 1 ? (
                      <label className="skip-content" onClick={autofill}>
                        Skip Profession
                      </label>
                    ) : (
                      ''
                    )}
                    <div className="cv_bank_button_inside">
                      {professionalQulification.length - 1 === index &&
                        professionalQulification.length > 1 &&
                        professionalQulification.length < 7 && (
                          <button
                            className="educationAdd"
                            title="Remove One"
                            onClick={() => handleProfessionalRemove(index)}
                          >
                            <FaMinus size={15} color="white" /> Close
                          </button>
                        )}{' '}
                      {professionalQulification.length - 1 === index &&
                        professionalQulification.length < 6 && (
                          <button
                            className="educationAdd"
                            title="Add More"
                            onClick={() => handleProfessionalAdd(index)}
                          >
                            <FaPlus size={15} color="white" /> Add More
                          </button>
                        )}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )
        })}
      </Container>
    </>
  )
}

export default Qualification
