import React from 'react';
import Request from 'superagent';
import Icon from 'react-component-bytesize-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import './QuoteMachine.css';



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

        <div className="row">
          <div className="col quote-wrapper">
            <blockquote className="blockquote">
              <p>"{this.state.quote}"</p>
              <footer className="">
                <cite>- {this.state.author}</cite>
              </footer>
            </blockquote>
          </div>

          <div className="col-xs-2">
            <div className="" onClick={this.getQuote}>
              <Icon name="reload"/>
            </div>
            <div className="col">
              <a href={tweetUrl} target="_blank" className="">
                <Icon name="twitter"/>
              </a>
            </div>
          </div>
        </div>

    </div>
    );
  }
}
