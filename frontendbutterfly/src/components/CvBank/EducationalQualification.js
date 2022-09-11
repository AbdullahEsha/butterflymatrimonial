import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Select from 'react-select'
import { useSelector } from 'react-redux'

const options = [
  { label: 'Bangla', value: 'Bangla', name: 'group' },
  { label: 'English', value: 'English', name: 'group' },
  { label: 'ICT', value: 'ICT', name: 'group' },
  { label: 'Biology', value: 'Biology', name: 'group' },
  { label: 'Physics', value: 'Physics', name: 'group' },
  { label: 'Mathematics', value: 'Mathematics', name: 'group' },
  { label: 'Statistics', value: 'Statistics', name: 'group' },
  { label: 'Finance', value: 'Finance', name: 'group' },
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
  { label: 'Accounting', value: 'Accounting', name: 'group' },
  {
    label: 'Production Management',
    value: 'Production Management',
    name: 'group',
  },
  { label: 'Marketing', value: 'Marketing', name: 'group' },
  { label: 'Economics', value: 'Economics', name: 'group' },
  { label: 'Psychology', value: 'Psychology', name: 'group' },
  { label: 'Sociology', value: 'Sociology', name: 'group' },
  { label: 'Social Work', value: 'Social Work', name: 'group' },
  { label: 'Geography', value: 'Geography', name: 'group' },
  { label: 'Agriculture', value: 'Agriculture', name: 'group' },
  { label: 'Sociology', value: 'Sociology', name: 'group' },
  { label: 'Studies of Islam', value: 'Studies of Islam', name: 'group' },
  { label: 'Home Economics ', value: 'Home Economics ', name: 'group' },
  { label: 'Science', value: 'Science', name: 'group' },
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
  { label: 'Art and Craft', value: 'Art and Craft', name: 'group' },
  { label: 'Hospitality', value: 'Hospitality', name: 'group' },
  { label: 'Fashion Design', value: 'Fashion Design', name: 'group' },
  { label: 'Biotechnology', value: 'Biotechnology', name: 'group' },
  { label: 'Zoology', value: 'Zoology', name: 'group' },
  { label: 'Orthodontics', value: 'Orthodontics', name: 'group' },
  { label: 'Dental', value: 'Dental', name: 'group' },
  { label: 'Nursing', value: 'Nursing', name: 'group' },
  { label: 'Veterinary', value: 'Veterinary', name: 'group' },
  { label: 'Architecture', value: 'Architecture', name: 'group' },
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
  { label: 'LL.B', value: 'LL.B', name: 'group' },
  { label: 'Law', value: 'Law', name: 'group' },
  { label: 'Agronomy', value: 'Agronomy', name: 'group' },
  { label: 'Pharmacy', value: 'Pharmacy', name: 'group' },
  { label: 'Civil Engineering', value: 'Civil Engineering', name: 'group' },
  { label: 'Pathology', value: 'Pathology', name: 'group' },
  { label: 'Paramedical', value: 'Paramedical', name: 'group' },
  { label: 'Animation', value: 'Animation', name: 'group' },
  { label: 'Vocational', value: 'Vocational', name: 'group' },
  { label: 'Aviation', value: 'Aviation', name: 'group' },
  { label: 'Medical', value: 'Medical', name: 'group' },
  { label: 'Hotel Management', value: 'Hotel Management', name: 'group' },
]

const EducationalQulification = (props) => {
  const eduData_ = useSelector((state) => state.cvDataReducer.educationalData)

  const [educationalQulification, setEducationalQulification] = useState([
    {
      instituteName: eduData_[0] ? eduData_[0].instituteName : '',
      passingYear: eduData_[0] ? eduData_[0].passingYear : '',
      levelOfEducation: eduData_[0] ? eduData_[0].levelOfEducation : '',
      instituteLocation: eduData_[0] ? eduData_[0].instituteLocation : '',
      group: eduData_[0] ? eduData_[0].group : '',
    },
  ])

  const handleServiceAdd = (index) => {
    var updateIndex = index + 1
    setEducationalQulification([
      ...educationalQulification,
      {
        instituteName: eduData_[updateIndex]
          ? eduData_[updateIndex].instituteName
          : '',
        passingYear: eduData_[updateIndex]
          ? eduData_[updateIndex].passingYear
          : '',
        levelOfEducation: eduData_[updateIndex]
          ? eduData_[updateIndex].levelOfEducation
          : '',
        instituteLocation: eduData_[updateIndex]
          ? eduData_[updateIndex].instituteLocation
          : '',
        group: eduData_[updateIndex] ? eduData_[updateIndex].group : '',
      },
    ])
  }
  const handleServiceRemove = (index) => {
    const list = [...educationalQulification]
    list.splice(index, 1)
    setEducationalQulification(list)
  }

  const { updateEducationalData } = props

  useEffect(() => {
    updateEducationalData(educationalQulification)
  }, [educationalQulification, updateEducationalData])

  const handleInput = (index, event) => {
    const values = [...educationalQulification]
    values[index][event.target.name] = event.target.value
    setEducationalQulification(values)
  }

  const handleInput2 = (index, event) => {
    const values = [...educationalQulification]
    values[index][event.name] = event.value
    setEducationalQulification(values)
  }

  return (
    <>
      <Container className="cv_bank_container21">
        {educationalQulification.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <br />
                <h5
                  style={{
                    borderBottom: '1px solid #ff566b',
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
                    onChange={(event) => handleInput(index, event)}
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
                    <Select
                      options={options}
                      className={`group_${index}`}
                      defaultValue={{
                        label:
                          educationalQulification[index].group === ''
                            ? 'Choose one.'
                            : educationalQulification[index].group,
                        value:
                          educationalQulification[index].group === ''
                            ? 'Choose one.'
                            : educationalQulification[index].group,
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
                      onChange={(event) => handleInput2(index, event)}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={12}>
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
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={12} md={6}>
                  <h5>
                    Institute Location
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="text"
                    className="form-control instituteLocation"
                    placeholder="Enter your institute location."
                    name="instituteLocation"
                    value={educationalQulification[index].instituteLocation}
                    onChange={(event) => handleInput(index, event)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <h5>
                    Year of Passing
                    <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
                  </h5>
                  <input
                    type="month"
                    className="form-control passingYear"
                    name="passingYear"
                    placeholder="mm/yyyy"
                    value={educationalQulification[index].passingYear}
                    onChange={(event) => handleInput(index, event)}
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
                        onClick={() => handleServiceRemove(index)}
                      >
                        <FaMinus size={15} color="white" /> Close
                      </button>
                    )}{' '}
                  {educationalQulification.length - 1 === index &&
                    educationalQulification.length < 4 && (
                      <button
                        className="educationAdd"
                        title="Add More"
                        onClick={() => handleServiceAdd(index)}
                      >
                        <FaPlus size={15} color="white" /> Add More
                      </button>
                    )}
                </Col>
              </Row>
            </div>
          )
        })}
      </Container>
    </>
  )
}

export default EducationalQulification
