import React from 'react';

{/* Linking to a children Component */}
import StateEx from './StateEx/StateEx.jsx'

{/* Linking to bootstrap Component */}
import { Alert,  Button, ButtonToolbar } from 'react-bootstrap';


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
        <Alert bsStyle="warning">
          <strong>react-bootstrap</strong>This is an Alert!
        </Alert>
        <hr/>
        <StateEx />
        <hr/>

        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>

      </div>
    );
  }
}

export default Max;
