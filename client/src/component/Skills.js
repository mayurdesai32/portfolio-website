import React from 'react';
import Title from './Title';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from './Card';
const website = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React Js',
  'Node Js',
  'Express Js',
  'MongoDB',
  'MySql',
  'Github',
  'Python',
  'Django',
];

const ml_ai = [
  'Machine Learning',
  'NLP',
  'Deep learning',
  'Computer Vision',

  'SkLearn',
  'TensorFlow-keras',
  'Numpy',
  'pandas',
  'Matplotlib',
];

const Skills = () => {
  return (
    <div className='skill pb-5' style={{ backgroundColor: '#191970' }}>
      <Container>
        <Title content={'My Skills'} />
        <Row
          style={{
            marginBottom: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Col
            sm={12}
            md={6}
            style={{
              marginBottom: '20px',
            }}
          >
            <div style={{ maxWidth: '480px' }}>
              {' '}
              <h3
                style={{
                  color: '#FFD700',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                Web Development
              </h3>
              {website.map((ele, i) => (
                <Badge
                  bg='secondary'
                  style={{
                    marginLeft: '9px',
                    fontSize: '18px',
                    marginBottom: '9px',
                  }}
                  key={i}
                >
                  {ele}
                </Badge>
              ))}
            </div>
          </Col>

          <Col
            sm={12}
            md={6}
            style={{
              marginBottom: '20px',
            }}
          >
            <h3
              style={{
                color: '#FFD700',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              AI/Ml Development
            </h3>
            <div
              style={{
                maxWidth: '480px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <>
                {ml_ai.map((ele, i) => (
                  <Badge
                    bg='secondary'
                    style={{
                      marginLeft: '9px',
                      fontSize: '18px',
                      marginBottom: '9px',
                    }}
                    key={i}
                  >
                    {ele}
                  </Badge>
                ))}
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
