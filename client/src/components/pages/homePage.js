import React, { Component } from 'react';
import posed from "react-pose";
import { render} from "react-dom";
import styled from "styled-components";
import { tween } from "popmotion";
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import { Redirect } from 'react-router-dom';


import Customers from './customers/customers';
import Reviews from './reviews/reviews';
import Slider from './reviews/slider';
import Queries from './queries';
import Game from './tileGame/game';
import Map from './myMap';
import HomeVideoModal from './modals/homeVideoModal';
// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 2em;
  padding: 2em;
  margin-bottom: 3em;

  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;
  /* grid-auto-rows: 20em; */
  grid-auto-rows: minmax(8em, auto);
`;

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      hovering1: false,
      hovering2: false,
      hovering3: false,
      redirect1: false,
      redirect2: false,
      redirect3: false
    }
  }

  setRedirectOne = () => {
    this.setState({
      redirect1: true
    })
  }

  setRedirectTwo = () => {
    this.setState({
      redirect2: true
    })
  }

  setRedirectThree = () => {
    this.setState({
      redirect3: true
    })
  }

  renderRedirectOne = () => {
    if (this.state.redirect1) {
      return <Redirect to='/MathMethods' />
    }
  }

  renderRedirectTwo = () => {
    if (this.state.redirect2) {
      return <Redirect to='/SpecialistMaths' />
    }
  }

  renderRedirectThree = () => {
    if (this.state.redirect3) {
      return <Redirect to='/UniversityMaths' />
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="homePage">

          <div className="titleBox">
            <div className="title">
              <div className="titleIntro">
                <h1>Hi Guys!</h1>
              </div>
              <div className="titleDesc">
                <div className="topDesc">
                  <h2> I'm <span>Hok</span> and I tutor Specialist's Maths, Math Methods,
                  and University level maths!</h2>
                  <div className="contentPage">
                    <div className="introduction">
                      <div className="videoPlayer">
                        <HomeVideoModal imgSrc="http://i.ytimg.com/vi/Cjin35nhXJo/maxresdefault.jpg" vidSrc="https://www.youtube.com/embed/x78Ay6Kvb3k"/>
                      </div>
                      <div className="textIntro">
                        <p> I started my freelance tutoring business back in 2016 because I discovered that I loved teaching, and I wanted to share my tips and tricks on how to get straight As in all your Math subjects!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="titleOffer"> What I Offer </h2>
                <div className="offerings">
                  <div className="private">
                    <div className="classTitle">
                      <p>Private Classes</p>
                    </div>
                    <div className="classOffer">
                      <p>Homework Help</p>
                      <p>Individualized Curriculum</p>
                      <p>2 or 3 Sessions Per Week</p>
                      <p>Worksheets, assignments, and solution keys are provided to help you learn best</p>
                    </div>
                    <div className="signUpButton">
                      <a href="/signUp">Ready to get started?</a>
                    </div>
                  </div>
                  <div className="group">
                    <div className="classTitle">
                      <p>Group Classes</p>
                    </div>
                    <div className="classOffer">
                      <p>Conceptual Topics</p>
                      <p>Make Friends!</p>
                      <p>2 or 3 Sessions Per Week</p>
                      <p>Worksheets, assignments, and solution keys are provided to help you learn best</p>
                    </div>
                    <div className="signUpButton">
                      <a href="/signUp">Ready to get started?</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="newsLetter">
        <div class="login-page">
          <div class="form">
            <form class="register-form">
              <p class="newsLetterMessage">Want to get <br/><span> AWESOME FREEBIES? </span> </p>
              <input type="text" placeholder="Email"/>
              <button>sign up for my newsletter</button>
            </form>
          </div>
        </div>
        </div>

        <div className = "mapBlock">
          <h2>I tutor in the <span>CBD</span> and in <span>Springvale</span></h2>
          <Map
            containerElemenet={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />} />
        </div>

        <div className="funBlock">
        </div>

        <div className="topicBlock">
          <h1> Topics </h1>
          <Container>
            <div className="styledSquare one" onClick={this.setRedirectOne}>
              {this.renderRedirectOne()}
              <p>Math<br/>Methods</p>
            </div>

            <div className="styledSquare two" onClick={this.setRedirectTwo}>
              {this.renderRedirectTwo()}
              <p>Specialist<br/>Maths</p>
            </div>

            <div className="styledSquare three" onClick={this.setRedirectThree}>
              {this.renderRedirectThree()}
              <p>University<br/>Studies</p>
            </div>
          </Container>
        </div>



        <Slider />
      </div>
    );
  }

  openMethodsModal(){
    this.setState({isMethodsModalOpen:true})
  }

  closeMethodsModal(){
    this.setState({isMethodsModalOpen:false})
  }
}

export default HomePage;
