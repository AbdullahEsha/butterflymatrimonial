import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'
import ImageUploader from 'react-images-upload'
import UploadImage from '../../asset/image/img_upload.png'

const ProfileInformation = (props) => {
  const options = [
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Gardening', value: 'Gardening' },
  ]

  const optionSpecialCase = [
    { label: 'Addiction', value: 'Addiction' },
    { label: 'Diabetics', value: 'Diabetics' },
    { label: 'Smoker', value: 'Smoker' },
  ]

  const profileData_ = useSelector((state) => state.cvDataReducer.profileData)
  const galleryData_ = useSelector((state) => state.cvDataReducer.galleryData)

  const [city, setCity] = useState([])
  // const [preferenceData, setPreferenceData] = useState([])
  // const [checkOther, setCheckOther] = useState('None')
  // const [check, setCheck] = useState(true)
  const [errorMsg, setErrorMsg] = useState(true)

  const [galleryImage, setGalleryImage] = useState({
    imageFill: galleryData_.imageFill ? galleryData_.imageFill : [],
    imageUrl: galleryData_.imageUrl ? galleryData_.imageUrl : [],
  })

  const [profileInformation, setProfileInformation] = useState({
    image: profileData_.image ? profileData_.image : '',
    imageUrl: profileData_.imageUrl ? profileData_.imageUrl : '',
    name: profileData_ ? profileData_.name : '',
    gender: profileData_ ? profileData_.gender : '',
    phone: profileData_ ? profileData_.phone : '',
    email: profileData_ ? profileData_.email : '',
    dob: profileData_ ? profileData_.dob : '',
    height: profileData_.height ? profileData_.height : '',
    weight: profileData_.weight ? profileData_.weight : 45,
    bloodGroup: profileData_ ? profileData_.bloodGroup : '',
    religion: profileData_ ? profileData_.religion : '',
    complexion: profileData_ ? profileData_.complexion : '',
    maritalStatus: profileData_ ? profileData_.maritalStatus : '',
    hometown: profileData_ ? profileData_.hometown : '',
    presentAddress: profileData_ ? profileData_.presentAddress : '',
    grownUpAt: profileData_.grownUpAt ? profileData_.grownUpAt : '',
    citizenship: profileData_.citizenship ? profileData_.citizenship : '',
    familyStatus: profileData_ ? profileData_.familyStatus : '',
    annualIncome: profileData_.annualIncome
      ? profileData_.annualIncome
      : 100000,
    hobby: profileData_ ? profileData_.hobby : '',
    physicalStatus: profileData_ ? profileData_.physicalStatus : '',
    specialCase: profileData_ ? profileData_.specialCase : '',
    about: profileData_ ? profileData_.about : '',
  })

  async function image_to_base64(file) {
    let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader()
      fileReader.onload = () => resolve(fileReader.result)
      fileReader.onerror = (error) => {
        console.log(error)
        alert('An Error occurred please try again, File might be corrupt')
      }
      fileReader.readAsDataURL(file)
    })
    return result_base64
  }

  async function reduce_image_file_size(
    base64Str,
    MAX_WIDTH = 450,
    MAX_HEIGHT = 450,
  ) {
    let resized_base64 = await new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
        let canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL()) // this will return base64 image results after resize
      }
    })
    return resized_base64
  }

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  const loadFile = async (event) => {
    document.querySelector(
      '.uploadImg',
    ).style.backgroundImage = `url( ${URL.createObjectURL(
      event.target.files[0],
    )})`

    const res = await image_to_base64(event.target.files[0])

    if (res) {
      const resized = await reduce_image_file_size(res)
      var new_img = new Image()
      new_img.src = resized
      new_img.onload = function (event) {
        var file = dataURLtoFile(resized, `${Date.now()}.png`)

        setProfileInformation({
          ...profileInformation,
          image: file,
          imageUrl: resized,
        })
      }
    } else {
      console.log('return err')
    }
  }

  const galleryImageUpload = async (imageFill) => {
    let resp = []
    await imageFill.forEach((elem) => {
      resp.push(image_to_base64(elem))
    })
    const imageData = await Promise.all(resp)
    if (imageData) {
      let resizedRes = []
      await imageData.forEach((data) =>
        resizedRes.push(reduce_image_file_size(data)),
      )
      const imageResizedData = await Promise.all(resizedRes)

      let fileData = []
      imageResizedData.forEach((item, index) => {
        var gallery_img = new Image()
        gallery_img.src = item
        gallery_img.onload = function () {
          fileData.push(dataURLtoFile(item, `${Date.now()}${index + 10}.png`))
        }
      })
      setGalleryImage({
        ...galleryImage,
        imageFill: fileData,
        imageUrl: imageResizedData,
      })
    } else {
      console.log('return error')
    }
  }

  const { updateProfileData, updateGalleryData } = props

  useEffect(() => {
    getAllCity()
    updateGalleryData(galleryImage)
    updateProfileData(profileInformation)
  }, [profileInformation, updateProfileData, galleryImage, updateGalleryData])

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
        {/* <div align="center" className="hide_title"> */}
        <h3 className="hide_title">Profile Information</h3>
        {/* </div> */}
        <br className="hide_title" />
        <Row>
          <Col xs={12} md={2} className="img_uploader image">
            <h5>
              Image
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="file"
              accept="image/*"
              title="Choose Image"
              name="image"
              style={
                profileInformation.imageUrl
                  ? { backgroundImage: `url( ${profileInformation.imageUrl})` }
                  : {
                      background: `url(${UploadImage}) no-repeat #ffffff`,
                      backgroundSize: 'cover',
                    }
              }
              className="uploadImg imageFile"
              id="image2"
              onChange={(event) => {
                loadFile(event)
              }}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Full Name
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control name"
              placeholder="Enter your name."
              name="name"
              value={profileInformation.name}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  name: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Gender
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1 male-check"
                  value="Male"
                  checked={profileInformation.gender === 'Male' ? true : false}
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      gender: event.target.value,
                    })
                  }
                />
                <label className="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2 female-check"
                  value="Female"
                  checked={
                    profileInformation.gender === 'Female' ? true : false
                  }
                  onChange={(event) => {
                    setProfileInformation({
                      ...profileInformation,
                      gender: event.target.value,
                    })
                  }}
                />
                <label className="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
              <label className="gender" style={{ color: 'red' }}>
                Please select at least one.
              </label>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Contact Number
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div className="form-groupx form-control phone">
              <span className="border-end country-code px-2">+88</span>

              <input
                type="number"
                className="form-control phone"
                placeholder="01*********"
                id="phoneNumber"
                name="phone"
                value={profileInformation.phone}
                onChange={(event) => {
                  setProfileInformation({
                    ...profileInformation,
                    phone: event.target.value,
                  })
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Email Address
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="email"
              className="form-control email"
              placeholder="Enter your email id."
              name="email"
              value={profileInformation.email}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  email: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Date Of Birth
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="date"
              data-date-format="mm/dd/yyyy"
              title="mm/dd/yyyy"
              name="dob"
              className="form-control dob"
              value={profileInformation.dob}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  dob: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Height
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              class="form-control height"
              placeholder="Choose One"
              name="height"
              value={profileInformation.height}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
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
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Weight in (kg)
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="number"
              min="30"
              max="150"
              step="5"
              className="form-control weight"
              placeholder="Enter your weight."
              name="weight"
              value={profileInformation.weight}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  weight: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Blood Group
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              className="form-control bloodGroup"
              placeholder="Choose One"
              name="blood-group"
              value={profileInformation.bloodGroup}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
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
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Religion
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              className="form-control religion"
              placeholder="Choose One"
              name="religion"
              value={profileInformation.religion}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  religion: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Islam">Islam</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Christianity">Christianity</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Other">Other</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Complexion
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              className="form-control complexion"
              placeholder="Choose One"
              name="complexion"
              value={profileInformation.complexion}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  complexion: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Extremely Fair Skin">Extremely Fair Skin</option>
              <option value="Fair Skin">Fair Skin</option>
              <option value="Medium Skin">Medium Skin</option>
              <option value="Olive Skin">Olive Skin</option>
              <option value="Brown Skin">Brown Skin</option>
              <option value="Dark Skin">Dark Skin</option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Marital Status
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              className="form-control maritalStatus"
              placeholder="Choose One"
              name="maritalStatus"
              value={profileInformation.maritalStatus}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  maritalStatus: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Unmarried">Unmarried</option>
              <option value="Widow/Widower">Widow/Widower</option>
              <option value="Separated">Separated</option>
              <option value="Divorced Without Child">
                Divorced Without Child
              </option>
              <option value="Divorced With Child">Divorced With Child</option>
              <option value="Married">Married</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Home town
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control hometown"
              placeholder="Enter your home town."
              name="hometown"
              value={profileInformation.hometown}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  hometown: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Present Address
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <textarea
              type="text"
              rows={2}
              className="form-control presentAddress"
              placeholder="Enter your present address."
              name="present-address"
              value={profileInformation.presentAddress}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  presentAddress: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Where You Grown Up?
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control grownUpAt"
              placeholder="Enter city or country name."
              name="grownUpAt"
              value={profileInformation.grownUpAt}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  grownUpAt: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Citizenship
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <Select
              className="citizenship"
              options={city}
              isMulti={true}
              defaultValue={
                profileData_.citizenship
                  ? {
                      label: `${profileInformation.citizenship}`,
                      value: `${profileInformation.citizenship}`,
                    }
                  : false
              }
              placeholder="Choose one."
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
                setProfileInformation({
                  ...profileInformation,
                  citizenship: event.map((item) => item.label).join(),
                })
              }}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Family Status
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              className="form-control familyStatus"
              placeholder="Choose One"
              name="familyStatus"
              value={profileInformation.familyStatus}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  familyStatus: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Upper Class">Upper Class</option>
              <option value="Upper Middle Class">Upper Middle Class</option>
              <option value="Middle Class">Middle Class</option>
              <option value="Lower Class">Lower Class</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Annual Income (BDT)
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="number"
              min="0"
              step="5000"
              className="form-control annualIncome"
              placeholder="Enter approximate annual income."
              name="annualIncome"
              value={profileInformation.annualIncome}
              onChange={(event) => {
                setProfileInformation({
                  ...profileInformation,
                  annualIncome: event.target.value,
                })
              }}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Hobby
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <CreatableSelect
              className="hobby"
              options={options}
              isMulti={true}
              defaultValue={
                profileData_.hobby
                  ? {
                      label: `${profileInformation.hobby}`,
                      value: `${profileInformation.hobby}`,
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
              onChange={(event) => {
                setProfileInformation({
                  ...profileInformation,
                  hobby: event.map((item) => item.label).join(),
                })
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Physical Status
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <select
              className="form-control physicalStatus"
              placeholder="Choose One"
              name="physicalStatus"
              value={profileInformation.physicalStatus}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  physicalStatus: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Normal">Normal</option>
              <option value="Physically challenged">
                Physically challenged
              </option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              About
              <span
                style={{ color: 'red', fontSize: '24px', visibility: 'hidden' }}
              >
                *
              </span>
              :
            </h5>
            <div className="input-group">
              <textarea
                className="form-control about"
                placeholder="Write about yourself."
                aria-label="With textarea"
                name="about"
                rows="4"
                value={profileInformation.about}
                onChange={(event) =>
                  setProfileInformation({
                    ...profileInformation,
                    about: event.target.value,
                  })
                }
              ></textarea>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Limitations Or Special Case
              <span
                style={{ color: 'red', fontSize: '24px', visibility: 'hidden' }}
              >
                *
              </span>
              :
            </h5>
            {/* <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Addiction"
                checked={
                  profileInformation.specialCase &&
                  check &&
                  profileInformation.specialCase.includes('Addiction')
                    ? true
                    : false
                }
                onChange={(event) => {
                  setCheck(true)
                  checkSpecialCase(event.target.checked, event.target.value)
                }}
              />
              <label class="form-check-label">Addiction</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Diabetics"
                checked={
                  profileInformation.specialCase &&
                  check &&
                  profileInformation.specialCase.includes('Diabetics')
                    ? true
                    : false
                }
                onChange={(event) => {
                  setCheck(true)
                  checkSpecialCase(event.target.checked, event.target.value)
                }}
              />
              <label class="form-check-label">Diabetics</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Smoker"
                checked={
                  profileInformation.specialCase &&
                  check &&
                  profileInformation.specialCase.includes('Smoker')
                    ? true
                    : false
                }
                onChange={(event) => {
                  setCheck(true)
                  checkSpecialCase(event.target.checked, event.target.value)
                }}
              />
              <label class="form-check-label">Smoker</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Other"
                onChange={(event) => {
                  if (event.target.checked) {
                    setCheckOther('Other')
                    setCheck(false)
                  } else {
                    setCheckOther('None')
                    setCheck(true)
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: '',
                    })
                  }
                }}
              />
              <label class="form-check-label">Other</label>
            </div>
            {checkOther === 'Other' && (
              <input
                type="text"
                className="form-control"
                placeholder="Write about it."
                style={{ width: '300px' }}
                onChange={(event) =>
                  setProfileInformation({
                    ...profileInformation,
                    specialCase: event.target.value,
                  })
                }
              />
            )}
            <label className="preferenceCheck" style={{ color: 'red' }}>
              Please select at least one.
            </label> */}
            <CreatableSelect
              className="specialCase"
              options={optionSpecialCase}
              isMulti={true}
              defaultValue={
                profileData_.specialCase
                  ? {
                      label: `${profileInformation.specialCase}`,
                      value: `${profileInformation.specialCase}`,
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
              onChange={(event) => {
                setProfileInformation({
                  ...profileInformation,
                  specialCase: event.map((item) => item.label).join(),
                })
              }}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Add Image To Gallery
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              buttonText="Choose Images"
              label={`${
                errorMsg === true
                  ? 'Max 10 images | Accepted: jpg, png, jpeg'
                  : 'Max images limit exceeded'
              }`}
              // value={data.images}
              defaultImages={
                galleryImage.imageUrl ? galleryImage.imageUrl : false
              }
              name="images"
              onChange={(image) => {
                if (image.length <= 10) {
                  setErrorMsg(true)
                  galleryImageUpload(image)
                } else {
                  setErrorMsg(false)
                }
              }}
              imgExtension={['.jpg', '.png', '.jpeg']}
              maxFileSize={15097152}
              className="mb-4"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProfileInformation
