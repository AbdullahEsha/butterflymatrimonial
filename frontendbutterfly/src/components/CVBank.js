import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EducationalQulification from './CvBank/EducationalQualification'
import FamilyMember from './CvBank/FamilyMember'
import PersonalInformation from './CvBank/PersonalInformation'
import ProfessionalQualification from './CvBank/ProfessionalQualification'
import ProfileInFormation from './CvBank/ProfileInformation'
import axios from 'axios'
import Preview from './CvBank/Preview'
import Footer from './Footer'
import MainNav from './MainNav'
import Swal from 'sweetalert2'
import jsPDF from 'jspdf'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const CVBank = (props) => {
  const [data, setData] = useState('ProfileInformation')
  const [cvData, setCvData] = useState([])

  const [profileData, setProfileData] = useState(null)
  const [professionalData, setProfessionalData] = useState(null)
  const [personalData, setPersonalData] = useState(null)
  const [familyData, setFamilyData] = useState(null)
  const [educationalData, setEducationalData] = useState(null)
  const [siblingData, setSiblingData] = useState(null)
  const [preferenceData, setPreferenceData] = useState(null)

  const validation = () => {
    if (data === 'ProfileInformation') {
      if (profileData.image === '') {
        Swal.fire('Oops..!', 'Name isn`t submited!!', 'error')
      } else if (profileData.name === '') {
        Swal.fire('Oops..!', 'Name isn`t submited!!', 'error')
      } else if (profileData.gender === '') {
        Swal.fire('Oops..!', 'Gender isn`t submited!!', 'error')
      } else if (profileData.religion === '') {
        Swal.fire('Oops..!', 'Religion isn`t submited!!', 'error')
      } else if (profileData.email === '') {
        Swal.fire('Oops..!', 'Email isn`t submited!!', 'error')
      } else if (profileData.presentAddress === '') {
        Swal.fire('Oops..!', 'Present Address isn`t submited!!', 'error')
      } else if (profileData.divisionPresent === '') {
        Swal.fire('Oops..!', 'Present division isn`t submited!!', 'error')
      } else if (profileData.dristrictPresent === '') {
        Swal.fire('Oops..!', 'Present dristrict isn`t submited!!', 'error')
      } else if (profileData.parmanentAddress === '') {
        Swal.fire('Oops..!', 'Parmanent address isn`t submited!!', 'error')
      } else if (profileData.divisionParmanent === '') {
        Swal.fire('Oops..!', 'Parmanent division isn`t submited!!', 'error')
      } else if (profileData.dristrictParmanent === '') {
        Swal.fire('Oops..!', 'Parmanent dristrict isn`t submited!!', 'error')
      } else if (profileData.age === '') {
        Swal.fire('Oops..!', 'Age isn`t submited!!', 'error')
      } else if (preferenceData.length <= 0) {
        Swal.fire('Oops..!', 'Please check at least one preference!!', 'error')
      } else if (profileData.specialCase === '') {
        Swal.fire('Oops..!', 'Special Case isn`t submited!!', 'error')
      } else if (profileData.spousePreference === '') {
        Swal.fire('Oops..!', 'Spouse Preference isn`t submited!!', 'error')
      } else {
        setData('PersonalInformation')
      }
    } else if (data === 'PersonalInformation') {
      if (personalData.height === '') {
        Swal.fire('Oops..!', 'Height isn`t submited!!', 'error')
      } else if (personalData.weight === '') {
        Swal.fire('Oops..!', 'Weight isn`t submited!!', 'error')
      } else if (personalData.bloodGroup === '') {
        Swal.fire('Oops..!', 'Blood Group isn`t submited!!', 'error')
      } else if (personalData.grownUpAt === '') {
        Swal.fire('Oops..!', 'Please submit where you grown up.', 'error')
      } else if (personalData.specialCondition === '') {
        Swal.fire('Oops..!', 'Special Condition isn`t submited!!', 'error')
      } else {
        setData('EducationalQulification')
      }
    } else if (data === 'EducationalQulification') {
      if (educationalData.map((item) => item.instituteName)[0] === '') {
        Swal.fire('Oops..!', 'Please submit institute name!!', 'error')
      } else if (educationalData.map((item) => item.passingYear)[0] === '') {
        Swal.fire('Oops..!', 'Please submit institute passing year!!', 'error')
      } else {
        setData('ProfessionalQualification')
      }
    } else if (data === 'ProfessionalQualification') {
      if (professionalData.designation === '') {
        Swal.fire('Oops..!', 'Designation isn`t submited!!', 'error')
      } else if (professionalData.organizationName === '') {
        Swal.fire('Oops..!', 'Organization Name isn`t submited!!', 'error')
      } else {
        setData('FamilyMember')
      }
    } else if (data === 'FamilyMember') {
      if (familyData.fatherName === '') {
        Swal.fire('Oops..!', 'Father name isn`t submited!!', 'error')
      } else if (familyData.fatherOcupation === '') {
        Swal.fire('Oops..!', 'Father ocupation isn`t submited!!', 'error')
      } else if (familyData.motherName === '') {
        Swal.fire('Oops..!', 'Mother Name isn`t submited!!', 'error')
      } else if (familyData.motherOcupation === '') {
        Swal.fire('Oops..!', 'Mother Ocupation isn`t submited!!', 'error')
      } else if (siblingData.map((item) => item.name)[0] === '') {
        Swal.fire('Oops..!', 'Sibling Name isn`t submited!!', 'error')
      } else if (siblingData.map((item) => item.ocupation)[0] === '') {
        Swal.fire('Oops..!', 'Sibling ocupation Name isn`t submited!!', 'error')
      } else if (siblingData.map((item) => item.details)[0] === '') {
        Swal.fire('Oops..!', 'Sibling details isn`t submited!!', 'error')
      } else {
        setData('Preview')
      }
    }
  }

  const updateProfileData = (a) => {
    setProfileData(a)
  }
  const updateProfessionalData = (b) => {
    setProfessionalData(b)
  }
  const updatePersonalData = (c) => {
    setPersonalData(c)
  }
  const updateFamilyData = (d) => {
    setFamilyData(d)
  }
  const updateEducationalData = (e) => {
    setEducationalData(e)
  }
  const updateSiblingData = (f) => {
    setSiblingData(f)
  }
  const updatePreferenceData = (g) => {
    setPreferenceData(g)
  }

  const addCV = (event) => {
    event.preventDefault()
    if (
      profileData.image !== '' &&
      profileData.name !== '' &&
      profileData.gender !== '' &&
      profileData.phone !== '' &&
      profileData.religion !== '' &&
      profileData.email !== '' &&
      profileData.presentAddress !== '' &&
      profileData.divisionPresent !== '' &&
      profileData.dristrictPresent !== '' &&
      profileData.parmanentAddress !== '' &&
      profileData.divisionParmanent !== '' &&
      profileData.dristrictParmanent !== '' &&
      profileData.age !== '' &&
      profileData.specialCase !== '' &&
      profileData.spousePreference !== '' &&
      profileData.about !== '' &&
      preferenceData.length > 0 &&
      personalData.height !== '' &&
      personalData.weight !== '' &&
      personalData.bloodGroup !== '' &&
      personalData.grownUpAt !== '' &&
      personalData.specialCondition !== '' &&
      professionalData.designation !== '' &&
      professionalData.organizationName !== '' &&
      educationalData.map((item) => item.instituteName)[0] !== '' &&
      educationalData.map((item) => item.passingYear)[0] !== '' &&
      familyData.fatherName !== '' &&
      familyData.fatherOcupation !== '' &&
      familyData.motherName !== '' &&
      familyData.motherOcupation !== '' &&
      siblingData.map((item) => item.name)[0] !== '' &&
      siblingData.map((item) => item.ocupation)[0] !== '' &&
      siblingData.map((item) => item.details)[0] !== ''
    ) {
      const formData = new FormData()
      formData.append('image', profileData.image)
      formData.append('name', profileData.name)
      formData.append('gender', profileData.gender)
      formData.append('phone', profileData.phone)
      formData.append('religion', profileData.religion)
      formData.append('email', profileData.email)
      formData.append('presentAddress', profileData.presentAddress)
      formData.append('divisionPresent', profileData.divisionPresent)
      formData.append('dristrictPresent', profileData.dristrictPresent)
      formData.append('parmanentAddress', profileData.parmanentAddress)
      formData.append('divisionParmanent', profileData.divisionParmanent)
      formData.append('dristrictParmanent', profileData.dristrictParmanent)
      formData.append('age', profileData.age)
      formData.append('specialCase', profileData.specialCase)
      formData.append('spousePreference', profileData.spousePreference)
      formData.append('about', profileData.about)
      formData.append('designation', professionalData.designation)
      formData.append('organizationName', professionalData.organizationName)
      formData.append('height', personalData.height)
      formData.append('weight', personalData.weight)
      formData.append('bloodGroup', personalData.bloodGroup)
      formData.append('grownUpAt', personalData.grownUpAt)
      formData.append('specialCondition', personalData.specialCondition)
      formData.append('fatherName', familyData.fatherName)
      formData.append('fatherOcupation', familyData.fatherOcupation)
      formData.append('motherName', familyData.motherName)
      formData.append('motherOcupation', familyData.motherOcupation)

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!',
      }).then((result) => {
        if (result.isConfirmed) {
          //insert cvdata
          axios
            .post(`http://localhost:8000/api/post/cv/new`, formData)
            .then((data) => {
              if (data) {
                preferenceData.map((item, index) =>
                  axios
                    .post(`http://localhost:8000/api/post/preference`, {
                      preference: item,
                      cvdata_id: cvData.length + 1,
                    })
                    .catch(({ response }) => {
                      console.log('Preference ', response)
                    }),
                )

                siblingData.map((item, index) =>
                  axios
                    .post(`http://localhost:8000/api/post/sibling`, {
                      name: item.name,
                      ocupation: item.ocupation,
                      details: item.details,
                      cvdata_id: cvData.length + 1,
                    })
                    .catch(({ response }) => {
                      console.log('Sibling ', response)
                    }),
                )

                educationalData.map((item, index) =>
                  axios
                    .post(
                      `http://localhost:8000/api/post/education/qualification`,
                      {
                        instituteName: item.instituteName,
                        passingYear: item.passingYear,
                        cvdata_id: cvData.length + 1,
                      },
                    )
                    .catch(({ response }) => {
                      console.log('Educational ', response)
                    }),
                )

                //submission confirmation
                Swal.fire('Submitted!', 'CV has been submitted.', 'success')
              }
            })
            .catch(({ response }) => {
              console.log('Main CV data response', response)
            })
        }
      })
    } else {
      console.log("Sorry, data isn't fill-up perfectly.")
    }
  }

  useEffect(() => {
    getAllCv()
    return () => {
      //console.log("removing...", e);
    }
  }, [])

  const getAllCv = async () => {
    fetch(`http://localhost:8000/api/get/all/cv`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setCvData(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const exportPdf = () => {
    var doc = new jsPDF('p', 'mm', 'a4')

    var img = new Image()
    img.src = URL.createObjectURL(profileData.image)
    doc.addImage(img, '*', 20, 24, 30, 30)

    doc.setFontSize(16)
    doc.addFont('ComicSansMS', 'Comic Sans', 'normal')
    doc.setFont('Comic Sans')
    doc.setFont(undefined, 'bold')
    doc.text(20, 20, 'Profile Information:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 22, 170, 0.1, 'F') // black line

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 60, 'Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(32, 60, `${profileData.name}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 60, 'Gender:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(125, 60, `${profileData.gender}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 68, 'Phone:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(33, 68, `${profileData.phone}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 68, 'Religion:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(125, 68, `${profileData.religion}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 76, 'Email:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(32, 76, `${profileData.email}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 84, 'Present Address:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(50, 84, `${profileData.presentAddress}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 92, 'Present Division:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(50, 92, `${profileData.divisionPresent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 92, 'Present Dristrict:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(140, 92, `${profileData.dristrictPresent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 100, 'Parmanent Address:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(55, 100, `${profileData.parmanentAddress}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 108, 'Present Division:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(50, 108, `${profileData.divisionParmanent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 108, 'Present Dristrict:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(140, 108, `${profileData.dristrictParmanent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 116, 'Date Of Birth:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(44, 116, `${profileData.age}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 116, 'Limitations Or Species Case:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(160, 116, `${profileData.specialCase}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 124, 'Spouse Preference:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(54, 124, `${profileData.spousePreference}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 124, 'Preference:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(130, 124, `${preferenceData.map((item) => item)}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 132, 'About:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(33, 132, `${profileData.about}`, 'left')

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, 142, 'Personal Information:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 144, 170, 0.1, 'F') // black line

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 152, 'Height:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(33, 152, `${personalData.height}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 152, 'Weight:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(124, 152, `${personalData.weight + '(kg)'}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 160, 'Blood Group:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(44, 160, `${personalData.bloodGroup}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 160, 'Grown Up At:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(134, 160, `${personalData.grownUpAt}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 168, 'Special Condition:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(52, 168, `${personalData.specialCondition}`, 'left')

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, 178, 'Educational Qualification:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 180, 170, 0.1, 'F') // black line

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 188, 'Institute Name - ', 'left')

    let x = 20,
      y = 196

    educationalData.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(
        x,
        y,
        `${item.instituteName + '(' + item.passingYear + ')'}`,
        'left',
      )
      y += 8
    })

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, 228, 'Professional Qualification:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 230, 170, 0.1, 'F') // black line

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 238, 'Designation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(42, 238, `${professionalData.designation}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 238, 'Organization Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(144, 238, `${professionalData.organizationName}`, 'left')

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, 248, 'Family Member:', 'left')

    doc.setDrawColor(255, 0, 0)
    doc.rect(20, 250, 170, 0.1, 'F') // black line

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 258, 'Father Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(43, 258, `${familyData.fatherName}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 258, 'Father Ocupation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(141, 258, `${familyData.fatherOcupation}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 266, 'Mother Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(44, 266, `${familyData.motherName}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 266, 'Mother Ocupation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(142, 266, `${familyData.motherOcupation}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 274, 'Sibling - ', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(
      20,
      280,
      `${siblingData.map((item) => item.name + '(' + item.ocupation + ')')}`,
      'left',
    )

    doc.save(profileData.name + ' Cv.pdf')
  }

  return (
    <div style={{ backgroundColor: '#ededed' }}>
      <MainNav />
      <div className="text_position_3">
        <h1>CV BANK</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      <Container id="hide_top">
        <div className="cv_bank_container">
          <ul>
            <li>
              {data === 'ProfileInformation' || data === 'Preview' ? (
                <button
                  onClick={() => setData('ProfileInformation')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Profile Information
                </button>
              ) : (
                <button
                  onClick={() => setData('ProfileInformation')}
                  className="borderbottomlinehover"
                >
                  Profile Information
                </button>
              )}
            </li>
            <li>
              {data === 'PersonalInformation' || data === 'Preview' ? (
                <button
                  onClick={() => setData('PersonalInformation')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Personal Information
                </button>
              ) : (
                <button
                  onClick={() => setData('PersonalInformation')}
                  className="borderbottomlinehover"
                >
                  Personal Information
                </button>
              )}
            </li>
            <li>
              {data === 'EducationalQulification' || data === 'Preview' ? (
                <button
                  onClick={() => setData('EducationalQulification')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Educational Qualification
                </button>
              ) : (
                <button
                  onClick={() => setData('EducationalQulification')}
                  className="borderbottomlinehover"
                >
                  Educational Qualification
                </button>
              )}
            </li>
            <li>
              {data === 'ProfessionalQualification' || data === 'Preview' ? (
                <button
                  onClick={() => setData('ProfessionalQualification')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Professional Qualification
                </button>
              ) : (
                <button
                  onClick={() => setData('ProfessionalQualification')}
                  className="borderbottomlinehover"
                >
                  Professional Qualification
                </button>
              )}
            </li>
            <li>
              {data === 'FamilyMember' || data === 'Preview' ? (
                <button
                  onClick={() => setData('FamilyMember')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Family Member
                </button>
              ) : (
                <button
                  onClick={() => setData('FamilyMember')}
                  className="borderbottomlinehover"
                >
                  Family Member
                </button>
              )}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="cv_bank_container21">
        <div className="cv_bank_container2">
          {data === 'ProfileInformation' && (
            <ProfileInFormation
              updateProfileData={updateProfileData}
              updatePreferenceData={updatePreferenceData}
            />
          )}
          {data === 'PersonalInformation' && (
            <PersonalInformation updatePersonalData={updatePersonalData} />
          )}
          {data === 'EducationalQulification' && (
            <EducationalQulification
              updateEducationalData={updateEducationalData}
            />
          )}
          {data === 'ProfessionalQualification' && (
            <ProfessionalQualification
              updateProfessionalData={updateProfessionalData}
            />
          )}
          {data === 'FamilyMember' && (
            <FamilyMember
              updateFamilyData={updateFamilyData}
              updateSiblingData={updateSiblingData}
            />
          )}
          {data === 'Preview' && (
            <Preview
              profileData={profileData}
              professionalData={professionalData}
              personalData={personalData}
              familyData={familyData}
              educationalData={educationalData}
              siblingData={siblingData}
              preferenceData={preferenceData}
            />
          )}
        </div>
      </Container>
      <br />
      <Container className="nextbtnposition">
        <Row>
          <Col>
            {data !== 'ProfileInformation' && (
              <button
                className="cv_bankButton_BackNext"
                onClick={() => {
                  data === 'PersonalInformation' &&
                    setData('ProfileInformation')
                  data === 'EducationalQulification' &&
                    setData('PersonalInformation')
                  data === 'ProfessionalQualification' &&
                    setData('EducationalQulification')
                  data === 'FamilyMember' &&
                    setData('ProfessionalQualification')
                  data === 'Preview' && setData('FamilyMember')
                }}
              >
                Go Back
              </button>
            )}
          </Col>
          <Col align="right">
            <div>
              {data !== 'FamilyMember' && data !== 'Preview' && (
                <button className="cv_bankButton_BackNext" onClick={validation}>
                  Next
                </button>
              )}

              {data === 'FamilyMember' && (
                <div>
                  <button
                    className="cv_bankButton_BackNext"
                    onClick={validation}
                  >
                    Preview
                  </button>
                </div>
              )}
              {data === 'Preview' && (
                <div>
                  <button
                    className="cv_bankButton_BackNext"
                    onClick={(event) => {
                      addCV(event)
                    }}
                  >
                    Submit
                  </button>{' '}
                  <button
                    onClick={exportPdf}
                    className="cv_bankButton_BackNext"
                  >
                    Download PDF
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  )
}

export default CVBank
