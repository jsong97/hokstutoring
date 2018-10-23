import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import blogArticle from '../blogArticle';

const Roster = () => (
  <Switch>
    <Route path='/blog/:number' component={blogArticle}/>
  </Switch>
)

export default class articleSlip extends React.Component {
  render() {
    return (
      <div className="blogSlips">
        <div className="blogSlip">
          <div className="blogImage">
            <img src={this.props.picture} width="356" height="200"/>
          </div>
          <div className="blogTitle">
            <p>{this.props.title}</p>
          </div>
          <div className="blogDescription">
            <p>{this.props.description}</p>
            <div className="blogAuthor">
              <p>by {this.props.author}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
