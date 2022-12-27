import React from 'react';
import Title from './Title';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Contact = () => {
  return (
    <div
      className='Contact pb-5'
      style={{ backgroundColor: '#191970', color: 'white' }}
    >
      <Container>
        <Title content={'Contact Me'} />
        <h3
          style={{
            color: 'white',
          }}
        >
          Contact Details
        </h3>
        <Row>
          <Col sm={12} md={7}>
            <Form>
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label
                    style={{
                      color: '#FFD700',
                    }}
                  >
                    Name
                  </Form.Label>
                  <Form.Control type='text' placeholder='Enter Your Name' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label
                    style={{
                      color: '#FFD700',
                    }}
                  >
                    Email
                  </Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
              </Row>

              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label
                  style={{
                    color: '#FFD700',
                  }}
                >
                  Message
                </Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={12} md={5}>
            <Row>
              <Col sm={6}>
                <h5
                  style={{
                    color: '#FFD700',
                  }}
                >
                  Quick Links
                </h5>
                <a
                  href='http://'
                  style={{
                    marginRight: '20px',
                  }}
                >
                  Home
                </a>
                <a
                  href='http://'
                  style={{
                    marginRight: '20px',
                  }}
                >
                  About
                </a>
                <a
                  href='http://'
                  style={{
                    marginRight: '20px',
                  }}
                >
                  Skills
                </a>
                <a
                  href='http://'
                  style={{
                    marginRight: '20px',
                  }}
                >
                  Project
                </a>
              </Col>

              <Col sm={6}>
                <h5
                  style={{
                    color: '#FFD700',
                  }}
                >
                  Email Address
                </h5>
                <p>msdesai32@gmail.com</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <h5
                  style={{
                    color: '#FFD700',
                  }}
                >
                  Mobile Contact
                </h5>
                <p>9372191971</p>
              </Col>

              <Col sm={6}>
                <h5
                  style={{
                    color: '#FFD700',
                  }}
                >
                  Based In
                </h5>
                <p>
                  Virar East ,Mumbai,
                  <br />
                  Maharashtra-India
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
