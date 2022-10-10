import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Qualification from './CvBank/Qualification'
import FamilyMember from './CvBank/FamilyMember'
import PreferenceInformation from './CvBank/PreferenceInformation'
import ProfileInFormation from './CvBank/ProfileInformation'
import { useDispatch } from 'react-redux'
import { addCvData, initCvData } from '../actions/index'
import axios from 'axios'
import Preview from './CvBank/Preview'
import Footer from './Footer'
import MainNav from './MainNav'
import Swal from 'sweetalert2'
import jsPDF from 'jspdf'
import watermark from '../asset/image/butterflyWater.png'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import useWindowDimensions from './useWindowDimensions'

const CVBank = () => {
  const { height, width } = useWindowDimensions()
  const dispatch = useDispatch()
  const [data, setData] = useState('ProfileInformation')
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
        window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
      } else if (profileData.name === undefined || profileData.name === '') {
        document.querySelector('.name').style.borderColor = 'red'
        window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
      } else if (
        profileData.gender === undefined ||
        profileData.gender === ''
      ) {
        document.querySelector('.gender').style.display = 'block'
        window.scrollTo({ top: 380, left: 0, behavior: 'smooth' })
      } else if (
        profileData.phone === undefined ||
        profileData.phone.match(/\d/g).length !== 11
      ) {
        document.querySelector('.phone').style.border = '1px solid red'
        window.scrollTo({ top: 530, left: 0, behavior: 'smooth' })
      } else if (profileData.email === undefined || profileData.email === '') {
        document.querySelector('.email').style.borderColor = 'red'
        window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
      } else if (profileData.dob === undefined || profileData.age === '') {
        document.querySelector('.dob').style.borderColor = 'red'
        window.scrollTo({ top: 550, left: 0, behavior: 'smooth' })
      } else if (
        profileData.height === undefined ||
        profileData.height === ''
      ) {
        document.querySelector('.height').style.borderColor = 'red'
        window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
      } else if (
        profileData.weight === undefined ||
        profileData.weight === ''
      ) {
        document.querySelector('.weight').style.borderColor = 'red'
        window.scrollTo({ top: 750, left: 0, behavior: 'smooth' })
      } else if (
        profileData.bloodGroup === undefined ||
        profileData.bloodGroup === ''
      ) {
        document.querySelector('.bloodGroup').style.borderColor = 'red'
        window.scrollTo({ top: 800, left: 0, behavior: 'smooth' })
      } else if (
        profileData.religion === undefined ||
        profileData.religion === ''
      ) {
        document.querySelector('.religion').style.borderColor = 'red'
        window.scrollTo({ top: 900, left: 0, behavior: 'smooth' })
      } else if (
        profileData.complexion === undefined ||
        profileData.complexion === ''
      ) {
        document.querySelector('.complexion').style.borderColor = 'red'
        window.scrollTo({ top: 1050, left: 0, behavior: 'smooth' })
      } else if (
        profileData.maritalStatus === undefined ||
        profileData.maritalStatus === ''
      ) {
        document.querySelector('.maritalStatus').style.borderColor = 'red'
        window.scrollTo({ top: 1050, left: 0, behavior: 'smooth' })
      } else if (
        profileData.hometown === undefined ||
        profileData.hometown === ''
      ) {
        document.querySelector('.hometown').style.borderColor = 'red'
        window.scrollTo({ top: 1150, left: 0, behavior: 'smooth' })
      } else if (
        profileData.presentAddress === undefined ||
        profileData.presentAddress === ''
      ) {
        document.querySelector('.presentAddress').style.borderColor = 'red'
        window.scrollTo({ top: 1150, left: 0, behavior: 'smooth' })
      } else if (
        profileData.grownUpAt === undefined ||
        profileData.grownUpAt === ''
      ) {
        document.querySelector('.grownUpAt').style.borderColor = 'red'
        window.scrollTo({ top: 1250, left: 0, behavior: 'smooth' })
      } else if (
        profileData.citizenship === undefined ||
        profileData.citizenship === ''
      ) {
        document.querySelector(
          '.citizenship .css-1bi0jn-control',
        ).style.borderColor = 'red'
        window.scrollTo({ top: 1350, left: 0, behavior: 'smooth' })
      } else if (
        profileData.familyStatus === undefined ||
        profileData.familyStatus === ''
      ) {
        document.querySelector('.familyStatus').style.borderColor = 'red'
        window.scrollTo({ top: 1450, left: 0, behavior: 'smooth' })
      } else if (
        profileData.annualIncome === undefined ||
        profileData.annualIncome === ''
      ) {
        document.querySelector('.annualIncome').style.borderColor = 'red'
        window.scrollTo({ top: 1480, left: 0, behavior: 'smooth' })
      } else if (profileData.hobby === undefined || profileData.hobby === '') {
        document.querySelector('.hobby .css-1bi0jn-control').style.borderColor =
          'red'
        window.scrollTo({ top: 1570, left: 0, behavior: 'smooth' })
      } else if (
        profileData.physicalStatus === undefined ||
        profileData.physicalStatus === ''
      ) {
        document.querySelector('.physicalStatus').style.borderColor = 'red'
        width < 767
          ? window.scrollTo({ top: 1900, left: 0, behavior: 'smooth' })
          : window.scrollTo({ top: 1400, left: 0, behavior: 'smooth' })
      } else if (galleryData.imageFill[0] === undefined) {
        document.querySelector('.fileContainer').style.borderColor = 'red'
        width < 767
          ? window.scrollTo({ top: 2500, left: 0, behavior: 'smooth' })
          : window.scrollTo({ top: 1400, left: 0, behavior: 'smooth' })
      } else {
        setData('Qualification')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
    } else if (data === 'Qualification') {
      educationalData.forEach((item, index) => {
        if (
          item.levelOfEducation === undefined ||
          item.levelOfEducation === ''
        ) {
          document.querySelector('.levelOfEducation').style.borderColor = 'red'
          window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
        } else if (item.group === undefined || item.group === '') {
          document.querySelector(
            `.group_${index} .css-1bi0jn-control`,
          ).style.borderColor = 'red'
          window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
        } else if (
          item.instituteName === undefined ||
          item.instituteName === ''
        ) {
          document.querySelector('.instituteName').style.borderColor = 'red'
          window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
        } else if (item.passingYear === undefined || item.passingYear === '') {
          document.querySelector('.passingYear').style.borderColor = 'red'
          window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
        }
      })
      professionalData.forEach((item) => {
        if (item.companyName === undefined || item.companyName === '') {
          document.querySelector('.companyName').style.borderColor = 'red'
          window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
        } else if (item.designation === undefined || item.designation === '') {
          document.querySelector('.designation').style.borderColor = 'red'
          window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
        } else if (
          item.com_location === undefined ||
          item.com_location === ''
        ) {
          document.querySelector('.com_location').style.borderColor = 'red'
          window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
        } else if (
          item.from_employment === undefined ||
          item.from_employment === ''
        ) {
          document.querySelector('.from_employment').style.borderColor = 'red'
          window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
        } else if (
          item.to_employment === undefined ||
          item.to_employment === ''
        ) {
          document.querySelector('.to_employment').style.borderColor = 'red'
          window.scrollTo({ top: 700, left: 0, behavior: 'smooth' })
        } else {
          setData('FamilyMember')
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      })
    } else if (data === 'FamilyMember') {
      if (familyData.fatherName === undefined || familyData.fatherName === '') {
        document.querySelector('.fatherName').style.borderColor = 'red'
        window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
      } else if (
        familyData.motherName === undefined ||
        familyData.motherName === ''
      ) {
        document.querySelector('.motherName').style.borderColor = 'red'
        window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
      } else {
        setData('PreferenceInformation')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
        window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })
      } else if (
        preferenceInfoData.complexionPreference === undefined ||
        preferenceInfoData.complexionPreference === ''
      ) {
        document.querySelector(
          '.complexionPreference .css-1bi0jn-control',
        ).style.borderColor = 'red'
        window.scrollTo({ top: 400, left: 0, behavior: 'smooth' })
      } else if (
        preferenceInfoData.occupationPreference === undefined ||
        preferenceInfoData.occupationPreference === ''
      ) {
        document.querySelector(
          '.occupationPreference .css-1bi0jn-control',
        ).style.borderColor = 'red'
        window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
      } else if (
        preferenceInfoData.educationPreference === undefined ||
        preferenceInfoData.educationPreference === ''
      ) {
        document.querySelector('.educationPreference').style.borderColor = 'red'
        window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
      } else if (
        preferenceInfoData.religionPreference === undefined ||
        preferenceInfoData.religionPreference === ''
      ) {
        document.querySelector('.religionPreference').style.borderColor = 'red'
        window.scrollTo({ top: 600, left: 0, behavior: 'smooth' })
      } else {
        setData('Preview')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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

  const exportPdf = async () => {
    const response = await fetch(watermark)
    const blob = await response.blob()
    const fileBlur = new File([blob], 'image.jpg', { type: blob.type })

    var doc = new jsPDF('p', 'mm', 'a4')

    var img = new Image()
    img.src = URL.createObjectURL(profileData.image)
    doc.addImage(img, '*', 20, 24, 30, 30)

    var img2 = new Image()
    img2.src = URL.createObjectURL(fileBlur)

    doc.addImage(img2, '*', 40, 80, 130, 130)

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
    doc.text(110, 76, 'Annual Income:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(138, 76, `${profileData.annualIncome}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 84, 'Present Address:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(49, 84, `${profileData.presentAddress}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 94, 'Date Of Birth:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(45, 94, `${profileData.dob}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 94, 'Special Case:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      132.5,
      94,
      `${profileData.specialCase ? profileData.specialCase : 'None'}`,
      'left',
    )

    doc.setFont(undefined, 'bold')
    doc.text(20, 102, 'Height:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(33.5, 102, `${profileData.height}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 102, 'Weight:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(124, 102, `${profileData.weight}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 110, 'Blood Group:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(43.5, 110, `${profileData.bloodGroup}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 110, 'Grown Up At:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(134.5, 110, `${profileData.grownUpAt}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 118, 'Citizenship:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(41, 118, `${profileData.citizenship}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 118, 'Complexion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(132, 118, `${profileData.complexion}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 126, 'Family Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(45, 126, `${profileData.familyStatus}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 126, 'Hobby:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(123, 126, `${profileData.hobby}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 134, 'Home Town:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(42, 134, `${profileData.hometown}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(110, 134, 'Marital Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(136, 134, `${profileData.maritalStatus}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(20, 142, 'Physical Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(47, 142, `${profileData.physicalStatus}`, 'left') //

    doc.setFont(undefined, 'bold')
    doc.text(20, 150, 'About:', 'left')

    var y = 150

    doc.setFont(undefined, 'normal')
    var text_width = doc.getTextWidth(
      profileData.about ? profileData.about : 'None',
    )
    var splitTitle = doc.splitTextToSize(
      profileData.about ? profileData.about : 'None',
      170,
    )
    doc.text(20, y + 5, splitTitle, 'left')
    y = y + text_width / 25

    y = y + 10
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Educational Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    let x = 20
    y = y + 5

    doc.setFontSize(11)
    educationalData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Institute Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(
        x + 27,
        y,
        `${item.instituteName + '(' + item.passingYear + ')'}`,
        'left',
      )

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Concentration/Major/Group:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 139.5, y, `${item.group}`, 'left')

      y = y + 6

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Level of Education:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 33, y, `${item.levelOfEducation}`, 'left')

      y += 8
    })

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Professional Information:', 'left')

    y = y + 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y = y + 7
    doc.setFontSize(11)
    professionalData.forEach((item, index) => {
      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Designation:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 21.5, y, `${item.designation}`, 'left')

      doc.setFont(undefined, 'bold')
      doc.text(x + 90, y, 'Company Name:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 118.5, y, `${item.companyName}`, 'left')

      y = y + 6

      doc.setFont(undefined, 'bold')
      doc.text(x, y, 'Company Location:', 'left')

      doc.setFont(undefined, 'normal')
      doc.text(x + 34, y, `${item.com_location}`, 'left')

      y = y + 6

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
    })

    if (y >= 230) {
      doc.addPage()
      y = 20 // Restart height position
      doc.addImage(img2, '*', 40, 80, 130, 130)
    } else {
      y = y + 8
    }

    // y += 8
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
    doc.text(
      x + 121,
      y,
      `${familyData.fatherOccupation ? familyData.fatherOccupation : 'None'}`,
      'left',
    )

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Details:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 13,
      y,
      `${familyData.fatherDetails ? familyData.fatherDetails : 'None'}`,
      'left',
    )

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Mother Name:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 25, y, `${familyData.motherName}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Mother Ocupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 122.5,
      y,
      `${familyData.motherOccupation ? familyData.motherOccupation : 'None'}`,
      'left',
    )

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Details:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 13,
      y,
      `${familyData.motherDetails ? familyData.motherDetails : 'None'}`,
      'left',
    )

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
      doc.text(x + 111, y, `${item.occupation}`, 'left')

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

    y += 8

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text(20, y, 'Preference Information:', 'left')

    y += 2
    doc.setDrawColor(255, 0, 0)
    doc.rect(20, y, 170, 0.1, 'F') // black line

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Age Range:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 20,
      y,
      `${preferenceInfoData.ageMinimum} to ${preferenceInfoData.ageMaximum}`,
      'left',
    )

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Height Range:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(
      x + 115,
      y,
      `${preferenceInfoData.heightMinimum} to ${preferenceInfoData.heightMaximum}`,
      'left',
    )

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Marital Status:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 26, y, `${preferenceInfoData.maritalStatusPreference}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Complexion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 112, y, `${preferenceInfoData.complexionPreference}`, 'left')

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Occupation:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 21, y, `${preferenceInfoData.occupationPreference}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Education:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 108.5, y, `${preferenceInfoData.educationPreference}`, 'left')

    y += 8

    doc.setFontSize(11)
    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Location:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 16.5, y, `${preferenceInfoData.location}`, 'left')

    doc.setFont(undefined, 'bold')
    doc.text(x + 90, y, 'Religion:', 'left')

    doc.setFont(undefined, 'normal')
    doc.text(x + 106, y, `${preferenceInfoData.religionPreference}`, 'left')

    y = y + 8

    doc.setFont(undefined, 'bold')
    doc.text(x, y, 'Details:', 'left')

    doc.setFont(undefined, 'normal')
    text_width = doc.getTextWidth(
      preferenceInfoData.preferenceDetails
        ? preferenceInfoData.preferenceDetails
        : 'None',
    )
    splitTitle = doc.splitTextToSize(
      preferenceInfoData.preferenceDetails
        ? preferenceInfoData.preferenceDetails
        : 'None',
      170,
    )
    doc.text(x, y + 5, splitTitle, 'left')
    y = y + text_width / 25
    y += 8

    doc.save(profileData.name + ' Cv.pdf')
  }

  const addCV = (event) => {
    event.preventDefault()
    const formData = new FormData()
    const uniqueId =
      Date.now().toString(36).slice(5) + Math.random().toString(36).slice(5)

    formData.append('u_id', uniqueId)
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
    formData.append(
      'specialCase',
      profileData.specialCase ? profileData.specialCase : 'None',
    )
    formData.append('about', profileData.about ? profileData.about : 'None')

    formData.append('fatherName', familyData.fatherName)
    formData.append(
      'fatherOccupation',
      familyData.fatherOccupation ? familyData.fatherOccupation : 'None',
    )
    formData.append(
      'fatherDetails',
      familyData.fatherDetails ? familyData.fatherDetails : 'None',
    )
    formData.append('motherName', familyData.motherName)
    formData.append(
      'motherOccupation',
      familyData.motherOccupation ? familyData.motherOccupation : 'None',
    )
    formData.append(
      'motherDetails',
      familyData.motherDetails ? familyData.motherDetails : 'None',
    )
    formData.append('brother', familyData.brother)
    formData.append('sister', familyData.sister)

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
    formData.append(
      'location',
      preferenceInfoData.location ? preferenceInfoData.location : 'None',
    )
    formData.append('religionPreference', preferenceInfoData.religionPreference)
    formData.append(
      'preferenceDetails',
      preferenceInfoData.preferenceDetails
        ? preferenceInfoData.preferenceDetails
        : 'None',
    )

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
        Swal.fire({
          icon: 'info',
          title: 'Please wait for a while.',
          showConfirmButton: false,
          timer: 1800,
        })
        axios
          .post(
            `https://api.butterflymatrimonial.com/api/post/cv/new`,
            formData,
          )
          .then((data) => {
            if (data.data.message === 'Your CV has just been stored.') {
              siblingData.map((item) =>
                axios.post(
                  `https://api.butterflymatrimonial.com/api/post/sibling`,
                  {
                    name: item.name ? item.name : 'none',
                    occupation: item.occupation ? item.occupation : 'none',
                    details: item.details ? item.details : 'none',
                    u_id: uniqueId,
                  },
                ),
              )
              educationalData.map((item) =>
                axios.post(
                  `https://api.butterflymatrimonial.com/api/post/education/qualification`,
                  {
                    levelOfEducation: item.levelOfEducation,
                    group: item.group,
                    instituteName: item.instituteName,
                    passingYear: item.passingYear,
                    u_id: uniqueId,
                  },
                ),
              )
              professionalData.forEach((item) => {
                axios
                  .post(
                    `https://api.butterflymatrimonial.com/api/post/professional`,
                    {
                      companyName: item.companyName ? item.companyName : 'none',
                      designation: item.designation ? item.designation : 'none',
                      com_location: item.com_location
                        ? item.com_location
                        : 'none',
                      from_employment: item.from_employment
                        ? item.from_employment
                        : 'none',
                      to_employment: item.to_employment
                        ? item.to_employment
                        : 'none',
                      u_id: uniqueId,
                    },
                  )
                  .catch(({ response }) => {
                    console.log('ProfessionalData error', response)
                  })
              })
              galleryData.imageFill.forEach((item) => {
                const formData2 = new FormData()
                formData2.append('imageFill', item)
                formData2.append('u_id', uniqueId)
                axios
                  .post(
                    `https://api.butterflymatrimonial.com/api/post/gallery-image`,
                    formData2,
                  )
                  .catch(({ response }) => {
                    console.log('GalleryData error', response)
                  })
              })
              exportPdf()
              //submission confirmation
              Swal.fire({
                title: `Success.`,
                icon: 'success',
                html: `<input type="text" value="https://butterflymatrimonial.com/butterfly-cv-bank/${uniqueId}" name="link" class="form-control alert-input-fild"><br/><p align="center" class="copy-data-url">Copy your cv link.</p>`,
              }).then(() => {
                dispatch(initCvData())
                setData('ProfileInformation')
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

  return (
    <div style={{ backgroundColor: '#ededed' }}>
      <MainNav />
      <div className="cvbank_text_position_1">
        <h1>CREATE YOUR CV</h1>

        <h6>
          Marriage means two individual men and women, with similar minds or
          similar types of families desire to connect & create a lovable family.
          Initially, Family structure and perceptions are measured by Bio-Data
          which is tough for individuals who have never experienced preparing a
          CV. Butterfly Matrimonial helps you to prepare a complete Bio-Data.
        </h6>
        <h6>
          Download and share the link to your potential desired family and
          dearest one to introduce yourself and your family.
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
                  onClick={() =>
                    // setData('ProfileInformation')
                    validation()
                  }
                  className="borderbottomlinehover"
                >
                  Profile Information
                </button>
              )}
            </li>
            <li>
              {data === 'Qualification' || data === 'Preview' ? (
                <button
                  onClick={() => setData('Qualification')}
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
                  onClick={() =>
                    // setData('Qualification')
                    validation()
                  }
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
                  onClick={() =>
                    // setData('FamilyMember')
                    validation()
                  }
                  className="borderbottomlinehover"
                >
                  Family Information
                </button>
              )}
            </li>
            <li>
              {data === 'PreferenceInformation' || data === 'Preview' ? (
                <button
                  onClick={
                    () => setData('PreferenceInformation')
                    // validation()
                  }
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
                  onClick={() =>
                    // setData('PreferenceInformation')
                    validation()
                  }
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
          {data === 'Qualification' && (
            <Qualification
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
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                  data === 'Qualification' && setData('ProfileInformation')
                  data === 'FamilyMember' && setData('Qualification')
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
                        galleryData,
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
                          galleryData,
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
                    className="cv_bankButton_BackNext-chacked"
                    id="submit-checked-btn"
                  >
                    Save and Download
                  </button>{' '}
                  <button
                    className="cv_bankButton_BackNext"
                    id="submit-not-checked-btn"
                    onClick={(event) => {
                      addCV(event)
                      document.getElementById(
                        'submit-checked-btn',
                      ).style.display = 'block'
                      document.getElementById(
                        'submit-not-checked-btn',
                      ).style.display = 'none'
                    }}
                  >
                    Save and Download
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
