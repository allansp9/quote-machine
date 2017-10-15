import React, { Component } from 'react';
import Request from 'superagent';
import './App.css';

class App extends Component {
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
    var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1";
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
      <div className="App">
        <h1>{this.state.quote}</h1>
        <h2>- {this.state.author}</h2>
        <button onClick={this.getQuote}>New Quote!</button>
      </div>
    );
  }

}



export default App;
