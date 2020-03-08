import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Container } from './styles';

class Modal extends Component {
  teste() {}

  render() {
    if (!this.props?.show) {
      return null;
    }

    return (
      <Container>
        <div className="modal">
          {this.props?.children}

          <div className="footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props?.onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary--dark"
              onClick={this.props?.onClose}
            >
              Save
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

Modal.props = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
