import React from 'react';
import Title from './Title';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Project = () => {
  return (
    <div className='Project pb-5' style={{ backgroundColor: '#191970' }}>
      {' '}
      <Container>
        <Title content={'My Projects'} />
        <Row
          style={{
            marginBottom: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        ></Row>
      </Container>
    </div>
  );
};
export default Project;
