import React from 'react';

const Dial = (props) => {
  return (
    <div style={{ border: '2px solid red', margin: '22px' }}>
      <h3>This a dail</h3>
      <p>stepls to far:{props.steps}</p>
    </div>
  );
};

export default Dial;