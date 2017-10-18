import React, { Component } from 'react';
import QuoteMachine from './QuoteMachine';
import Request from 'superagent';
import './App.css';

class QuoteMachineContainer extends Component {
  constructor(){
    super();
    this.state = {
      quote: "",
      author: ""
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentWillMount() {
      this.getQuote();
  }

  getQuote() {
    var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";
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

  render() {

    return (
      <QuoteMachine quote={this.state.quote} author={this.state.author}/>
    );
  }

}

export default QuoteMachineContainer;
