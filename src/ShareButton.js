import React, { Component } from 'react';


class ShareButton extends Component {
  render() {
    return (
      <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world" target="_blank">Tweet</a>
    );
  }
}

export default ShareButton;
