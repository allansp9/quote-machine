import React from 'react';
// import './QuoteMachine.css';
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
    const tweetUrl = `https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`;
    return (
      <div className="container">
        <div className="">
          <div className="">
            <blockquote className="">
              <p>{this.state.quote}</p>
              <footer className="">
                <cite>{this.state.author}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="">
            <div className="">
              <button href={tweetUrl} target="_blank">Tweet!</button>
            </div>
            <div className="">
              <button onClick={this.getQuote}>New Quote!</button>
            </div>
        </div>
      </div>
    );
  }
}
