import React, { Component } from 'react';
import './QuoteMachine.css';
import { Button } from 'react-bootstrap';
import Request from 'superagent';

export class QuoteMachine extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    let url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";
    Request
    .get(url)
    .set("X-Mashape-Key", "RdmeutUcqdmshtYDGMmUmsbOcmcHp1NFC41jsnF0Ku668AbzZY")
    .set("Accept", "application/json")
    .then((response) => {
      this.setState({
        quote: response.body.quote,
        author: response.body.author
      });
    });
  }

  componentWillMount() {
    this.getQuote();
  }

  render () {
    let tweetUrl=`https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`;
    return (
      <div className="App container-fluid">
          <div className="row align-items-center">
            <div className="col align-self-center">
              <blockquote className="blockquote">
                <p>{this.state.quote}</p>
                <footer className="blockquote-footer">
                  <cite>{this.state.author}</cite>
                </footer>
              </blockquote>
              <Button bsStyle="info" href={tweetUrl}  target="_blank">Tweet!</Button>
              <Button bsStyle="dark" bsSize="large" onClick={this.getQuote}>New Quote!</Button>
            </div>
        </div>
      </div>
    );
  }
}
