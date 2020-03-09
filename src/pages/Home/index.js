import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  MdBusiness,
  MdPictureAsPdf,
  MdVisibility,
  MdDelete,
} from 'react-icons/md';

import Modal from '../../components/Modal';

import CompanyCreate from '../Company/create';
import EmployeeCreate from '../Employee/create';

import {
  Container,
  ContainerTable,
  CompanyList,
  NoDataRegistered,
} from './styles';

class Home extends Component {
  state = {
    isOpenModalCompany: false,
    isOpenModalEmployee: false,
    isOpenModalRemoveCompany: false,
    companyToRemove: '',
  };

  toggleModalRemoveCompany = companyToRemove => {
    this.setState({
      isOpenModalRemoveCompany: !this.state.isOpenModalRemoveCompany,
      companyToRemove,
    });
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
    const { companies } = this.props;
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
          title="Create a new company"
        >
          <CompanyCreate />
        </Modal>
        <Modal
          show={this.state.isOpenModalEmployee}
          onClose={this.toggleModalEmployee}
          title="Create a new employee"
        >
          <EmployeeCreate />
        </Modal>
        <Modal
          show={this.state.isOpenModalRemoveCompany}
          onClose={this.toggleModalRemoveCompany}
          title="Remove Company"
        >
          Removendo item {this.state.companyToRemove}
        </Modal>
        ;
        <CompanyList>
          <NoDataRegistered hasData={companies}>
            <div>
              <MdBusiness color="#fff" size={150} />
            </div>
            <h2>No registered companies</h2>
          </NoDataRegistered>

          <ContainerTable hasData={companies}>
            <table>
              <thead>
                <th>Company</th>
                <th>Revenue</th>
                <th>Phone</th>
                <th>Address</th>
                <th />
                <th />
                <th />
              </thead>
              <tbody>
                {companies?.map((company, index) => (
                  <tr key={company.name.id}>
                    <td width="25%">{company.name}</td>
                    <td width="15%">{company.revenueFormatted}</td>
                    <td width="15%">{company.phoneFormatted}</td>
                    <td width="36%">{company.address}</td>
                    <td width="3%">
                      <a href="#" title="Export to PDF">
                        <MdPictureAsPdf color="#2c303a" size={26} />
                      </a>
                    </td>
                    <td width="3%">
                      <a
                        href="#"
                        title="Remove company"
                        onClick={() =>
                          this.toggleModalRemoveCompany(company.name)
                        }
                      >
                        <MdDelete color="#2c303a" size={26} />
                      </a>
                    </td>
                    <td width="3%">
                      <Link to="/company/1" title="Access company details">
                        <MdVisibility color="#2c303a" size={26} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContainerTable>
        </CompanyList>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.company,
  };
};

export default connect(mapStateToProps)(Home);
