import React, { useState } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import contact from '../asset/image/contact.png'
import Footer from './Footer'
import MainNav from './MainNav'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
  const [validationError, setValidationError] = useState({})
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    question: '',
  })

  const addContact = async (event) => {
    event.preventDefault()

    await axios
      .post(
        `https://api.butterflymatrimonial.com/api/post/contact/new`,
        contactData,
      )
      .then(({ data }) => {
        Swal.fire({
          icon: 'success',
          text: data.message,
        }).then(function () {
          window.location = 'https://butterflymatrimonial.com/contact'
        })
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors)
          Swal.fire({
            title: 'Error!',
            text: validationError,
            icon: 'error',
          })
        } else {
          Swal.fire({
            text: response.data.message,
            icon: 'error',
          })
        }
      })
  }

  return (
    <>
      <MainNav />
      <div className="text_position_3">
        <h1>HOW CAN WE HELP?</h1>
        <h6>
          Butterfly aims only to facilitate personal advertisement for a lawful
          marriage alliance between persons who are legally competent to enter
          into matrimony under the laws to which they are subject. Through
          Facebook inbox, Instagram, call, and email, You can easily communicate
          with the team for our assistance.
        </h6>
      </div>
      <br />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="contact_img_1_outside">
              <div align="center" className="contact_img_1">
                <img src={contact} alt="venus_img" />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="contact_text_position_1">
            <Form onSubmit={addContact}>
              <div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your name"
                    aria-label="Your name"
                    aria-describedby="basic-addon1"
                    name="name"
                    value={contactData.name}
                    onChange={(event) =>
                      setContactData({
                        ...contactData,
                        name: event.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="What’s your email?"
                    aria-label="your email?"
                    aria-describedby="basic-addon1"
                    name="email"
                    value={contactData.email}
                    onChange={(event) =>
                      setContactData({
                        ...contactData,
                        email: event.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div class="input-group">
                  <textarea
                    class="form-control"
                    placeholder="Your question."
                    aria-label="With textarea"
                    rows="6"
                    name="question"
                    value={contactData.question}
                    onChange={(event) =>
                      setContactData({
                        ...contactData,
                        question: event.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  id="btn-primary"
                >
                  Send message
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  )
}

export default Contact
