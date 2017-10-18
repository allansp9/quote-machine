import React, { Component } from 'react';
import ShareButton from './ShareButton';
import { Button } from 'react-bootstrap';

class QuoteMachine extends React.Component {
  render () {
    return (
      <div className="App container-fluid">
          <div className="row align-items-center">
            <div className="col align-self-center">
              <blockquote className="blockquote">
                <p>{this.props.quote}</p>
                <footer className="blockquote-footer">
                  <cite>{this.props.author}</cite>
                </footer>
              </blockquote>
              <ShareButton />
              <Button bsStyle="dark" bsSize="large" onClick={this.getQuote}>New Quote!</Button>
            </div>
        </div>
      </div>
    );
  }
};

export default QuoteMachine;
