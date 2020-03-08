import React, { Component } from 'react';
import { MdBusiness } from 'react-icons/md';

import Modal from '../../components/Modal';
import { Container, CompanyList, NoDataRegistered } from './styles';

class Home extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Container>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.toggleModal}
          >
            Create company
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.toggleModal}
          >
            Create employee
          </button>
        </div>

        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>

        <CompanyList>
          <NoDataRegistered>
            <MdBusiness color="#fff" size={150} />
          </NoDataRegistered>
          <h2>No registered companies</h2>
        </CompanyList>
      </Container>
    );
  }
}

export default Home;
