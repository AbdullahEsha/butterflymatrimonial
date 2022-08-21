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
import { Link } from 'react-router-dom'

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
                <a href="https://apps.apple.com/tt/app/butterfly-matrimonial/id1582021627">
                  <img
                    src={apple}
                    alt="imgggg"
                    height={'40px'}
                    width={'150px'}
                    style={{ paddingRight: '10px' }}
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.butterflymatrimonial.app&hl=en&gl=US">
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
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/career">Career`s</Link>
              </li>
              <li>
                <Link to="/blog">Blog`s</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
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
                <Link to="/guide">Guides</Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
            </ul>
            <br />
          </Col>
          <Col xs={6} md={2} className="footerposition" align="center">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/terms">Terms of service</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie policy</Link>
              </li>
              <li>
                <Link to="/acceptable-use-policy">Acceptable use policy</Link>
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
              <a
                href="https://www.facebook.com/butterflymatrimonial/"
                className="socialLogo"
              >
                <FaFacebookSquare size={35} color="white" />
              </a>{' '}
              <a
                href="https://web.whatsapp.com/send?phone='+8801951271550'"
                className="socialLogo"
              >
                <FaWhatsappSquare size={35} color="white" />
              </a>{' '}
              <a
                href="https://www.instagram.com/butterflymatrimonial/"
                className="socialLogo"
              >
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
