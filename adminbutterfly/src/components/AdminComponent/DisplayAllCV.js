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
  const [professionaldata, setProfessionaldata] = useState([])
  const [found, setFound] = useState(true)
  const [edu, setEdu] = useState([])
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
  const respro = [...new Set(arrpro)]

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

  const handleInput = async (event) => {
    let foundtest = edu.filter((item) => item === event.value)
    if (foundtest.length === 0) {
      await setEdu((edu) => [...edu, event.value])
    }
    const fuse = new Fuse(edudata, optionsEdu)
    if (edu.length > 0) {
      edu.forEach((item, index) => {
        const result = fuse.search(item)

        result.forEach((data) => {
          let dataedu = cvdata.filter((item) => item.id === data.item.cvdata_id)
          const obj = {
            id: dataedu.map((x) => x.id)[0],
            name: dataedu.map((y) => y.name)[0],
            phone: dataedu.map((z) => z.phone)[0],
            created_at: dataedu.map((p) => p.created_at)[0],
          }
          cvDataArr.push(obj)
        })
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

  const removeEdu = async (index) => {
    await setEdu([...edu.slice(0, index), ...edu.slice(index + 1, edu.length)])
    const fuse = new Fuse(eduDataTemp, optionsEdu)
    if (edu.length > 0) {
      edu.forEach((item, index) => {
        const result = fuse.search(item)
        console.log(result)
        result.forEach((data) => {
          let dataedu = cvdata.filter((item) => item.id === data.item.cvdata_id)
          const obj = {
            id: dataedu.map((x) => x.id)[0],
            name: dataedu.map((y) => y.name)[0],
            phone: dataedu.map((z) => z.phone)[0],
            created_at: dataedu.map((p) => p.created_at)[0],
          }
          cvDataArr.push(obj)
        })
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

  const optionName = {
    threshold: 0,
    // Search in `author` and in `tags` array , 'religion', 'gender', 'grownUpAt'
    keys: ['name', 'phone', 'grownUpAt'],
  }
  const optionReligion = {
    threshold: 0,
    // Search in `author` and in `tags` array ,, 'grownUpAt'
    keys: ['religion'],
  }
  const optionGender = {
    threshold: 0,
    // Search in `author` and in `tags` array ,, 'grownUpAt'
    keys: ['gender'],
  }
  const optionsEdu = {
    threshold: 0,
    // Search in `author` and in `tags` array
    keys: ['levelOfEducation', 'passingYear'],
  }
  const optionsProfessional = {
    threshold: 0,
    // Search in `author` and in `tags` array
    keys: ['designation'],
  }

  let cvDataArr = []
  let cvDataTemp = cvdata
  let eduDataTemp = edudata

  const searchData = (search) => {
    if (search !== '') {
      const fuse = new Fuse(cvDataTemp, optionName)
      const result = fuse.search(search)

      result.forEach((data) => {
        const obj = {
          id: data.item.id,
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
          id: data.item.id,
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
          id: data.item.id,
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
        let dataedu = cvdata.filter((item) => item.id === data.item.cvdata_id)
        const obj = {
          id: dataedu.map((x) => x.id)[0],
          name: dataedu.map((y) => y.name)[0],
          phone: dataedu.map((z) => z.phone)[0],
          created_at: dataedu.map((p) => p.created_at)[0],
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
        class="content"
        style={{ backgroundColor: '#ededed', padding: '20px' }}
      >
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
            onChange={(event) => searchDataReligion(event.target.value)}
          >
            <option value="" selected>
              Choose religion
            </option>
            <option value="Muslim">Muslim</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Christian">Christian</option>
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
            <div className="infos">
              {edu.length > 0
                ? edu.map((info, index) => {
                    return (
                      <div className="infos_item">
                        <span>{info}</span>
                        <button onClick={() => removeEdu(index)}>x</button>
                      </div>
                    )
                  })
                : null}
            </div>

            <Select
              options={options}
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
              onChange={(event) => handleInput(event)}
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
                              to={`/display-cv/${item.id}`}
                              title="View"
                              className="btn btn-outline-info"
                            >
                              <MdOutlineCalendarViewDay size={20} />
                            </Link>{' '}
                            <button
                              className="btn btn-outline-danger"
                              title="Delete"
                              onClick={() => removeOneCv(item.id)}
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
        <Link to="https://butterflymatrimonial.com/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default DisplayAllCV
