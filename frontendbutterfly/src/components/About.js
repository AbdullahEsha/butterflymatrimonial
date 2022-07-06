import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import codicon from '../asset/image/codicon.png'
import communication from '../asset/image/communication.png'
import uil_processor from '../asset/image/uil_processor.png'
import team_1 from '../asset/image/team_1.png'
import team_2 from '../asset/image/team_2.png'
import team_3 from '../asset/image/team_3.png'
import Footer from './Footer'
import MainNav from './MainNav'
import useWindowDimensions from './useWindowDimensions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const About = () => {
  const { width } = useWindowDimensions()

  const teamProfile = [
    {
      id: 1,
      name: 'Salman H Saikote',
      designation: 'CTO',
      image: team_1,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    {
      id: 2,
      name: 'Huraira Shishir',
      designation: 'Founder & CEO',
      image: team_2,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    {
      id: 3,
      name: 'Arjo Neel',
      designation: 'COO',
      image: team_3,
      social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
  ]

  return (
    <>
      <MainNav />
      <div className="about_background-img_1"></div>
      <div className="about_overlay_1"></div>
      <div className="about_text_position_1">
        <h1>
          BUTTERFLY MATRIMONIAL <br />
          YOUR PARFECT MATCH MAKER
        </h1>
        <br />
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      <div className="about_text_position_2">
        <h1>HOW IT’S WORKS?</h1>
        <br />
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      <div className="ber_position_about">
        <Container>
          <Row id="rds_about" align="center">
            <Col xs={12} md={4}>
              <div className="berPadd">
                <img src={codicon} alt="consultancy" />
                <br />
                <br />
                <h2>Lorem Ipsum</h2>
                <h6>
                  Register for Butterfly Venus for an exclusive and complete
                  manual matching system.
                </h6>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="berPadd">
                <img src={uil_processor} alt="diamond" />
                <br />
                <br />
                <h2>Lorem Ipsum</h2>
                <h6>
                  Register for Butterfly Venus for an exclusive and complete
                  manual matching system.
                </h6>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="berPadd">
                <img src={communication} alt="pairing" />
                <br />
                <br />
                <h2>Lorem Ipsum</h2>
                <h6>
                  Register for Butterfly Venus for an exclusive and complete
                  manual matching system.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about_text_position_21">
        <h1>OUR TEAM</h1>
        <br />
        <h6>
          Butterfly Matrimonial is a digital platform, we use machine-learning
          <br />
          algorithm paired with artificial intelligence to generate personalized
          recommendations.
        </h6>
      </div>
      {width > 600 ? (
        <Container id="teamPosition">
          <Row>
            <Col xs={12} md={4}>
              <div className="team_position">
                <img src={team_1} alt="Salman" />
                <h3>Salman H Soikat</h3>
                <h6>CTO</h6>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="team_position">
                <img src={team_2} alt="Huraira" />
                <h3>Huraira Shishir</h3>
                <h6>Founder & CEO</h6>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="team_position">
                <img src={team_3} alt="Arjo" />
                <h3>Arjo Neel</h3>
                <h6>COO</h6>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={false}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            slidesPerView={1.6}
            centeredSlides
            pagination
            initialSlide={1.6}
            style={{ width: '100%', margin: 'auto', padding: '20px' }}
          >
            {teamProfile.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team_position">
                  <img className="" src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}
      <br />
      <Footer />
    </>
  )
}

export default About
