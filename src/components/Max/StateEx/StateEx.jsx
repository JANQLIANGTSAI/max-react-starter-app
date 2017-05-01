/**
example from
http://brewhouse.io/blog/2015/03/24/best-practices-for-component-state-in-reactjs.html
**/

import React from 'react';
import cx from 'classnames';

// var cx = React.addons.classSet;
// warning  React.addons.classSet is deprecated since React 0.13.0, use the npm module classnames instead  react/no-deprecated

class StateEx extends React.Component {
  // ...

  constructor (props) {

    super(props); // this is requried now -- missing in the blog

    this.state = {
      isHovering: false,
      isActive: false
    };
  }

  // GOOD: set this.state.isHovering to true on mouse over
  handleMouseOver () {
    this.setState({ isHovering: true });
  }

  // GOOD: set this.state.isHovering to false on mouse leave
  handleMouseOut () {
    this.setState({ isHovering: false });
  }

  // GOOD: toggle this.state.isActive on click
  handleClick () {
    var active = !this.state.isActive;
    this.setState({ isActive: active });
  }

  render () {
    // use the classSet addon to concat an array of class names together
    var classes = cx([
      this.state.isHovering && 'hover',
      this.state.isActive && 'active'
    ]);

    return (
      <div
        className={cx(classes)}
        onClick={this.handleClick.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        StateEx
      </div>
    );
  }

}

export default StateEx;
