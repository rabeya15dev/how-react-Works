import React from 'react';
import DeviceDetails from './Device Details/DeviceDetails';

const Device = (props) => {
  return (
    <div>
      <h2>Hello{props.name}</h2>
      <DeviceDetails price={props.price}></DeviceDetails>
    </div>
  );
};

export default Device;