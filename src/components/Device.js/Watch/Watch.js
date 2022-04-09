import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newStepCount = steps + 1;
    setSteps(newStepCount);
  }


  useEffect(() => {
    console.log(steps)
  }, [steps])
  return (
    <div style={{ border: '3px solid pink', margin: '20px' }}>
      <h2>This is my Watch</h2>
      <h3>My Current steps:{steps}</h3>
      <button onClick={increaseSteps}>DE Dour..........</button>
      <Display name="der" steps={steps}></Display>
    </div>
  );
};

export default Watch;