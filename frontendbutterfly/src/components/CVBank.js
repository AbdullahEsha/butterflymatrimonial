import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Qulification from './CvBank/Qualification'
import FamilyMember from './CvBank/FamilyMember'
import PreferenceInformation from './CvBank/PreferenceInformation'
import ProfileInFormation from './CvBank/ProfileInformation'
import { useDispatch } from 'react-redux'
import { addCvData } from '../actions/index'
import axios from 'axios'
import Preview from './CvBank/Preview'
import Footer from './Footer'
import MainNav from './MainNav'
import Swal from 'sweetalert2'
import jsPDF from 'jspdf'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const CVBank = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState('ProfileInformation')
  const [cvMaxId, setCvMaxId] = useState()
  const [profileData, setProfileData] = useState({})
  const [professionalData, setProfessionalData] = useState({})
  const [familyData, setFamilyData] = useState({})
  const [educationalData, setEducationalData] = useState({})
  const [siblingData, setSiblingData] = useState({})
  const [preferenceInfoData, setPreferenceInfoData] = useState({})
  const [galleryData, setGalleryData] = useState({})

  const validation = () => {
    if (data === 'ProfileInformation') {
      // var file = document.getElementById('image2')
      // var fileName = file.files[0].name
      // var idxDot = fileName.lastIndexOf('.') + 1
      // var extFile = fileName.substr(idxDot, fileName.length).toLowerCase()
      if (profileData.image === undefined || profileData.image === '') {
        document.querySelector('.imageFile').style.border = '1px solid red'
      } else if (profileData.name === undefined || profileData.name === '') {
        document.querySelector('.name').style.borderColor = 'red'
      } else if (
        profileData.gender === undefined ||
        profileData.gender === ''
      ) {
        document.querySelector('.gender').style.display = 'block'
      } else if (
        profileData.phone === undefined ||
        profileData.phone.match(/\d/g).length !== 11
      ) {
        document.querySelector('.phone').style.border = '1px solid red'
      } else if (profileData.email === undefined || profileData.email === '') {
        document.querySelector('.email').style.borderColor = 'red'
      } else if (profileData.dob === undefined || profileData.age === '') {
        document.querySelector('.dob').style.borderColor = 'red'
      } else if (
        profileData.height === undefined ||
        profileData.height === ''
      ) {
        document.querySelector('.height').style.borderColor = 'red'
      } else if (
        profileData.weight === undefined ||
        profileData.weight === ''
      ) {
        document.querySelector('.weight').style.borderColor = 'red'
      } else if (
        profileData.bloodGroup === undefined ||
        profileData.bloodGroup === ''
      ) {
        document.querySelector('.bloodGroup').style.borderColor = 'red'
      } else if (
        profileData.religion === undefined ||
        profileData.religion === ''
      ) {
        document.querySelector('.religion').style.borderColor = 'red'
      } else if (
        profileData.complexion === undefined ||
        profileData.complexion === ''
      ) {
        document.querySelector('.complexion').style.borderColor = 'red'
      } else if (
        profileData.maritalStatus === undefined ||
        profileData.maritalStatus === ''
      ) {
        document.querySelector('.maritalStatus').style.borderColor = 'red'
      } else if (
        profileData.hometown === undefined ||
        profileData.hometown === ''
      ) {
        document.querySelector('.hometown').style.borderColor = 'red'
      } else if (
        profileData.presentAddress === undefined ||
        profileData.presentAddress === ''
      ) {
        document.querySelector('.presentAddress').style.borderColor = 'red'
      } else if (
        profileData.grownUpAt === undefined ||
        profileData.grownUpAt === ''
      ) {
        document.querySelector('.grownUpAt').style.borderColor = 'red'
      } else if (
        profileData.citizenship === undefined ||
        profileData.citizenship === ''
      ) {
        document.querySelector(
          '.citizenship .css-1bi0jn-control',
        ).style.borderColor = 'red'
      } else if (
        profileData.familyStatus === undefined ||
        profileData.familyStatus === ''
      ) {
        document.querySelector('.familyStatus').style.borderColor = 'red'
      } else if (
        profileData.annualIncome === undefined ||
        profileData.annualIncome === ''
      ) {
        document.querySelector('.annualIncome').style.borderColor = 'red'
      } else if (profileData.hobby === undefined || profileData.hobby === '') {
        document.querySelector('.hobby .css-1bi0jn-control').style.borderColor =
          'red'
      } else if (
        profileData.physicalStatus === undefined ||
        profileData.physicalStatus === ''
      ) {
        document.querySelector('.physicalStatus').style.borderColor = 'red'
      } else if (
        profileData.specialCase === undefined ||
        profileData.specialCase === ''
      ) {
        document.querySelector('.specialCase').style.borderColor = 'red'
      } else if (profileData.about === undefined || profileData.about === '') {
        document.querySelector('.about').style.borderColor = 'red'
      } else if (galleryData.imageFill[0] === undefined) {
        document.querySelector('.fileContainer').style.borderColor = 'red'
      } else {
        setData('Qulification')
      }
    } else if (data === 'Qulification') {
      educationalData.forEach((item, index) => {
        if (
          item.levelOfEducation === undefined ||
          item.levelOfEducation === ''
        ) {
          document.querySelector('.levelOfEducation').style.borderColor = 'red'
        } else if (item.group === undefined || item.group === '') {
          document.querySelector(
            `.group_${index} .css-1bi0jn-control`,
          ).style.borderColor = 'red'
        } else if (
          item.instituteName === undefined ||
          item.instituteName === ''
        ) {
          document.querySelector('.instituteName').style.borderColor = 'red'
        } else if (item.passingYear === undefined || item.passingYear === '') {
          document.querySelector('.passingYear').style.borderColor = 'red'
        }
      })
      professionalData.forEach((item) => {
        if (item.companyName === undefined || item.companyName === '') {
          document.querySelector('.companyName').style.borderColor = 'red'
        } else if (item.designation === undefined || item.designation === '') {
          document.querySelector('.designation').style.borderColor = 'red'
        } else if (
          item.com_location === undefined ||
          item.com_location === ''
        ) {
          document.querySelector('.com_location').style.borderColor = 'red'
        } else if (
          item.from_employment === undefined ||
          item.from_employment === ''
        ) {
          document.querySelector('.from_employment').style.borderColor = 'red'
        } else if (
          item.to_employment === undefined ||
          item.to_employment === ''
        ) {
          document.querySelector('.to_employment').style.borderColor = 'red'
        } else {
          setData('FamilyMember')
        }
      })
    } else if (data === 'FamilyMember') {
      if (familyData.fatherName === undefined || familyData.fatherName === '') {
        document.querySelector('.fatherName').style.borderColor = 'red'
      } else if (
        familyData.fatherOccupation === undefined ||
        familyData.fatherOccupation === ''
      ) {
        document.querySelector('.fatherOccupation').style.borderColor = 'red'
      } else if (
        familyData.fatherDetails === undefined ||
        familyData.fatherDetails === ''
      ) {
        document.querySelector('.fatherDetails').style.borderColor = 'red'
      } else if (
        familyData.motherName === undefined ||
        familyData.motherName === ''
      ) {
        document.querySelector('.motherName').style.borderColor = 'red'
      } else if (
        familyData.motherOccupation === undefined ||
        familyData.motherOccupation === ''
      ) {
        document.querySelector('.motherOccupation').style.borderColor = 'red'
      } else if (
        familyData.motherDetails === undefined ||
        familyData.motherDetails === ''
      ) {
        document.querySelector('.motherDetails').style.borderColor = 'red'
      } else {
        siblingData.forEach((item) => {
          if (item.name === undefined || item.name === '') {
            document.querySelector('.sibname').style.borderColor = 'red'
          } else if (item.occupation === undefined || item.occupation === '') {
            document.querySelector('.sibOccupation').style.borderColor = 'red'
          } else if (item.details === undefined || item.details === '') {
            document.querySelector('.sibdetails').style.borderColor = 'red'
          } else {
            setData('PreferenceInformation')
          }
        })
      }
    } else if (data === 'PreferenceInformation') {
      if (
        preferenceInfoData.ageMinimum === undefined ||
        preferenceInfoData.ageMinimum === ''
      ) {
        document.querySelector('.ageMinimum').style.borderColor = 'red'
      } else if (
        preferenceInfoData.heightMinimum === undefined ||
        preferenceInfoData.heightMinimum === ''
      ) {
        document.querySelector('.heightMinimum').style.borderColor = 'red'
      } else if (
        preferenceInfoData.maritalStatusPreference === undefined ||
        preferenceInfoData.maritalStatusPreference === ''
      ) {
        document.querySelector(
          '.maritalStatusPreference .css-1bi0jn-control',
        ).style.borderColor = 'red'
      } else if (
        preferenceInfoData.complexionPreference === undefined ||
        preferenceInfoData.complexionPreference === ''
      ) {
        document.querySelector('.complexionPreference').style.borderColor =
          'red'
      } else if (
        preferenceInfoData.occupationPreference === undefined ||
        preferenceInfoData.occupationPreference === ''
      ) {
        document.querySelector('.occupationPreference').style.borderColor =
          'red'
      } else if (
        preferenceInfoData.educationPreference === undefined ||
        preferenceInfoData.educationPreference === ''
      ) {
        document.querySelector('.educationPreference').style.borderColor = 'red'
      } else if (
        preferenceInfoData.location === undefined ||
        preferenceInfoData.location === ''
      ) {
        document.querySelector('.location').style.borderColor = 'red'
      } else if (
        preferenceInfoData.religionPreference === undefined ||
        preferenceInfoData.religionPreference === ''
      ) {
        document.querySelector('.religionPreference').style.borderColor = 'red'
      } else if (
        preferenceInfoData.preferenceDetails === undefined ||
        preferenceInfoData.preferenceDetails === ''
      ) {
        document.querySelector('.preferenceDetails').style.borderColor = 'red'
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
  const updatePreferenceInfoData = (c) => {
    setPreferenceInfoData(c)
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

  const updateGalleryData = (h) => {
    setGalleryData(h)
  }

  // console.log(preferenceInfoData)
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

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(20, 60, 'Name:', 'left')

    doc.setFontSize(11)
    doc.setFont(undefined, 'normal')
    doc.text(32, 60, `${profileData.name}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 60, 'Gender:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(125, 60, `${profileData.gender}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 68, 'Phone:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(32, 68, `${profileData.phone}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 68, 'Religion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(126, 68, `${profileData.religion}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 76, 'Email:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(32, 76, `${profileData.email}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 84, 'Present Address:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(49, 84, `${profileData.presentAddress}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 92, 'Present Division:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(49, 92, `${profileData.divisionPresent}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 92, 'Present Dristrict:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(139, 92, `${profileData.dristrictPresent}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 100, 'Permanent Address:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(54, 100, `${profileData.parmanentAddress}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 108, 'Permanent Division:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(54, 108, `${profileData.divisionParmanent}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 108, 'Permanent Dristrict:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(145, 108, `${profileData.dristrictParmanent}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 116, 'Date Of Birth:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(44, 116, `${profileData.age}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 116, 'Limitations Or Species Case:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(158.5, 116, `${profileData.specialCase}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 124, 'Spouse Preference:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(52, 124, `${profileData.spousePreference}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 124, 'Preference:', 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 132, 'About:', 'left')

    var y = 132

    doc.setFont(undefined, 'normal')
    var text_width = doc.getTextWidth(profileData.about)
    var splitTitle = doc.splitTextToSize(profileData.about, 170)
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25

    y = y + 8
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Personal Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Height:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(33, y, `${profileData.height}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, y, 'Weight:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(124, y, `${profileData.weight + '(kg)'}`, 'left')

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Blood Group:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(43.5, y, `${profileData.bloodGroup}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, y, 'Grown Up At:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(134, y, `${profileData.grownUpAt}`, 'left')

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Special Condition:', 'left')

    doc.setFont(undefined, 'normal')
    text_width = doc.getTextWidth(profileData.specialCondition)
    splitTitle = doc.splitTextToSize(profileData.specialCondition, 170)
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25

    y = y + 12
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Educational Qualification:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    let x = 20
    y = y + 5

    doc.setFontSize(10)
    educationalData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Institute Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(
        x + 24,
        y,
        `${item.instituteName + '(' + item.passingYear + ')'}`,
        'left',
      )

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Concentration/Major/Group:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 135, y, `${item.group}`, 'left')

      y = y + 8

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Level of Education:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 30, y, `${item.levelOfEducation}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Institute Location:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 118.5, y, `${item.instituteLocation}`, 'left')

      y += 8
    })

    if (y >= 260) {
      doc.addPage()
      y = 20 // Restart height position
    } else {
      y = y + 2
    }

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Professional Qualification:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(11)
    professionalData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Designation:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 21.5, y, `${item.designation}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 118.5, y, `${item.organizationName}`, 'left')

      y = y + 8

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Department:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 22, y, `${item.com_department}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Location:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 123.5, y, `${item.com_location}`, 'left')

      y = y + 8

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Employment Period:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(
        x + 35,
        y,
        `${item.from_employment} to ${item.to_employment}`,
        'left',
      )

      y = y + 8

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Reference:', 'left')

      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.com_reference)
      splitTitle = doc.splitTextToSize(item.com_reference, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25

      y += 8
    })

    y += 4
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Family Member:', 'left')

    y += 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 5
    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Father Name:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 24, y, `${familyData.fatherName}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Father Ocupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 121, y, `${familyData.fatherOcupation}`, 'left')

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Mother Name:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 25, y, `${familyData.motherName}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Mother Ocupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 122.5, y, `${familyData.motherOcupation}`, 'left')

    y = y + 8
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Siblings:', 'left')

    y = y + 5
    siblingData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 12.5, y, `${item.name}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Ocupation:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 111, y, `${item.ocupation}`, 'left')

      y = y + 8

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Details:', 'left')

      doc.setFont(undefined, 'normal')
      text_width = doc.getTextWidth(item.details)
      splitTitle = doc.splitTextToSize(item.details, 170)
      doc.text(x, y + 5, splitTitle, 'left')
      y = y + text_width / 25

      y += 8
    })

    doc.save(profileData.name + ' Cv.pdf')
  }

  const addCV = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', profileData.image)
    formData.append('name', profileData.name)
    formData.append('gender', profileData.gender)
    formData.append('phone', profileData.phone)
    formData.append('email', profileData.email)
    formData.append('dob', profileData.dob)
    formData.append('height', profileData.height)
    formData.append('weight', profileData.weight)
    formData.append('bloodGroup', profileData.bloodGroup)
    formData.append('religion', profileData.religion)
    formData.append('complexion', profileData.complexion)
    formData.append('maritalStatus', profileData.maritalStatus)
    formData.append('hometown', profileData.hometown)
    formData.append('presentAddress', profileData.presentAddress)
    formData.append('grownUpAt', profileData.grownUpAt)
    formData.append('citizenship', profileData.citizenship)
    formData.append('familyStatus', profileData.familyStatus)
    formData.append('annualIncome', profileData.annualIncome)
    formData.append('hobby', profileData.hobby)
    formData.append('physicalStatus', profileData.physicalStatus)
    formData.append('specialCase', profileData.specialCase)
    formData.append('about', profileData.about)
    formData.append('fatherName', familyData.fatherName)
    formData.append('fatherOccupation', familyData.fatherOccupation)
    formData.append('fatherDetails', familyData.fatherDetails)
    formData.append('motherName', familyData.motherName)
    formData.append('motherOccupation', familyData.motherOccupation)
    formData.append('motherDetails', familyData.motherDetails)

    // maritalStatusPreference
    //
    // occupationPreference
    //
    //
    //
    //

    formData.append('ageMinimum', preferenceInfoData.ageMinimum)
    formData.append('ageMaximum', preferenceInfoData.ageMaximum)
    formData.append('heightMinimum', preferenceInfoData.heightMinimum)
    formData.append('heightMaximum', preferenceInfoData.heightMaximum)
    formData.append(
      'maritalStatusPreference',
      preferenceInfoData.maritalStatusPreference,
    )
    formData.append(
      'complexionPreference',
      preferenceInfoData.complexionPreference,
    )
    formData.append(
      'occupationPreference',
      preferenceInfoData.occupationPreference,
    )
    formData.append(
      'educationPreference',
      preferenceInfoData.educationPreference,
    )
    formData.append('location', preferenceInfoData.location)
    formData.append('religionPreference', preferenceInfoData.religionPreference)
    formData.append('preferenceDetails', preferenceInfoData.preferenceDetails)

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
        // insert cvdata
        axios
          .post(
            `https://api.butterflymatrimonial.com/api/post/cv/new`,
            formData,
          )
          .then((data) => {
            if (data.data.message === 'Your CV has just been stored.') {
              siblingData.map((item) =>
                axios
                  .post(
                    `https://api.butterflymatrimonial.com/api/post/sibling`,
                    {
                      name: item.name,
                      ocupation: item.ocupation,
                      details: item.details,
                      cvdata_id: cvMaxId + 1,
                    },
                  )
                  .then((data) => {
                    if (
                      data.data.message ===
                      'Your sibling data has just been stored.'
                    ) {
                      educationalData.map((item) =>
                        axios
                          .post(
                            `https://api.butterflymatrimonial.com/api/post/education/qualification`,
                            {
                              instituteName: item.instituteName,
                              passingYear: item.passingYear,
                              levelOfEducation: item.levelOfEducation,
                              instituteLocation: item.instituteLocation,
                              group: item.group,
                              cvdata_id: cvMaxId + 1,
                            },
                          )
                          .then((data) => {
                            if (
                              data.data.message ===
                              'Education qualification data has just been stored.'
                            ) {
                              professionalData.map((item) =>
                                axios
                                  .post(
                                    `https://api.butterflymatrimonial.com/api/post/professional`,
                                    {
                                      designation: item.designation,
                                      organizationName: item.organizationName,
                                      com_department: item.com_department,
                                      com_location: item.com_location,
                                      from_employment: item.from_employment,
                                      to_employment: item.to_employment,
                                      com_reference: item.com_reference,
                                      cvdata_id: cvMaxId + 1,
                                    },
                                  )
                                  .then((data) => {
                                    if (
                                      data.data.message ===
                                      'Your professional data has just been stored.'
                                    ) {
                                      galleryData.imageFill.forEach((item) => {
                                        const formData2 = new FormData()
                                        formData2.append('imageFill', item)
                                        formData2.append(
                                          'cvdata_id',
                                          cvMaxId + 1,
                                        )
                                        axios
                                          .post(
                                            `https://api.butterflymatrimonial.com/api/post/gallery-image`,
                                            formData2,
                                          )
                                          .catch(({ response }) => {
                                            console.log('galleryData', response)
                                          })
                                      })
                                    }
                                  })
                                  .catch(({ response }) => {
                                    console.log('professionalData', response)
                                  }),
                              )
                            }
                          })
                          .catch(({ response }) => {
                            console.log('Educational ', response)
                          }),
                      )
                    }
                  })
                  .catch(({ response }) => {
                    console.log('Sibling ', response)
                  }),
              )

              // exportPdf()
              //submission confirmation
              Swal.fire({
                title: `Success.`,
                icon: 'success',
                text: data.data.message,
                footer: `<a href="https://butterflymatrimonial.com/butterfly-cv-bank/${
                  cvMaxId + 1
                }">Please check Your CV url.</a>`,
              })
            } else {
              Swal.fire({
                title: 'Oops!',
                icon: 'error',
                text: data.data.message,
              })
            }
          })
          .catch(({ response }) => {
            Swal.fire({
              title: 'Oops!',
              icon: 'error',
              text: 'Something went wrong!',
            })
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
    fetch(`https://api.butterflymatrimonial.com/api/get/getMaxId`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setCvMaxId(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }
  return (
    <div style={{ backgroundColor: '#ededed' }}>
      <MainNav />
      <div className="cvbank_text_position_1">
        <h1>CV BANK</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, working for complete
          match-making for selective profiles, an app for self-driven matching
          service, pre-post marriage counselling and many more.
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
              {data === 'Qulification' || data === 'Preview' ? (
                <button
                  onClick={() => setData('Qulification')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Education & Profession
                </button>
              ) : (
                <button
                  onClick={() => setData('Qulification')}
                  className="borderbottomlinehover"
                >
                  Education & Profession
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
                  Family Information
                </button>
              ) : (
                <button
                  onClick={() => setData('FamilyMember')}
                  className="borderbottomlinehover"
                >
                  Family Information
                </button>
              )}
            </li>
            <li>
              {data === 'PreferenceInformation' || data === 'Preview' ? (
                <button
                  onClick={() => setData('PreferenceInformation')}
                  id="borderbottomline"
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    color="white"
                    style={{ marginBottom: '4px' }}
                  />{' '}
                  Preference Information
                </button>
              ) : (
                <button
                  onClick={() => setData('PreferenceInformation')}
                  className="borderbottomlinehover"
                >
                  Preference Information
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
              updateGalleryData={updateGalleryData}
            />
          )}
          {data === 'Qulification' && (
            <Qulification
              updateEducationalData={updateEducationalData}
              updateProfessionalData={updateProfessionalData}
            />
          )}
          {data === 'FamilyMember' && (
            <FamilyMember
              updateFamilyData={updateFamilyData}
              updateSiblingData={updateSiblingData}
            />
          )}
          {data === 'PreferenceInformation' && (
            <PreferenceInformation
              updatePreferenceInfoData={updatePreferenceInfoData}
            />
          )}
          {data === 'Preview' && (
            <Preview
              profileData={profileData}
              professionalData={professionalData}
              familyData={familyData}
              educationalData={educationalData}
              siblingData={siblingData}
              preferenceInfoData={preferenceInfoData}
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
                  data === 'Qulification' && setData('ProfileInformation')
                  data === 'ProfessionalQualification' &&
                    setData('Qulification')
                  data === 'FamilyMember' &&
                    setData('ProfessionalQualification')
                  data === 'PreferenceInformation' && setData('FamilyMember')
                  data === 'Preview' && setData('PreferenceInformation')
                }}
              >
                Go Back
              </button>
            )}
          </Col>
          <Col align="right">
            <div>
              {data !== 'PreferenceInformation' && data !== 'Preview' && (
                <button
                  className="cv_bankButton_BackNext"
                  onClick={() => {
                    validation()
                    dispatch(
                      addCvData(
                        profileData,
                        professionalData,
                        familyData,
                        educationalData,
                        siblingData,
                        preferenceInfoData,
                      ),
                    )
                  }}
                >
                  Next
                </button>
              )}
              {data === 'PreferenceInformation' && (
                <div>
                  <button
                    className="cv_bankButton_BackNext"
                    onClick={() => {
                      validation()
                      dispatch(
                        addCvData(
                          profileData,
                          professionalData,
                          familyData,
                          educationalData,
                          siblingData,
                          preferenceInfoData,
                        ),
                      )
                    }}
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
