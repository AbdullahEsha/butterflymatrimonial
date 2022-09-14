import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import Select from 'react-select'
import ImageUploader from 'react-images-upload'

const ProfileInformation = (props) => {
  const [galleryImage, setGalleryImage] = useState({ imageFill: '' })
  const profileData_ = useSelector((state) => state.cvDataReducer.profileData)
  // const [city, setCity] = useState([])
  const [checkOther, setCheckOther] = useState('None')
  const [profileInformation, setProfileInformation] = useState({
    image: profileData_.image ? profileData_.image : '',
    name: profileData_ ? profileData_.name : '',
    gender: profileData_ ? profileData_.gender : '',
    phone: profileData_ ? profileData_.phone : '',
    religion: profileData_ ? profileData_.religion : '',
    email: profileData_ ? profileData_.email : '',
    presentAddress: profileData_ ? profileData_.presentAddress : '',
    divisionPresent: profileData_ ? profileData_.divisionPresent : '',
    dristrictPresent: profileData_ ? profileData_.dristrictPresent : '',
    parmanentAddress: profileData_ ? profileData_.divisionParmanent : '',
    divisionParmanent: profileData_ ? profileData_.divisionParmanent : '',
    dristrictParmanent: profileData_ ? profileData_.dristrictParmanent : '',
    age: profileData_ ? profileData_.age : '',
    specialCase: profileData_ ? profileData_.specialCase : '',
    height: profileData_ ? profileData_.height : '',
    weight: profileData_ ? profileData_.weight : '',
    bloodGroup: profileData_ ? profileData_.bloodGroup : '',
    grownUpAt: profileData_ ? profileData_.grownUpAt : '',
    specialCondition: profileData_ ? profileData_.specialCondition : '',
    about: profileData_ ? profileData_.about : '',
  })

  async function image_to_base64(file) {
    let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader()
      fileReader.onload = (e) => resolve(fileReader.result)
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

  //Usage example:

  const loadFile = async (event) => {
    document.querySelector('.uploadImg').style.backgroundImage =
      'url(' + URL.createObjectURL(event.target.files[0]) + ')'

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
        })
      }
    } else {
      console.log('return err')
    }
  }

  const { updateProfileData, updateGalleryData } = props

  useEffect(() => {
    // getAllCity()
    updateGalleryData(galleryImage)
    updateProfileData(profileInformation)
  }, [profileInformation, updateProfileData, galleryImage, updateGalleryData])

  // const getAllCity = async () => {
  //   fetch(`https://countriesnow.space/api/v0.1/countries`, {})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.error) {
  //         console.log('vul')
  //       } else {
  //         const countryInfo = [...data.data]
  //         let requiredCountryInfo = []
  //         countryInfo.map((item, index) =>
  //           requiredCountryInfo.push({
  //             label: `${item.country}`,
  //             value: `${item.country}`,
  //           }),
  //         )
  //         setCity(requiredCountryInfo)
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('pro erro', err)
  //     })
  // }

  // console.log(profileInformation)

  return (
    <>
      <Container className="cv_bank_container21">
        <Row>
          <Col xs={12} md={2} className="img_uploader image">
            <h5>
              Image
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="file"
              accept="image/png"
              title="Choose Image"
              name="image"
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
              Name
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control name"
              placeholder="Enter your name."
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
              Phone
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div className="form-groupx form-control phone">
              <span className="border-end country-code px-2">+88</span>

              <input
                type="number"
                className="form-control phone"
                placeholder="013********"
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
              <option value="Muslim">Muslim</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Email
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
              className="form-control age"
              value={profileInformation.age}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  age: event.target.value,
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
            <input
              type="text"
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
              Division
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control divisionPresent"
              id="divisionPresent"
              placeholder="Enter your division."
              name="present-division"
              value={profileInformation.divisionPresent}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  divisionPresent: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Dristrict
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control dristrictPresent"
              placeholder="Enter your dristrict."
              name="present-dristrict"
              value={profileInformation.dristrictPresent}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  dristrictPresent: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col>
            <h5>
              Parmanent Address
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control parmanentAddress"
              placeholder="Enter your present address."
              name="parmanent-address"
              value={profileInformation.parmanentAddress}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  parmanentAddress: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Division
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control divisionParmanent"
              placeholder="Enter your division."
              name="parmanent-division"
              value={profileInformation.divisionParmanent}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  divisionParmanent: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>
              Dristrict
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control dristrictParmanent"
              placeholder="Enter your dristrict."
              name="parmanent-dristrict"
              value={profileInformation.dristrictParmanent}
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  dristrictParmanent: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
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
        </Row>
        <Row className="row-padding">
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
          <Col xs={12} md={6}>
            <h5>
              Where You Grown Up?
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <input
              type="text"
              className="form-control grownUpAt"
              placeholder="Enter the Country and City name."
              name="grownUpAt"
              value={profileInformation.grownUpAt}
              onChange={(event) => {
                setProfileInformation({
                  ...profileInformation,
                  grownUpAt: event.target.value,
                })
              }}
            />
            {/* <Select
              options={city}
              defaultValue={{
                label: `${profileInformation.grownUpAt}`,
                value: `${profileInformation.grownUpAt}`,
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
                setProfileInformation({
                  ...profileInformation,
                  grownUpAt: event.target.value,
                })
              }}
            /> */}
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Limitations Or Special Case
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Addiction"
                  checked={
                    profileInformation.specialCase === 'Addiction'
                      ? true
                      : false
                  }
                  onChange={(event) => {
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                    setCheckOther(event.target.value)
                  }}
                />
                <label className="form-check-label" for="exampleRadios1">
                  Addiction
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Diabetics"
                  checked={
                    profileInformation.specialCase === 'Diabetics'
                      ? true
                      : false
                  }
                  onChange={(event) => {
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                    setCheckOther(event.target.value)
                  }}
                />
                <label className="form-check-label" for="exampleRadios2">
                  Diabetics
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Smoker"
                  checked={
                    profileInformation.specialCase === 'Smoker' ? true : false
                  }
                  onChange={(event) => {
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                    setCheckOther(event.target.value)
                  }}
                />
                <label className="form-check-label" for="exampleRadios2">
                  Smoker
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="None"
                  checked={
                    profileInformation.specialCase === 'None' ? true : false
                  }
                  onChange={(event) => {
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                    setCheckOther(event.target.value)
                  }}
                />
                <label className="form-check-label" for="exampleRadios2">
                  None
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input specialCaseOther"
                  type="radio"
                  name="exampleRadios"
                  value="Other"
                  onChange={() => setCheckOther('Other')}
                />
                <label className="form-check-label" for="exampleRadios2">
                  Other
                </label>
                {checkOther === 'Other' && (
                  <input
                    type="text"
                    className="form-control otherSpacialCase"
                    placeholder="Other Spacial Case."
                    onChange={(event) =>
                      setProfileInformation({
                        ...profileInformation,
                        specialCase: event.target.value,
                      })
                    }
                  />
                )}
              </div>
              <label className="specialCaseCheck" style={{ color: 'red' }}>
                Please select at least one.
              </label>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h5>
              Special Condition
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div className="input-group">
              <textarea
                className="form-control specialCondition"
                placeholder="Please share if you have any disabilities, low eye vision etc."
                aria-label="With textarea"
                name="special-condition"
                rows="7"
                value={profileInformation.specialCondition}
                onChange={(event) => {
                  setProfileInformation({
                    ...profileInformation,
                    specialCondition: event.target.value,
                  })
                }}
              ></textarea>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5>
              About
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <div className="input-group">
              <textarea
                className="form-control about"
                placeholder="Write about yourself."
                aria-label="With textarea"
                name="about"
                rows="7"
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
        </Row>
        <Row className="row-padding">
          <Col xs={0} md={3} id="hide_br"></Col>
          <Col xs={12} md={6}>
            <h5>
              Add Image To Gallery
              <span style={{ color: 'red', fontSize: '24px' }}>*</span>:
            </h5>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              buttonText="Choose Images"
              label="Max file size: 2mb | accepted: jpg, png, jpeg"
              // value={data.images}
              // defaultImages={data.images}
              name="images"
              onChange={(image) => {
                setGalleryImage({ ...galleryImage, imageFill: image })
              }}
              imgExtension={['.jpg', '.png', '.jpeg']}
              maxFileSize={2097152}
              className="mb-4"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProfileInformation
