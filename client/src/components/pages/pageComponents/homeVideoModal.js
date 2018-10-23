import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import playButton from '../../../Assets/playButton.png';
import './custom_animation.css';


export default class homeVideoModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          open: false,
      };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="homeVideo">
        <div className="homeVideoName">
          <div className="homeVideoQuestion">
            <p> Ready for a new start? </p>
          </div>
        </div>
        <div className="homeVideoPlayer">
          <img src={this.props.imgSrc} width="560" height="315"/>
          <img className="playButton" src={playButton} alt="playButton" height="70.98" width="106.47" onClick={this.onOpenModal}/>{' '}
        </div>

        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >
          <div className="closeButton"/>
          <iframe width="784" height="441" src={this.props.vidSrc} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q118"></iframe>
        </Modal>
      </div>
    );
  }
}
