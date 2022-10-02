import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import codicon from '../asset/image/codicon.png'
import communication from '../asset/image/communication.png'
import uil_processor from '../asset/image/uil_processor.png'
import venus_img from '../asset/image/venus_img.png'
import card_1 from '../asset/image/card_1.png'
import card_2 from '../asset/image/card_2.png'
import card_3 from '../asset/image/card_3.png'
import Footer from './Footer'
import MainNav from './MainNav'

const Venus = () => {
  return (
    <>
      <MainNav />
      <div className="text_position_3">
        <h1>VENUS</h1>
        <h6>
          This package is designed for Elite people, who don’t want to register
          for our Regular online service packages.
        </h6>
      </div>
      <Container>
        <div className="venus_background_img_1">
          <div className="venus_text_position_2">
            <h1>
              BUTTERFLY MATRIMONIAL <br />
              YOUR PARFECT MATCH MAKER
            </h1>
            <br id="hide_br" />
            <h6>
              Butterfly Matrimonial is a digital platform, working for complete
              match-making for selective profiles, an app for self-driven
              matching service, pre-post marriage counselling and many more.
            </h6>
          </div>
        </div>
      </Container>
      <Container align="center">
        <Row id="card-position">
          <Col xs={12} md={4}>
            <div className="card_3">
              <img src={codicon} alt="codicon" /> <h3>Registration</h3>{' '}
              <h6>
                To register as a member of Butterfly or use this Site, you must
                be legally competent and of legal marriageable age as per the
                laws of Bangladesh
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4} id="card_3">
            <div className="card_3">
              <img src={uil_processor} alt="uil_processor" /> <h3>Process</h3>{' '}
              <h6>
                Throughout the extensive conversations, we processed and
                continued processing together.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4} id="card_3">
            <div className="card_3">
              <img src={communication} alt="communication" />{' '}
              <h3>Communication</h3>{' '}
              <h6>
                We appreciate one to one communication through profile privacy
                and are careful about profile respect and desire.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="getVenus">
        <Link to="/venus" id="venusButtonGet">
          Get Venus
        </Link>
      </div>
      <div className="venus_text_position_3">
        <h1>OBJECTIVE</h1>
        <h6>
          Butterfly Matrimonial focuses on happy family life and believes that
          every life has the right to Love and be Loved by a special one in a
          particular lifetime. And working for a healthy family journey where
          support, happiness, and success are meant by togetherness.
        </h6>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6} id="venus_text">
            <div align="center">
              <img src={venus_img} alt="venus_img" className="venus_img_1" />
            </div>
          </Col>
          <Col xs={12} md={6} id="venus_text">
            <div className="venus_text_position_1_outside">
              <div className="venus_text_position_1">
                <h1>QUOTES</h1>
                <h6>
                  "Happy couples are not readymade. They love & Trust, care &
                  support each other, struggle and cry together, fight and
                  sacrifice for others, and they always stay compassionate and
                  committed to the relationship till their last breath."
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="venus_text_position_4">
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
              <h3>Pritty & Hasib</h3>
              <h6>
                Butterfly & we’ve Kicked of our Journey almost at the same time.
                Perfection, proper communication, Timeliness and Technological
                advanced features are their main Key to operate with ultimate
                success. We got our soulmate through this platform.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  )
}

export default Venus
