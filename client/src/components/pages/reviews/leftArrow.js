import React, { Component } from 'react';
import leftArrowLogo from './leftArrow.png';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <img src={leftArrowLogo} alt="leftArrow" height="42" width="42"/>
    </div>
  );
}

export default LeftArrow;
