import React, { useEffect, useState } from 'react'
import logo from '../../asset/image/butterfly.png'
import '../../asset/css/sidebar.css'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import axios from 'axios'
import { MdDeleteForever, MdOutlineCalendarViewDay } from 'react-icons/md'
import Select from 'react-select'
import Swal from 'sweetalert2'

const options = [
  { label: 'Secondary', value: 'Secondary', name: 'group' },
  { label: 'Higher Secondary', value: 'Higher Secondary', name: 'group' },
  { label: 'Diploma', value: 'Diploma', name: 'group' },
  { label: 'Bachelor Honors', value: 'Bachelor Honors', name: 'group' },
  { label: 'Masters', value: 'Masters', name: 'group' },
  { label: 'PhD', value: 'PhD', name: 'group' },
]

const DisplayAllCV = () => {
  const [cvdata, setCvData] = useState([])
  const [cvdataTemp, setCvDataTemp] = useState([])
  const [edudata, setEdudata] = useState([])
  const [ageRange, setAgeRange] = useState({
    minAge: 18,
    maxAge: 20,
  })
  const [professionaldata, setProfessionaldata] = useState([])
  const [found, setFound] = useState(true)
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isLogin) {
    navigate('/login')
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  useEffect(() => {
    getAllCv()
    getAllEdu()
    getAllProfession()
    return () => {
      //console.log("removing...", e);
    }
  }, [])

  const arrpro = professionaldata.map((item) => item.designation)
  const arrDistrict = cvdata.map((item) => item.hometown)
  const respro = [...new Set(arrpro)]
  const resDistrict = [...new Set(arrDistrict)]

  const getAllCv = async () => {
    fetch(`https://api.butterflymatrimonial.com/api/get/all/cv`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setCvData(data)
          setCvDataTemp(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const getAllEdu = async () => {
    fetch(`https://api.butterflymatrimonial.com/api/get/education`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setEdudata(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const getAllProfession = async () => {
    fetch(`https://api.butterflymatrimonial.com/api/get/professional`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setProfessionaldata(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }

  const removeOneCv = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`https://api.butterflymatrimonial.com/api/destroy-cv/${id}`)
          .then(() => {
            Swal.fire('Deleted!', 'Cv has been deleted.', 'success')
            getAllCv()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  // Search in `cv data` and in `tags` array , 'religion', 'gender', 'grownUpAt'
  const optionName = {
    threshold: 0,
    keys: ['name', 'phone', 'grownUpAt'],
  }

  // Search in `cv data` and in `tags` array ,, 'grownUpAt'
  const optionReligion = {
    threshold: 0,
    keys: ['religion'],
  }

  // Search in `cv data` and in `tags` array , 'gender'
  const optionGender = {
    threshold: 0,
    keys: ['gender'],
  }

  // Search in `cv data` and in `tags` array, 'hometown'
  const optionsDistrict = {
    threshold: 0,
    keys: ['hometown'],
  }

  // Search in `edu data` and in `tags` array, 'levelOfEducation', 'passingYear'
  const optionsEdu = {
    threshold: 0,
    keys: ['levelOfEducation', 'passingYear'],
  }

  // Search in `professional data` and in `tags` array, 'designation'
  const optionsProfessional = {
    threshold: 0,
    keys: ['designation'],
  }

  let cvDataArr = []
  let cvDataTemp = cvdata

  const handleEducation = async (event) => {
    // event.map((item, index) => console.log(`eventvalue ${index}`, item.value))

    const fuse = new Fuse(edudata, optionsEdu)

    let resultpre = []
    event.forEach((item) => {
      let eduDataFind = fuse.search(item.value)
      resultpre.push(eduDataFind)
    })

    let resultfound = []
    resultpre.forEach((elm) => {
      elm.forEach((elData) => resultfound.push(elData.item))
    })

    let resultUniqueId = []
    resultfound.forEach((u_item) => {
      resultUniqueId.push(u_item.u_id)
    })

    const result = [...new Set(resultUniqueId)]

    if (result.length > 0) {
      result.forEach((data) => {
        let dataedu = cvdata.filter((item) => item.u_id === data)
        const obj = {
          u_id: dataedu.map((x) => x.u_id)[0],
          name: dataedu.map((y) => y.name)[0],
          phone: dataedu.map((z) => z.phone)[0],
          created_at: dataedu.map((p) => p.created_at)[0],
        }
        if (obj.u_id) {
          cvDataArr.push(obj)
        }
      })
      if (cvDataArr.length > 0) {
        setFound(true)
        setCvDataTemp(cvDataArr)
      } else {
        setFound(false)
      }
    } else {
      setFound(true)
      getAllCv()
    }
  }

  const searchData = (search) => {
    if (search !== '') {
      const fuse = new Fuse(cvDataTemp, optionName)
      const result = fuse.search(search)

      result.forEach((data) => {
        const obj = {
          u_id: data.item.u_id,
          name: data.item.name,
          phone: data.item.phone,
          created_at: data.item.created_at,
        }
        cvDataArr.push(obj)
      })

      if (cvDataArr.length > 0) {
        setFound(true)
        setCvDataTemp(cvDataArr)
      } else {
        setFound(false)
      }
    } else {
      setFound(true)
      getAllCv()
    }
  }

  const searchDataReligion = async (searchReligion) => {
    if (searchReligion !== '') {
      const fuse = new Fuse(cvdata, optionReligion)
      const result = fuse.search(searchReligion)

      result.forEach((data) => {
        const obj = {
          u_id: data.item.u_id,
          name: data.item.name,
          phone: data.item.phone,
          created_at: data.item.created_at,
        }
        cvDataArr.push(obj)
      })

      if (cvDataArr.length > 0) {
        setFound(true)
        setCvDataTemp(cvDataArr)
      } else {
        setFound(false)
      }
    } else {
      setFound(true)
      getAllCv()
    }
  }
  const searchDataGender = (searchGender) => {
    if (searchGender !== '') {
      const fuse = new Fuse(cvdata, optionGender)
      const result = fuse.search(searchGender)

      result.forEach((data) => {
        const obj = {
          u_id: data.item.u_id,
          name: data.item.name,
          phone: data.item.phone,
          created_at: data.item.created_at,
        }
        cvDataArr.push(obj)
      })

      if (cvDataArr.length > 0) {
        setFound(true)
        setCvDataTemp(cvDataArr)
      } else {
        setFound(false)
      }
    } else {
      setFound(true)
      getAllCv()
    }
  }

  const searchDataProfessional = (searchProfessional) => {
    if (searchProfessional !== '') {
      const fuse = new Fuse(professionaldata, optionsProfessional)
      const result = fuse.search(searchProfessional)

      result.forEach((data) => {
        let dataedu = cvdata.filter((item) => item.u_id === data.item.u_id)
        const obj = {
          u_id: dataedu.map((x) => x.u_id)[0],
          name: dataedu.map((y) => y.name)[0],
          phone: dataedu.map((z) => z.phone)[0],
          created_at: dataedu.map((p) => p.created_at)[0],
        }
        if (obj.u_id) {
          cvDataArr.push(obj)
        }
      })

      console.log('cvDataArr', cvDataArr)

      if (cvDataArr.length > 0) {
        setFound(true)
        setCvDataTemp(cvDataArr)
      } else {
        setFound(false)
      }
    } else {
      setFound(true)
      getAllCv()
    }
  }

  const searchDataDistrict = (searchDistrict) => {
    if (searchDistrict !== '') {
      const fuse = new Fuse(cvdata, optionsDistrict)
      const result = fuse.search(searchDistrict)

      result.forEach((data) => {
        const obj = {
          u_id: data.item.u_id,
          name: data.item.name,
          phone: data.item.phone,
          created_at: data.item.created_at,
        }
        cvDataArr.push(obj)
      })

      if (cvDataArr.length > 0) {
        setFound(true)
        setCvDataTemp(cvDataArr)
      } else {
        setFound(false)
      }
    } else {
      setFound(true)
      getAllCv()
    }
  }

  const ageRangeSearch = () => {
    let filterAge4 = cvdata.filter(
      (item4) =>
        (new Date() - new Date(item4.dob)) / 31557600000 >= ageRange.minAge &&
        (new Date() - new Date(item4.dob)) / 31557600000 < ageRange.maxAge,
    )
    setCvDataTemp(filterAge4)
  }

  return (
    <>
      <div class="sidebar">
        <Link to="/">Dashboard</Link>
        <Link class="active" to="/display-cv">
          Display CV
        </Link>
        <Link to="/contact">Display Contacts</Link>
        <Link to="/venus">Venus</Link>
        <Link to="/special-pairing">Special Pairing</Link>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>

      <div
        className="content"
        style={{ backgroundColor: '#ededed', padding: '20px' }}
      >
        <div
          style={{
            width: '10%',
            float: 'right',
          }}
        >
          <select
            class="form-control"
            aria-label="Default select example"
            onChange={(event) => searchDataReligion(event.target.value)}
          >
            <option value="" selected>
              Choose religion
            </option>
            <option value="Islam">Islam</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Christianity">Christianity</option>
            <option value="Buddhism">Buddhism</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div
          style={{
            width: '10%',
            float: 'right',
            paddingRight: '20px',
          }}
        >
          <select
            class="form-control"
            aria-label="Default select example"
            onChange={(event) => searchDataGender(event.target.value)}
          >
            <option value="" selected>
              Choose gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div
          style={{
            width: '13%',
            float: 'right',
            paddingRight: '20px',
          }}
        >
          <select
            class="form-control"
            aria-label="Default select example"
            onChange={(event) => searchDataProfessional(event.target.value)}
          >
            <option value="" selected>
              Choose designation
            </option>
            {respro.map((item) => {
              return <option value={item}>{item}</option>
            })}
          </select>
        </div>
        <div
          style={{
            width: '18%',
            float: 'right',
            paddingRight: '20px',
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search by name/phone/country."
            onChange={(event) => searchData(event.target.value)}
          />
        </div>
        <div
          style={{
            width: '40%',
            float: 'right',
            paddingRight: '20px',
          }}
        >
          <div className="education">
            <Select
              options={options}
              isMulti={true}
              // className="group_1"
              theme={(theme) => ({
                ...theme,
                borderRadius: 3,
                colors: {
                  ...theme.colors,
                  primary25: '#ff566a56',
                  primary: '#ff566b',
                },
              })}
              onChange={(event) => handleEducation(event)}
            />
          </div>
          <br />
        </div>
        <div className="bottom-search">
          <div
            style={{
              width: '29.7%',
            }}
          >
            <select
              class="form-control"
              aria-label="Default select example"
              onChange={(event) => searchDataDistrict(event.target.value)}
            >
              <option value="" selected>
                Choose Hometown
              </option>
              {resDistrict.map((item) => {
                return <option value={item}>{item}</option>
              })}
            </select>
          </div>
          <div
            style={{
              width: '10%',
              paddingLeft: '20px',
            }}
          >
            <input
              type="number"
              className="form-control"
              min="18"
              placeholder="Min Age"
              value={ageRange.minAge ? ageRange.minAge : '18'}
              onChange={(event) => {
                setAgeRange({ ...ageRange, minAge: event.target.value })
                ageRangeSearch()
              }}
            />
          </div>
          <div
            style={{
              width: '11.3%',
              paddingLeft: '20px',
            }}
          >
            <input
              type="number"
              className="form-control"
              min="18"
              placeholder="Max Age"
              value={ageRange.maxAge ? ageRange.maxAge : '20'}
              onChange={(event) => {
                setAgeRange({ ...ageRange, maxAge: event.target.value })
                ageRangeSearch()
              }}
            />
          </div>
        </div>
        <br />
        <br />
        <div style={{ backgroundColor: '#fff', padding: '20px' }}>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {found &&
                  cvdataTemp.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td>{`${
                            item.created_at
                              ? new Date(item.created_at).toLocaleString(
                                  'en-GB',
                                  {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                  },
                                )
                              : ''
                          }`}</td>
                          <td>
                            <Link
                              to={`/display-cv/${item.u_id}`}
                              title="View"
                              className="btn btn-outline-info"
                            >
                              <MdOutlineCalendarViewDay size={20} />
                            </Link>{' '}
                            <button
                              className="btn btn-outline-danger"
                              title="Delete"
                              onClick={() => removeOneCv(item.u_id)}
                            >
                              <MdDeleteForever size={20} />
                            </button>
                          </td>
                        </tr>
                      </>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="logoStyle">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default DisplayAllCV
