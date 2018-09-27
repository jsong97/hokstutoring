import React, { Component } from 'react';

import rightArrowLogo from './rightArrow.png';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <img src={rightArrowLogo} alt="rightArrow" height="42" width="42"/>
    </div>
  );
}

export default RightArrow;
