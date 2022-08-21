import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProfileInformation = (props) => {
  const [preferenceData, setPreferenceData] = useState([])

  const [profileInformation, setProfileInformation] = useState({
    image: '',
    name: '',
    gender: '',
    phone: '',
    religion: '',
    email: '',
    presentAddress: '',
    divisionPresent: '',
    dristrictPresent: '',
    parmanentAddress: '',
    divisionParmanent: '',
    dristrictParmanent: '',
    age: '',
    specialCase: '',
    spousePreference: '',
    about: '',
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

  // function calc_image_size(image) {
  //   let y = 1
  //   if (image.endsWith('==')) {
  //     y = 2
  //   }
  //   const x_size = image.length * (3 / 4) - y
  //   return Math.round(x_size / 1024)
  // }

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
      // console.log(resized)
      var new_img = new Image()
      new_img.src = resized
      new_img.onload = function (event) {
        var file = dataURLtoFile(resized, `${profileInformation.name}.png`)
        // console.log(file)
        setProfileInformation({
          ...profileInformation,
          image: file,
        })
      }
    } else {
      console.log('return err')
    }
  }

  const checkSingle = (event, name) => {
    if (event) {
      let prefData = [...preferenceData, name]
      setPreferenceData(prefData)
    } else {
      preferenceData.forEach((item, index) => {
        if (item === name) {
          preferenceData.splice(index, 1)
          console.log(preferenceData)
          setPreferenceData(preferenceData)
        }
      })
    }
  }

  const { updateProfileData, updatePreferenceData } = props

  useEffect(() => {
    updateProfileData(profileInformation)
    updatePreferenceData(preferenceData)
  }, [
    profileInformation,
    updateProfileData,
    preferenceData,
    updatePreferenceData,
  ])

  return (
    <>
      <Container className="cv_bank_container21">
        <Row>
          <Col xs={12} md={2} className="img_uploader image">
            <h5>
              Image
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <em style={{ color: '#fc6375', fontSize: '14px' }} id="warning">
              (Size 310*310px)*
            </em>

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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control name"
              placeholder="Enter your name."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Male"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      gender: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="Female"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      gender: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="inlineRadio2">
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div class="form-groupx form-control phone">
              <span class="border-end country-code px-2">+88</span>
              <input
                type="number"
                class="form-control"
                aria-describedby="emailHelp"
                id="phoneNumber"
                placeholder="013********"
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <select
              class="form-control religion"
              placeholder="Choose One"
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="email"
              className="form-control email"
              placeholder="Enter your email id."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="date"
              data-date-format="mm/dd/yyyy"
              title="mm/dd/yyyy"
              className="form-control age"
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control presentAddress"
              placeholder="Enter your present address."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control divisionPresent"
              id="divisionPresent"
              placeholder="Enter your division."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control dristrictPresent"
              placeholder="Enter your dristrict."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control parmanentAddress"
              placeholder="Enter your present address."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control divisionParmanent"
              placeholder="Enter your division."
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
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <input
              type="text"
              className="form-control dristrictParmanent"
              placeholder="Enter your dristrict."
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
          <Col xs={12} md={12}>
            <h5>
              Limitations Or Special Case
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Addiction"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios1">
                  Addiction
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Diabetics"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  Diabetics
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Smoker"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  Smoker
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input specialCase"
                  type="radio"
                  name="exampleRadios"
                  value="Other"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  Other
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Preference
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div class="form-check">
              <input
                class="form-check-input preference"
                type="checkbox"
                value="Single"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Single</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input preference"
                type="checkbox"
                value="Divorce"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input preference"
                type="checkbox"
                value="Divorce without child"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce without child</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input preference"
                type="checkbox"
                value="Divorce with child"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce with child</label>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              Spouse Preference
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input spousePreference"
                  type="radio"
                  name="redioJob"
                  value="Job"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios1">
                  Job
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="redioJob"
                  value="No Job"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  No Job
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h5>
              About
              <span class="" style={{ color: 'red', fontSize: '24px' }}>
                *
              </span>
              :
            </h5>
            <div class="input-group">
              <textarea
                class="form-control about"
                placeholder="Write about yourself."
                aria-label="With textarea"
                rows="7"
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
      </Container>
    </>
  )
}

export default ProfileInformation
