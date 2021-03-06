import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import queryString from 'query-string';

import {
  MdBusiness,
  MdPictureAsPdf,
  MdVisibility,
  MdDelete,
} from 'react-icons/md';

import Modal from '../../components/Modal';
import formatAddress from '../../utils/formatAddress';
import formatCurrency from '../../utils/formatCurrency';
import history from '../../services/history';

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
    companyToRemoveId: 0,
    companyToRemoveName: '',
  };

  handleFilterCompany = () => {
    const { companies } = this.props;
    const queryToFilter = this.getQueryParam();

    if (queryToFilter) {
      const companiesFiltered = companies.filter(company => {
        return company.name.startsWith(queryToFilter);
      });

      return companiesFiltered;
    }

    return companies;
  };

  getQueryParam = () => {
    const queryParams = queryString.parse(this.props.location?.search);
    let queryToFilter = null;

    if (queryParams?.q) {
      queryToFilter = queryParams.q;
    } else if (this.props.search?.length > 0) {
      queryToFilter = this.props.search[0];
    }

    return queryToFilter;
  };

  toggleModalRemoveCompany = (
    companyToRemoveId = null,
    companyToRemoveName = null
  ) => {
    this.setState({
      isOpenModalRemoveCompany: !this.state.isOpenModalRemoveCompany,
      companyToRemoveId,
      companyToRemoveName,
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

  handleRemoveCompany = () => {
    const companyId = this.state.companyToRemoveId;

    if (!companyId) return;

    this.toggleModalRemoveCompany();
    toast.success('Data removed with success');

    const { dispatch } = this.props;
    dispatch({
      type: '@company/REMOVE',
      companyId,
    });

    dispatch({
      type: '@employee/REMOVE_FROM_COMPANY',
      companyId,
    });
  };

  handleClearSearch = () => {
    const { dispatch } = this.props;

    history.push('/');

    dispatch({
      type: '@search/UPDATE',
      search: '',
    });
  };

  clearSearchData = () => {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-light"
          onClick={this.handleClearSearch}
        >
          Clear search
        </button>
      </div>
    );
  };

  render() {
    const companies = this.handleFilterCompany();
    const hasQueryParam = this.getQueryParam();

    return (
      <Container>
        {hasQueryParam ? (
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-light"
              onClick={this.handleClearSearch}
            >
              Clear search
            </button>
          </div>
        ) : (
          ''
        )}
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
          <CompanyCreate onSuccessFunc={this.toggleModalCompany} />
        </Modal>
        <Modal
          show={this.state.isOpenModalEmployee}
          onClose={this.toggleModalEmployee}
          title="Create a new employee"
        >
          <EmployeeCreate
            companies={companies}
            onSuccessFunc={this.toggleModalEmployee}
          />
        </Modal>
        <Modal
          show={this.state.isOpenModalRemoveCompany}
          onClose={this.toggleModalRemoveCompany}
          onSuccess={this.handleRemoveCompany}
          hasSuccessButton
          title="Remove Company"
        >
          <h3>
            Are you sure you want remove the company{' '}
            <strong>{this.state.companyToRemoveName}</strong>
          </h3>
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
                <tr>
                  <th width="25%">Company</th>
                  <th width="15%">Revenue</th>
                  <th width="15%">Phone</th>
                  <th width="36%">Address</th>
                  <th colSpan="3" />
                </tr>
              </thead>
              <tbody>
                {companies?.map((company, index) => (
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.revenueFormatted}</td>
                    <td>{company.phone}</td>
                    <td>{company.address}</td>
                    <td>
                      <a className="disabled" href="#" title="Export to PDF">
                        <MdPictureAsPdf color="#2c303a" size={26} />
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        title="Remove company"
                        onClick={() =>
                          this.toggleModalRemoveCompany(
                            company.id,
                            company.name
                          )
                        }
                      >
                        <MdDelete color="#2c303a" size={26} />
                      </a>
                    </td>
                    <td>
                      <Link
                        to={`/company/${company.id}`}
                        title="Access company details"
                      >
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
    companies: state.company.map(company => ({
      ...company,
      address: formatAddress(company),
      revenueFormatted: formatCurrency(company.revenue),
    })),
    search: state.search,
  };
};

export default connect(mapStateToProps)(Home);
