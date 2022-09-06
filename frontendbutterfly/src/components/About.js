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
      <div className="about_background-img_1">
        <div className="about_text_position_1">
          <h1>
            BUTTERFLY MATRIMONIAL <br />
            YOUR PARFECT MATCH MAKER
          </h1>
          <br id="hide_br" />
          <h6>
            Butterfly Matrimonial is a digital platform, working for complete
            match-making for selective profiles, an app for self-driven matching
            service, pre-post marriage counselling and many more.
          </h6>
        </div>
      </div>
      <div className="about_text_position_2">
        <h1>HOW IT’S WORKS?</h1>
        <h6>
          Butterfly Matrimonial offers matrimonial service, consultancy and a
          smart platform where every adult can join in searching for soulmates.
          It’s a digital matchmaking platform not dating.
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
                <h2>Venus</h2>
                <h6>
                  Traditional and confidential one to one matchmaking service,
                  where we focus on preferences, Family structure, and
                  personality.
                </h6>
              </div>
            </Col>
            <Col xs={12} md={4} id="pairing">
              <div className="berPadd">
                <img src={uil_processor} alt="diamond" />
                <br />
                <br />
                <h2>Matrimonial Apps</h2>
                <h6>
                  Apps for both Android and IOS device. as an individuals can
                  contact and connect easily and have conversation as their
                  desire selective one.
                </h6>
              </div>
            </Col>
            <Col xs={12} md={4} id="pairing">
              <div className="berPadd">
                <img src={communication} alt="pairing" />
                <br />
                <br />
                <h2>Consultancy</h2>
                <h6>
                  Pre and post marriage counselling service, which helps
                  individuals and couple to have, make and maintain long term
                  valued relationship.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about_text_position_13">
        <h1>OUR TEAM</h1>
        <h6>
          It's a very dynamic and creative young team for creating a difference.
        </h6>
      </div>
      {width > 767 ? (
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
      <Footer />
    </>
  )
}

export default About
