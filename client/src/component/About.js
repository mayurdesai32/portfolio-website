import React from 'react';
import Title from './Title';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div className='About pb-5' style={{ backgroundColor: '#191970' }}>
      <Container>
        <Title content={'About Me'} />
        <p style={{ color: 'white', fontSize: '20px' }}>
          Hello, my name is Mayur Desai, and I am currently enrolled in the
          Mtech Artificial Intelligence (AI) program from the K. J. Somaiya
          Engineering and Information Technology Institute.
        </p>
      </Container>
    </div>
  );
};

export default About;
