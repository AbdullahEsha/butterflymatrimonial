import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import contact from "../asset/image/contact.png";
import Footer from "./Footer";
import MainNav from "./MainNav";

const Contact = () => {
  return (
    <>
      <MainNav />
      <div className="text_position_3">
        <h1>HOW CAN WE HELP?</h1>
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      <br />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div align="center">
              <img src={contact} alt="venus_img" className="contact_img_1" />
            </div>
          </Col>
          <Col xs={12} md={6} className="contact_text_position_1">
            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your name"
                  aria-label="Your name"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What’s your email?"
                  aria-label="your email?"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <textarea
                  class="form-control"
                  placeholder="Your question..."
                  aria-label="With textarea"
                  rows="6"
                ></textarea>
              </div>
              <br />
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Send message
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Contact;
