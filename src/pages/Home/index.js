import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdBusiness } from 'react-icons/md';

import Modal from '../../components/Modal';

import CompanyCreate from '../Company/create';

import { Container, CompanyList, NoDataRegistered } from './styles';

class Home extends Component {
  state = {
    isOpenModalCompany: false,
    isOpenModalEmployee: false,
  };

  toggleModalCompany = () => {
    this.setState({
      isOpenModalCompany: !this.state.isOpenModalCompany,
    });
  };

  toggleModalEmployee = () => {
    this.setState({
      isOpenModalEmployee: !this.state.isOpenModalEmployee,
    });
  };

  render() {
    console.log(this.props.company, '---------[1]');
    return (
      <Container>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.toggleModalCompany}
          >
            Create company
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.toggleModalEmployee}
          >
            Create employee
          </button>
        </div>

        <Modal
          show={this.state.isOpenModalCompany}
          onClose={this.toggleModalCompany}
          title="Creeate new company"
        >
          <CompanyCreate />
        </Modal>

        <Modal
          show={this.state.isOpenModalEmployee}
          onClose={this.toggleModalEmployee}
          title="Creeate new employee"
        >
          Employee
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

export default connect(state => ({
  company: state.company,
}))(Home);
