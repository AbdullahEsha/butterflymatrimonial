import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import google from '../asset/image/google-play-badge1.png'
import apple from '../asset/image/the_App_Store_Badge1.png'
import consultancy from '../asset/image/Consultancy.png'
import diamond from '../asset/image/diamond-ring.png'
import pairing from '../asset/image/pairing.png'
import othars from '../asset/image/othars.png'
import swipe from '../asset/image/web-swipe.png'
import happy from '../asset/image/happy.png'
import more from '../asset/image/more.png'
import solve from '../asset/image/solve.png'
import successfull from '../asset/image/successfull.png'
import apu from '../asset/image/apu.png'
import card_1 from '../asset/image/card_1.png'
import card_2 from '../asset/image/card_2.png'
import card_3 from '../asset/image/card_3.png'
import logo_1 from '../asset/image/logo_1.png'
import logo_2 from '../asset/image/logo_2.png'
import logo_3 from '../asset/image/logo_3.png'
import logo_4 from '../asset/image/logo_4.png'
import MainNav from './MainNav'
import Footer from './Footer'

function Home() {
  return (
    <>
      <MainNav />
      <div className="background-img_1"></div>
      <div align="center" className="text_position_1"></div>
      <div id="main_position">
        <div className="text_position_2">
          <h1>
            BUTTERFLY MATRIMONIAL
            <br /> YOUR PARFECT MATCH MAKER
          </h1>
          <br />
          <h6>
            Butterfly Matrimonial is a digital platform, we use machine-learning
            algorithm paired with <br />
            artificial intelligence to generate personalized recommendations.
          </h6>
          <br />
          <a href="/venus" id="venusButton">
            Venus
          </a>{' '}
          <br />
          <br />
          <br />
          <div>
            <a
              href="/"
              style={{ textDecoration: 'none', paddingRight: '10px' }}
            >
              <img src={apple} alt="apple" height="50px" />{' '}
            </a>
            <a href="/" style={{ textDecoration: 'none' }}>
              <img src={google} alt="google" height="50px" />
            </a>
          </div>
        </div>
      </div>

      <div className="ber_position">
        <Container>
          <Row id="rds" align="center">
            <Col xs={12} md={12}>
              <div className="berPaddtop">
                <h1 className="h6padding">What we do?</h1>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="berPadd">
                <img src={consultancy} alt="consultancy" />
                <h6 className="h6padding">Consultancy</h6>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="berPadd">
                <img src={diamond} alt="diamond" />
                <h6 className="h6padding">Matchmaking</h6>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="berPadd">
                <img src={pairing} alt="pairing" />
                <h6 className="h6padding">Pairing</h6>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="berPadd">
                <img src={othars} alt="othars" height="75px" />
                <h6 className="h6padding">Others</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={12} align="center">
            <div className="text_padding_2">
              <h1>DOWNLOAD THE APP</h1>
              <h6>
                Butterfly Matrimonial is a digital platform, we use
                machine-learning <br />
                algorithm paired with artificial intelligence to generate
                personalized recommendations.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div className="background-img_2">
        <Container className="possition_content_1">
          <Row>
            <Col xs={12} md={6}>
              <img src={swipe} alt="swipe" className="img_1" />
            </Col>
            <Col xs={12} md={6}>
              <div className="text_2">
                <h1>Download Here</h1>
                <h6>
                  Butterfly Matrimonial is a digital platform, we use
                  machine-learning <br />
                  algorithm paired withartificial intelligence to generate
                  personalized recommendations.
                </h6>
                <div className="badge_psition">
                  <a href="/" id="badge">
                    <img src={apple} alt="apple" height="40px" />{' '}
                  </a>
                  <a href="/" id="badge">
                    <img src={google} alt="google" height="40px" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text_position_3" id="text_position_3">
        <h1>MILESTONE</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>

      <Container>
        <Row className="container_position_1" align="center">
          <Col xs={12} md={3}>
            <div className="card_2">
              <img src={happy} alt="happy" /> <h1>105+</h1>{' '}
              <h4>Happy Clients</h4>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="card_2">
              <img src={successfull} alt="successfull" /> <h1>105+</h1>{' '}
              <h4>Successfull</h4>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="card_2">
              <img src={solve} alt="solve" /> <h1>84+</h1> <h4>Solve Case</h4>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="card_2">
              <img src={more} alt="more" /> <h1>240+</h1> <h4>More Help</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text_position_3">
        <h1>FOUNDER</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      <div className="background-img_3">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <img src={apu} alt="apu" className="img_possition_1" />
            </Col>
            <Col xs={12} md={6}>
              <div className="text_3">
                <h1>Huraira Shishir</h1>
                <h6>
                  Butterfly Matrimonial is a digital platform, we use
                  <br />
                  machine-learning algorithm paired with artificial intelligence
                  to generate personalized recommendations.Butterfly Matrimonial
                  is a digital platform,we use machine-learning algorithm.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text_position_3">
        <h1>SUCCESS STORIES</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning{' '}
          <br /> algorithm paired with artificial intelligence to generate
          personalized recommendations.
        </h6>
      </div>
      <br />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_1} alt="card_1" />
              <h3>Shuvo & Sanjana</h3>
              <h6>
                Butterfly Matrimonial is a digital platform, we use
                machine-learning algorithm paired with artificial intelligence
                to generate personalized recommendations.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_2} alt="card_2" />
              <h3>Hasib & Pritty</h3>
              <h6>
                Butterfly Matrimonial is a digital platform, we use
                machine-learning algorithm paired with artificial intelligence
                to generate personalized recommendations.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_3} alt="card_3" />
              <h3>Salman & Julekha</h3>
              <h6>
                Butterfly Matrimonial is a digital platform, we use
                machine-learning algorithm paired with artificial intelligence
                to generate personalized recommendations.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text_position_3">
        <h1>AFFILIATION</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning{' '}
          <br /> algorithm paired with artificial intelligence to generate
          personalized recommendations.
        </h6>
      </div>
      <Container>
        <Row align="center">
          <Col xs={6} md={3}>
            <div className="logosize">
              <img src={logo_1} alt="logo_1" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="logosize">
              <img src={logo_2} alt="logo_2" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="logosize">
              <img src={logo_3} alt="logo_3" />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="logosize">
              <img src={logo_4} alt="logo_4" />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  )
}

export default Home
