import React from 'react';
import './Max.css';
import maxlogo from './max.svg';

class Max extends React.Component {
  render() {
    return (
      <div className="Max">
        <div className="Max-header">
          <img src={maxlogo} className="Max-logo" alt="Max logo" />
          <h2>Max's Start Here Component</h2>
        </div>
        <div className="Max-intro">
          This is a Test component under <code>src/components/Max/</code> folder
        </div>
      </div>
    );
  }
}

export default Max;
