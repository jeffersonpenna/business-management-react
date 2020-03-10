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
      <Container hasSuccessButton={this.props?.hasSuccessButton}>
        <div className="modal">
          <div className="modal__tittle">
            <h2>{this.props?.title}</h2>
          </div>

          {this.props?.children}

          <div className="footer">
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props?.onClose}
              >
                Close
              </button>
              {this.props?.hasSuccessButton ? (
                <button
                  type="button"
                  className="btn btn-primary--dark modal-btn-success"
                  onClick={this.props?.onSuccess}
                >
                  Confirm
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

Modal.props = {
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Modal;
