import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import whiteLogo from '../asset/image/butterfly_white.png'
import google from '../asset/image/google-play-badge1.png'
import apple from '../asset/image/the_App_Store_Badge1.png'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="backgroundColor">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div align="center">
              <img
                src={whiteLogo}
                alt="footimg"
                height={'80px'}
                width={'201px'}
              />
              <br />
              <br />
              Ullamcorper feugiat morbi volutpat vulputate fringilla ultrices
              scelerisque eget amet, arcu nisl, diam proin hendrerit duis
              <br />
              <br />
              <div>
                <a href="/">
                  <img
                    src={apple}
                    alt="imgggg"
                    height={'40px'}
                    width={'150px'}
                    style={{ paddingRight: '10px' }}
                  />
                </a>
                <a href="/">
                  <img
                    src={google}
                    alt="imgaaa"
                    height={'40px'}
                    width={'150px'}
                  />
                </a>
              </div>
              <br />
            </div>
          </Col>
          <Col xs={6} md={2} className="footerposition" align="center">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
            <br />
          </Col>
          <Col xs={6} md={2} className="footerposition" align="center">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="/">Demo product</a>
              </li>
              <li>
                <a href="/">Demo product</a>
              </li>
              <li>
                <a href="/">Demo product</a>
              </li>
              <li>
                <a href="/">Demo product</a>
              </li>
            </ul>
            <br />
          </Col>
          <Col xs={6} md={2} className="footerposition" align="center">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/">API docs</a>
              </li>
              <li>
                <a href="/">Guides</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
            <br />
          </Col>
          <Col xs={6} md={2} className="footerposition" align="center">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/">Terms of service</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
              <li>
                <a href="/">Cookie policy</a>
              </li>
              <li>
                <a href="/">Acceptable use policy</a>
              </li>
            </ul>
            <br />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <p className="reaervePosition">
              &copy; 2022 Butterfly Matrimonial. All rights reserved.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <div className="socialLogoPosition">
              <a href="/" className="socialLogo">
                <FaFacebookSquare size={35} color="white" />
              </a>{' '}
              <a href="/" className="socialLogo">
                <FaWhatsappSquare size={35} color="white" />
              </a>{' '}
              <a href="/" className="socialLogo">
                <FaInstagramSquare size={35} color="white" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
