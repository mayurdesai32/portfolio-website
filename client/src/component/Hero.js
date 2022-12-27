import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import mainImg from '../assert/mainImg.jpg';
const Hero = () => {
  return (
    <div className='hero' style={{ backgroundColor: '#191970' }}>
      <Container>
        <Row style={{ marginBottom: '30px' }}>
          <Col
            sm={12}
            md={8}
            style={{
              minHeight: '83vh',
            }}
            // order-lg-1
            // order-xs-2
            className='d-flex flex-column justify-content-center order-lg-1
         order-xs-2 order-sm-last  '
          >
            <h3 style={{ color: 'white' }}>Hi, I am Mayur Desai </h3>
            <h1 style={{ color: '#FFD700' }}>Full Stack Developer</h1>
            <p style={{ color: 'white' }}>
              I am fullstack developer who loves to code and is always
              passionate to learn new technologies
            </p>

            <div>
              <Button style={{ marginRight: '10px' }} variant='light'>
                Contact Me
              </Button>
              <Button variant='light' ms-5 ms={5}>
                Download CV
              </Button>
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            // order-lg-2
            // order-sm-1
            className='d-flex flex-column order-lg-2
           order-sm-1 justify-content-center order-sm-first '
          >
            {/* order-sm-first */}
            <div className='image'>
              <Image src={mainImg} fluid className='rounded-circle ' />
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center pb-5'>
          <i
            className='fa-brands fa-linkedin-in rounded-circle'
            style={{
              backgroundColor: '#FFD700',
              // fontSize: '25px',
              padding: 5,
              border: '2px solid #FFD700',
              marginRight: '8px',
            }}
          ></i>

          <i
            className='fa-regular fa-envelope rounded-circle'
            style={{
              backgroundColor: '#FFD700',
              marginRight: '8px',
              padding: 5,
              border: '2px solid #FFD700',
            }}
          ></i>

          <i
            className='fa-brands fa-whatsapp rounded-circle'
            style={{
              backgroundColor: '#FFD700',

              padding: 5,
              border: '2px solid #FFD700',
            }}
          ></i>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
