import React, { useState } from 'react';
import { AccessAlarm, ThreeDRotation, ThumbUpAlt } from '@material-ui/icons';

const App = () => {
  const [likeColor, setLikeColor] = useState('');
  const handleClick = () => {
    const newColor = likeColor ? '' : 'primary';
    setLikeColor(newColor);
  };
  return (
    <div>
      <h1>hello</h1>
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
      <ThumbUpAlt onClick={handleClick} color={likeColor}></ThumbUpAlt>
    </div>
  );
};

export default App;
