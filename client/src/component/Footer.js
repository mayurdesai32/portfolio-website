import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
  return (
    <div
      className='Footer pb-5'
      style={{ backgroundColor: '#191970', color: '#FFD700' }}
    >
      <Container>
        <Row
          style={
            {
              // marginBottom: '30px',
              // marginLeft: 'auto',
              // marginRight: 'auto',
            }
          }
        >
          <Col>
            <p>Mayur Desai</p>
          </Col>
          <Col>
            <p>Mayur Desai©2022| All Rights Reserved</p>
          </Col>
          <Col>
            <p>
              <i
                className='fa-brands fa-linkedin-in rounded-circle'
                style={{
                  backgroundColor: '#FFD700',
                  // fontSize: '25px',
                  padding: 5,
                  border: '2px solid #FFD700',
                  marginRight: '8px',
                  color: 'black',
                }}
              ></i>{' '}
              <i
                className='fa-regular fa-envelope rounded-circle'
                style={{
                  backgroundColor: '#FFD700',
                  marginRight: '8px',
                  padding: 5,
                  border: '2px solid #FFD700',
                  color: 'black',
                }}
              ></i>
              <i
                className='fa-brands fa-whatsapp rounded-circle'
                style={{
                  backgroundColor: '#FFD700',
                  color: 'black',
                  padding: 5,
                  border: '2px solid #FFD700',
                }}
              ></i>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
