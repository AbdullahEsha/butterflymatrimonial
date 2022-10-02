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
import MainNav from './MainNav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <MainNav />
      <div className="background-img_1">
        <div className="text_position_2">
          <h1>
            BUTTERFLY MATRIMONIAL
            <br />
            FIND YOUR PARFECT MATCH
          </h1>
          <br id="hide_br" />
          <h6>
            Butterfly Matrimonial is a digital platform, working for complete
            match-making for selective profiles, an app for self-driven matching
            service, pre-post marriage counselling and many more.
          </h6>
          <br />
          <Link to="/venus" id="venusButton">
            Venus
          </Link>
          <br />
          <br />
          <br id="hide_br" />
          <div className="app-icon-position">
            <a
              href="https://apps.apple.com/tt/app/butterfly-matrimonial/id1582021627"
              style={{ textDecoration: 'none', paddingRight: '10px' }}
            >
              <img src={apple} alt="apple" className="app_icon_size" />{' '}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.butterflymatrimonial.app&hl=en&gl=US"
              style={{ textDecoration: 'none' }}
            >
              <img src={google} alt="google" className="app_icon_size" />
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
            <Col xs={12} md={3} id="home-do-content">
              <div className="berPadd">
                <img src={consultancy} alt="consultancy" />
                <h6 className="h6padding">Consultancy</h6>
              </div>
            </Col>
            <Col xs={12} md={3} id="home-do-content">
              <div className="berPadd">
                <img src={diamond} alt="diamond" />
                <h6 className="h6padding">Matchmaking</h6>
              </div>
            </Col>
            <Col xs={12} md={3} id="home-do-content">
              <div className="berPadd">
                <img src={pairing} alt="pairing" />
                <h6 className="h6padding">Pairing</h6>
              </div>
            </Col>
            <Col xs={12} md={3} id="home-do-content">
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
                Digital self-driven matching tools to find the best one for
                marrying by different preferences and priorities
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="background-img_2">
        <Container>
          <Row>
            <Col xs={12} md={6} id="home-content-2">
              <div className="img_1_outside">
                <div className="img_1">
                  <img src={swipe} alt="swipe" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} id="home-content-2">
              <div className="home_text_2_outside">
                <div className="text_2">
                  <h1>Download Here</h1>
                  <h6>
                    Apps for both platform - Android and IOS for your comfort
                    and easy use, download the app for simple communication and
                    smart pairing
                  </h6>
                  <div className="badge_psition">
                    <a
                      href="https://apps.apple.com/tt/app/butterfly-matrimonial/id1582021627"
                      id="badge"
                    >
                      <img src={apple} alt="apple" />{' '}
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.butterflymatrimonial.app&hl=en&gl=US"
                      id="badge"
                    >
                      <img src={google} alt="google" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text_position_3_milestone" id="text_position_3">
        <h1>MILESTONE</h1>
        <h6>
          Butterfly matrimonials introduce a new concept for matrimonial service
          where all services are under one roof which is important for every
          stage of life. Marriage counselling is important for those thinking
          about marriage and struggling in marriage life like the western
          country.
        </h6>
      </div>

      <Container>
        <Row className="container_position_1" align="center">
          <Col xs={12} md={3} id="card_2">
            <div className="card_2">
              <img src={happy} alt="happy" /> <h1>105+</h1>{' '}
              <h4>Happy Clients</h4>
            </div>
          </Col>
          <Col xs={12} md={3} id="card_2">
            <div className="card_2">
              <img src={successfull} alt="successfull" /> <h1>105+</h1>{' '}
              <h4>Successfull</h4>
            </div>
          </Col>
          <Col xs={12} md={3} id="card_2">
            <div className="card_2">
              <img src={solve} alt="solve" /> <h1>84+</h1> <h4>Solve Case</h4>
            </div>
          </Col>
          <Col xs={12} md={3} id="card_2">
            <div className="card_2">
              <img src={more} alt="more" /> <h1>240+</h1> <h4>More Help</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text_position_3">
        <h1>FOUNDER</h1>
        <h6>
          Founder dreams of spreading a happy life, making you Happy, and
          strengthening deep understanding in the relationship.
        </h6>
      </div>
      <div className="background-img_3">
        <Container>
          <Row>
            <Col xs={12} md={6} id="apu_img_content">
              <img src={apu} alt="apu" className="img_possition_1" />
            </Col>
            <Col xs={12} md={6} id="apu_img_content">
              <div className="home_text_3_outside">
                <div className="text_3">
                  <h1>Huraira Shishir</h1>
                  <h6>
                    Accomplished professional with a long experience spanning
                    over the last two decades. Currently, running an online
                    matrimonial platform and working as a relationship
                    consultant. She believes simplicity and respectful
                    relationships are the key to happiness and success.
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text_position_3">
        <h1>SUCCESS STORIES</h1>
        <h6>
          Butterfly Matrimonial always focuses and Prioritaiz couple’s
          happiness, comfort, privacy, and security. Venus package also keeps
          those promises and relations transparency on social media. Best of
          Luck.
        </h6>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_1} alt="card_1" />
              <h3>Shamshad & Sheshir</h3>
              <h6>
                Attainment of your right match is never being that easy. There
                is always a gap between your expectations & reality, at least in
                case of selecting your partner. You need to be passionate,
                confident, honest, aggressive and logical.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_2} alt="card_2" />
              <h3>Ruzdina & Iftekhar</h3>
              <h6>
                Match making was always a toughest Job but technology brought
                the changes and internet make this task toughest to tough now.
                Electronic platforms now enable us to select, cross check,
                decide & execute in shortest possible time with less effort &
                money.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_3} alt="card_3" />
              <h3>Tithi & Mahfuz</h3>
              <h6>
                As the Founder of Butterfly has quality skills, experiences and
                social contact, we just trust on her expertise and depends.
                Result, we have found our soulmate. If you want the same with
                privacy. Yes you can confidently depends on Butterfly Venus
                Package .
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="text_position_3">
        <h1>AFFILIATION</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
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
      </Container> */}
      <br />
      <Footer />
    </>
  )
}

export default Home
