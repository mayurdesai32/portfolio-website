import React from 'react';

const Title = ({ content }) => {
  return (
    <div className='pb-5'>
      <h1
        style={{
          textAlign: 'center',
          color: 'red',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {content}
      </h1>
      <div
        style={{
          textAlign: 'center',
          color: '#FFD700',
          // borderBottom: '125px',
          borderBottomWidth: '1px',
          borderBottomRadius: '90%',
          width: '70px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderColor: '#FFD700',
          borderStyle: 'solid',
        }}
      ></div>
    </div>
  );
};

export default Title;
