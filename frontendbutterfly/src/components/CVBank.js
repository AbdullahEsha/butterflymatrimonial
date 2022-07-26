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
      var file = document.getElementById('image2')
      var fileName = file.files[0].name
      var idxDot = fileName.lastIndexOf('.') + 1
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase()
      if (extFile === 'jpg' || extFile === 'jpeg' || extFile === 'png') {
        if (profileData.image === '') {
          document.querySelector('.imageFile').style.border = '1px solid red'
        } else if (file.files[0].size >= 221000) {
          document.querySelector('.imageFile').style.border = '1px solid red'
          document.getElementById('warning').innerHTML =
            'File size max allowed 220kb.'
        } else if (profileData.name === '') {
          document.querySelector('.name').style.border = '1px solid red'
        } else if (profileData.gender === '') {
          document.querySelector('.gender').style.visibility = 'visible'
        } else if (
          profileData.phone === '' ||
          profileData.phone.match(/\d/g).length !== 11
        ) {
          document.querySelector('.phone').style.border = '1px solid red'
        } else if (profileData.religion === '') {
          document.querySelector('.religion').style.borderColor = 'red'
        } else if (profileData.email === '') {
          document.querySelector('.email').style.borderColor = 'red'
        } else if (profileData.age === '') {
          document.querySelector('.age').style.borderColor = 'red'
        } else if (profileData.presentAddress === '') {
          document.querySelector('.presentAddress').style.borderColor = 'red'
        } else if (profileData.divisionPresent === '') {
          document.querySelector('.divisionPresent').style.border =
            '1px solid red'
        } else if (profileData.dristrictPresent === '') {
          document.querySelector('.dristrictPresent').style.borderColor = 'red'
        } else if (profileData.parmanentAddress === '') {
          document.querySelector('.parmanentAddress').style.borderColor = 'red'
        } else if (profileData.divisionParmanent === '') {
          document.querySelector('.divisionParmanent').style.borderColor = 'red'
        } else if (profileData.dristrictParmanent === '') {
          document.querySelector('.dristrictParmanent').style.borderColor =
            'red'
        } else if (profileData.specialCase === '') {
          document.querySelector('.specialCase').style.border = '1px solid red'
        } else if (preferenceData.length <= 0) {
          document.querySelector('.preference').style.border = '1px solid red'
        } else if (profileData.spousePreference === '') {
          document.querySelector('.spousePreference').style.border =
            '1px solid red'
        } else if (profileData.about === '') {
          document.querySelector('.about').style.borderColor = 'red'
        } else {
          setData('PersonalInformation')
        }
      } else {
        document.querySelector('.imageFile').style.border = '1px solid red'
        document.getElementById('warning').innerHTML =
          'Only jpg/jpeg and png files are allowed!'
      }
    } else if (data === 'PersonalInformation') {
      if (personalData.height === '') {
        document.querySelector('.height').style.borderColor = 'red'
      } else if (personalData.weight === '') {
        document.querySelector('.weight').style.borderColor = 'red'
      } else if (personalData.bloodGroup === '') {
        document.querySelector('.bloodGroup').style.borderColor = 'red'
      } else if (personalData.grownUpAt === '') {
        document.querySelector('.grownUpAt').style.borderColor = 'red'
      } else if (personalData.specialCondition === '') {
        document.querySelector('.specialCondition').style.borderColor = 'red'
      } else {
        setData('EducationalQulification')
      }
    } else if (data === 'EducationalQulification') {
      if (educationalData.map((item) => item.levelOfEducation)[0] === '') {
        document.querySelector('.levelOfEducation').style.borderColor = 'red'
      } else if (educationalData.map((item) => item.group)[0] === '') {
        document.querySelector('.group_0').style.borderColor = 'red'
      } else if (educationalData.map((item) => item.instituteName)[0] === '') {
        document.querySelector('.instituteName').style.borderColor = 'red'
      } else if (
        educationalData.map((item) => item.instituteLocation)[0] === ''
      ) {
        document.querySelector('.instituteLocation').style.borderColor = 'red'
      } else if (educationalData.map((item) => item.passingYear)[0] === '') {
        document.querySelector('.passingYear').style.borderColor = 'red'
      } else {
        setData('ProfessionalQualification')
      }
    } else if (data === 'ProfessionalQualification') {
      if (professionalData.map((item) => item.designation)[0] === '') {
        document.querySelector('.designation').style.borderColor = 'red'
      } else if (
        professionalData.map((item) => item.organizationName)[0] === ''
      ) {
        document.querySelector('.organizationName').style.borderColor = 'red'
      } else if (
        professionalData.map((item) => item.com_department)[0] === ''
      ) {
        document.querySelector('.com_department').style.borderColor = 'red'
      } else if (professionalData.map((item) => item.com_location)[0] === '') {
        document.querySelector('.com_location').style.borderColor = 'red'
      } else if (
        professionalData.map((item) => item.from_employment)[0] === ''
      ) {
        document.querySelector('.from_employment').style.borderColor = 'red'
      } else if (professionalData.map((item) => item.to_employment)[0] === '') {
        document.querySelector('.to_employment').style.borderColor = 'red'
      } else if (professionalData.map((item) => item.com_reference)[0] === '') {
        document.querySelector('.com_reference').style.borderColor = 'red'
      } else {
        setData('FamilyMember')
      }
    } else if (data === 'FamilyMember') {
      if (familyData.fatherName === '') {
        document.querySelector('.fatherName').style.borderColor = 'red'
      } else if (familyData.fatherOcupation === '') {
        document.querySelector('.fatherOcupation').style.borderColor = 'red'
      } else if (familyData.motherName === '') {
        document.querySelector('.motherName').style.borderColor = 'red'
      } else if (familyData.motherOcupation === '') {
        document.querySelector('.motherOcupation').style.borderColor = 'red'
      } else if (siblingData.map((item) => item.name)[0] === '') {
        document.querySelector('.sibname').style.borderColor = 'red'
      } else if (siblingData.map((item) => item.ocupation)[0] === '') {
        document.querySelector('.sibocupation').style.borderColor = 'red'
      } else if (siblingData.map((item) => item.details)[0] === '') {
        document.querySelector('.sibdetails').style.borderColor = 'red'
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
                      levelOfEducation: item.levelOfEducation,
                      instituteLocation: item.instituteLocation,
                      group: item.group,
                      cvdata_id: cvData.length + 1,
                    },
                  )
                  .catch(({ response }) => {
                    console.log('Educational ', response)
                  }),
              )
              professionalData.map((item, index) =>
                axios
                  .post(`http://localhost:8000/api/post/professional`, {
                    designation: item.designation,
                    organizationName: item.organizationName,
                    com_department: item.com_department,
                    com_location: item.com_location,
                    from_employment: item.from_employment,
                    to_employment: item.to_employment,
                    com_reference: item.com_reference,
                    cvdata_id: cvData.length + 1,
                  })
                  .catch(({ response }) => {
                    console.log('Educational ', response)
                  }),
              )
              //submission confirmation
              Swal.fire({ icon: 'success', text: data.message })
            }
          })
          .catch(({ response }) => {
            console.log('Main CV data response', response)
          })
      }
    })
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
    doc.text(31, 60, `${profileData.name}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 60, 'Gender:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(123, 60, `${profileData.gender}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 68, 'Phone:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(31, 68, `${profileData.phone}`, 'left')

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
    doc.text(31, 76, `${profileData.email}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 84, 'Present Address:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(47, 84, `${profileData.presentAddress}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 92, 'Present Division:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(47, 92, `${profileData.divisionPresent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 92, 'Present Dristrict:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(137, 92, `${profileData.dristrictPresent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 100, 'Permanent Address:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(52, 100, `${profileData.parmanentAddress}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 108, 'Permanent Division:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(52, 108, `${profileData.divisionParmanent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 108, 'Permanent Dristrict:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(142, 108, `${profileData.dristrictParmanent}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 116, 'Date Of Birth:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(42, 116, `${profileData.age}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 116, 'Limitations Or Species Case:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(155, 116, `${profileData.specialCase}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 124, 'Spouse Preference:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(49, 124, `${profileData.spousePreference}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, 124, 'Preference:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(127.5, 124, `${preferenceData.map((item) => item)}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, 132, 'About:', 'left')

    var y = 132

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    var text_width = doc.getTextWidth(profileData.about)
    var splitTitle = doc.splitTextToSize(profileData.about, 170)
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25 + 2

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Personal Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Height:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(32, y, `${personalData.height}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, y, 'Weight:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(122, y, `${personalData.weight + '(kg)'}`, 'left')

    y = y + 8
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Blood Group:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(41.5, y, `${personalData.bloodGroup}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(110, y, 'Grown Up At:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(132, y, `${personalData.grownUpAt}`, 'left')

    y = y + 8
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Special Condition:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    text_width = doc.getTextWidth(personalData.specialCondition)
    splitTitle = doc.splitTextToSize(personalData.specialCondition, 170)
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25 + 8

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Educational Qualification:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    let x = 20
    y = y + 5

    educationalData.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Institute Name:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(
        x + 24,
        y,
        `${item.instituteName + '(' + item.passingYear + ')'}`,
        'left',
      )

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Concentration/Major/Group:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 135, y, `${item.group}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Level of Education:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 30, y, `${item.levelOfEducation}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Institute Location:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 118.5, y, `${item.instituteLocation}`, 'left')

      y += 8
    })

    if (y >= 260) {
      doc.addPage()
      y = 20 // Restart height position
    }

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Professional Qualification:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    professionalData.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Designation:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 19, y, `${item.designation}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Name:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 116, y, `${item.organizationName}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Department:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 20, y, `${item.com_department}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Location:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 120.5, y, `${item.com_location}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Employment Period:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(
        x + 32,
        y,
        `${item.from_employment} to ${item.to_employment}`,
        'left',
      )

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Reference:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.com_reference)
      splitTitle = doc.splitTextToSize(item.com_reference, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25
      //doc.text(x, y, `${item.com_reference}`, 'left')

      y += 8
    })

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Family Member:', 'left')

    y += 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Father Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 22, y, `${familyData.fatherName}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Father Ocupation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 119, y, `${familyData.fatherOcupation}`, 'left')

    y = y + 8
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Mother Name:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 23, y, `${familyData.motherName}`, 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Mother Ocupation:', 'left')

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    doc.text(x + 120, y, `${familyData.motherOcupation}`, 'left')

    y = y + 8
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Sibling`s:', 'left')

    y = y + 5
    siblingData.forEach((item, index) => {
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Name:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 10.5, y, `${item.name}`, 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Ocupation:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      doc.text(x + 107.5, y, `${item.ocupation}`, 'left')

      y = y + 8
      doc.setFontSize(10)
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Details:', 'left')

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.details)
      splitTitle = doc.splitTextToSize(item.details, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25

      y += 8
    })

    // doc.setFontSize(10)
    // doc.setFont(undefined, 'bold')
    // doc.text(20, 274, 'Sibling - ', 'left')

    // doc.setFontSize(10)
    // doc.setFont(undefined, 'normal')
    // doc.text(
    //   20,
    //   280,
    //   `${siblingData.map((item) => item.name + '(' + item.ocupation + ')')}`,
    //   'left',
    // )

    doc.save(profileData.name + ' Cv.pdf')
  }

  // console.log('profileData', profileData)

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
