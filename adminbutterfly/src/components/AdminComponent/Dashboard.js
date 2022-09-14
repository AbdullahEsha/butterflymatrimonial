import React, { useEffect, useState } from 'react'
import logo from '../../asset/image/butterfly.png'
import { AiOutlineUser } from 'react-icons/ai'
import { FaFemale, FaMale } from 'react-icons/fa'
import '../../asset/css/sidebar.css'
import { Link } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Dashboard = () => {
  const [cvdata, setCvData] = useState([])

  var monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

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
    return () => {
      //console.log("removing...", e);
    }
  }, [])

  const getAllCv = async () => {
    fetch(`https://api.butterflymatrimonial.com/api/get/all/cv`, {})
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

  let cv_date = []

  cvdata.map((item) =>
    cv_date.push(
      `${new Date(item.created_at).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short',
      })}`,
    ),
  )

  // let obj = {}
  let grapharr_y = []
  let labels = []

  var d = new Date()
  d.setDate(1)

  for (var i = 0; i <= 11; i++) {
    let month = monthName[d.getMonth()] + ' ' + d.getFullYear()
    let filter = cv_date.filter((cv_item) => cv_item === month)

    labels.push(month)
    grapharr_y.push(filter.length)

    d.setMonth(d.getMonth() - 1)
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: grapharr_y,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Butterfly CV Data Bar Chart',
      },
    },
  }

  let filterAge1 = cvdata.filter(
    (item1) =>
      (new Date() - new Date(item1.age)) / 31557600000 >= 18 &&
      (new Date() - new Date(item1.age)) / 31557600000 < 24,
  ).length
  let filterAge2 = cvdata.filter(
    (item2) =>
      (new Date() - new Date(item2.age)) / 31557600000 >= 24 &&
      (new Date() - new Date(item2.age)) / 31557600000 < 30,
  ).length
  let filterAge3 = cvdata.filter(
    (item3) =>
      (new Date() - new Date(item3.age)) / 31557600000 >= 30 &&
      (new Date() - new Date(item3.age)) / 31557600000 < 36,
  ).length
  let filterAge4 = cvdata.filter(
    (item4) =>
      (new Date() - new Date(item4.age)) / 31557600000 >= 36 &&
      (new Date() - new Date(item4.age)) / 31557600000 < 42,
  ).length
  let filterAge5 = cvdata.filter(
    (item5) => (new Date() - new Date(item5.age)) / 31557600000 >= 42,
  ).length

  let countTotal =
    filterAge1 + filterAge2 + filterAge3 + filterAge4 + filterAge5

  let demoArray = []
  if (cvdata.length > 0) {
    cvdata.forEach((elem, index) => {
      let stringInput = elem.preference
      let arrdata = stringInput.split(', ')
      demoArray.push(arrdata)
    })
  }

  let countPreference1 = 0
  let countPreference2 = 0
  let countPreference3 = 0
  let countPreference4 = 0

  demoArray.forEach((item) => {
    let singledata = item.find((elem) => elem === 'Single')
    if (singledata === 'Single') {
      countPreference1++
    }
  })
  demoArray.forEach((item) => {
    let singledata = item.find((elem) => elem === 'Divorce')
    if (singledata === 'Divorce') {
      countPreference2++
    }
  })
  demoArray.forEach((item) => {
    let singledata = item.find((elem) => elem === 'Divorce without child')
    if (singledata === 'Divorce without child') {
      countPreference3++
    }
  })
  demoArray.forEach((item) => {
    let singledata = item.find((elem) => elem === 'Divorce with child')
    if (singledata === 'Divorce with child') {
      countPreference4++
    }
  })

  let countPreference =
    countPreference1 + countPreference2 + countPreference3 + countPreference4

  return (
    <>
      <div class="sidebar">
        <Link class="active" to="/">
          Dashboard
        </Link>
        <Link to="/display-cv">Display CV</Link>
        <Link to="/contact">Display Contacts</Link>
        <Link to="/venus">Venus</Link>
        <Link to="/special-pairing">Special Pairing</Link>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>
      <div class="content" style={{ backgroundColor: '#ededed' }}>
        <div className="row" style={{ padding: '15px' }}>
          <div
            className="col-sm-12 col-md-8 col-lg-8 bar-card"
            align="center"
            id="backgroundDashboard"
            style={{ padding: '40px' }}
          >
            <div style={{ height: '100%' }}>
              <Bar options={options} data={data} />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div id="secondComponentDisplay" className="componentDisplay">
              <div className="row">
                <div className="col-3">
                  <AiOutlineUser
                    size={45}
                    color="white"
                    className="iconTopDisplay"
                  />
                </div>
                <div className="col-9">
                  <h6 className="textVartical">
                    Total CV Added
                    <br />
                    {cvdata.length}
                  </h6>
                </div>
              </div>
            </div>
            <br />
            <div>
              <div className="row">
                <div className="col-6">
                  <div id="firstComponentDisplay" className="componentDisplay">
                    <div className="row">
                      <div className="col-4">
                        <FaMale
                          size={20}
                          color="white"
                          className="iconTopDisplay"
                        />
                      </div>
                      <div className="col-8">
                        <h6 className="textVartical">
                          Male
                          <br />
                          {
                            cvdata.filter((item) => item.gender === 'Male')
                              .length
                          }
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div id="thirdComponentDisplay" className="componentDisplay">
                    <div className="row">
                      <div className="col-4">
                        <FaFemale
                          size={20}
                          color="white"
                          className="iconTopDisplay"
                        />
                      </div>
                      <div className="col-8">
                        <h6 className="textVartical">
                          Female
                          <br />
                          {
                            cvdata.filter((item) => item.gender === 'Female')
                              .length
                          }
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <div className="ageGroup">
              <h5>Age Group</h5>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((filterAge1 / countTotal) * 100).toFixed(2)}%
                </p>
                <p>18 - 23</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${(filterAge1 / countTotal) * 100}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((filterAge2 / countTotal) * 100).toFixed(2)}%
                </p>
                <p>24 - 29</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${(filterAge2 / countTotal) * 100}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((filterAge3 / countTotal) * 100).toFixed(2)}%
                </p>
                <p>30 - 35</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${(filterAge3 / countTotal) * 100}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((filterAge4 / countTotal) * 100).toFixed(2)}%
                </p>
                <p>36 - 41</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${(filterAge4 / countTotal) * 100}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((filterAge5 / countTotal) * 100).toFixed(2)}%
                </p>
                <p>42 - Up</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${(filterAge5 / countTotal) * 100}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: '15px' }}>
          <div className="col-sm-12 col-md-4 col-lg-4 preferance-div">
            <h5>Recently CV Added</h5>
            <table width="100%">
              <tr>
                <td rowSpan={2} width="50px">
                  <img
                    src={
                      'https://api.butterflymatrimonial.com/' +
                      cvdata.map((item) => item.image)[0]
                    }
                    alt="mage"
                    height="40px"
                  />
                </td>
                <td>
                  <b>Name:</b> {cvdata.map((item) => item.name)[0]}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Email:</b> {cvdata.map((item) => item.email)[0]}
                </td>
              </tr>
              <br />
              <tr>
                <td rowSpan={2} width="50px">
                  <img
                    src={
                      'https://api.butterflymatrimonial.com/' +
                      cvdata.map((item) => item.image)[1]
                    }
                    alt="mage"
                    height="40px"
                  />
                </td>
                <td>
                  <b>Name:</b> {cvdata.map((item) => item.name)[1]}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Email:</b> {cvdata.map((item) => item.email)[1]}
                </td>
              </tr>
              <br />
              <tr>
                <td rowSpan={2} width="50px">
                  <img
                    src={
                      'https://api.butterflymatrimonial.com/' +
                      cvdata.map((item) => item.image)[2]
                    }
                    alt="mage"
                    height="40px"
                  />
                </td>
                <td>
                  <b>Name:</b> {cvdata.map((item) => item.name)[2]}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Email:</b> {cvdata.map((item) => item.email)[2]}
                </td>
              </tr>
            </table>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 ">
            <div className="preferance-div">
              <h5>Preference Data</h5>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((countPreference1 / countPreference) * 100).toFixed(2)}%
                </p>
                <p>Single</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${(countPreference1 / countPreference) * 100}%`,
                    }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((countPreference2 / countPreference) * 100).toFixed(2)}%
                </p>
                <p>Divorce</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${(countPreference2 / countPreference) * 100}%`,
                    }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((countPreference3 / countPreference) * 100).toFixed(2)}%
                </p>
                <p>Divorce without child</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${(countPreference3 / countPreference) * 100}%`,
                    }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-outer">
                <p style={{ float: 'right' }}>
                  {((countPreference4 / countPreference) * 100).toFixed(2)}%
                </p>
                <p>Divorce with child</p>
                <div className="progress progress-extra">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${(countPreference4 / countPreference) * 100}%`,
                    }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
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

export default Dashboard
