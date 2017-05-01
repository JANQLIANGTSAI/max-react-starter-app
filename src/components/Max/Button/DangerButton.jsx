import React, { Component } from 'react';

const element = "Hello, world";

class DangerButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'red'
    }
  }

  render() {
    return (
    <button>
      <b>
        [ {element} in color: {this.state.color}]
      </b>
    </button>
    )
  }
}

export default DangerButton;
