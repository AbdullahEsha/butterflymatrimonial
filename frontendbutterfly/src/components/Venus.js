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
          Butterfly Matrimonial is a digital platform, we use machine-learning
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
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
              Butterfly Matrimonial is a digital platform, we use
              machine-learning algorithm paired with artificial intelligence to
              generate personalized recommendations.
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
                Register for Butterfly Venus for an exclusive and complete
                manual matching system.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4} id="card_3">
            <div className="card_3">
              <img src={uil_processor} alt="uil_processor" /> <h3>Process</h3>{' '}
              <h6>
                We will contact you for payment, final processing will start
                after confirmation and payment.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4} id="card_3">
            <div className="card_3">
              <img src={communication} alt="communication" />{' '}
              <h3>Communication</h3>{' '}
              <h6>
                Any problem with registration, please send your NID, Resume &
                Photos to butter@gmail.com
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
        <h1>Lorem Ipsum</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
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
                <h1>Lorem Ipsum</h1>
                <h6>
                  Butterfly Matrimonial is a digital platform, we use
                  machine-learning algorithm paired with artificial intelligence
                  to generate personalized recommendations.Butterfly Matrimonial
                  is a digital platform,we use machine-learning algorithm.
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="venus_text_position_4">
        <h1>SUCCESS STORIES</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_1} alt="card_1" />
              <h3>Shuvo & Sanjana</h3>
              <h6>
                Butterfly Matrimonial is a digital platform, we use
                machine-learning algorithm paired with artificial intelligence
                to generate many personalized recommendations.
              </h6>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card">
              <img src={card_2} alt="card_2" />
              <h3>Hasib & Preti</h3>
              <h6>
                Butterfly Matrimonial is a digital platform, we use
                machine-learning algorithm paired with artificial intelligence
                to generate many personalized recommendations.
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
                to generate many personalized recommendations.
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
