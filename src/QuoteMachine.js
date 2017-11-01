import React from 'react';
import Request from 'superagent';
import Icon from 'react-component-bytesize-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import './QuoteMachine.css';
import { Button } from 'react-bootstrap';



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

        <header><h1 className="display-4">Random Quote Generator</h1></header>

        <div className="row">
          <div className="col quote-container">
            <blockquote className="blockquote">
              <p className="mb-0">{this.state.quote}.</p>
              <footer className="blockquote-footer"><cite title="Source Title">{this.state.author}</cite></footer>
            </blockquote>
          </div>

          <div className="col-xs-2">
            <Button onClick={this.getQuote} className="btn-danger btn-block btn-reload" href="#">
              <Icon name="reload" size="larger"/>
            </Button>

              <Button href={tweetUrl} target="_blank" className="btn-primary btn-tweet">
                <Icon name="twitter" size="larger"/>
              </Button>
          </div>
        </div>
        <div className="row">
            <div className="col contact">
              <p className="text-right"><a href="https://github.com/allansp9/quote-machine" target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="mailto:allansp9@gmail.com">allansp9@gmail.com</a></p>
            </div>
        </div>

    </div>
    );
  }
}
