import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdBusiness } from 'react-icons/md';
import { Link } from 'react-router-dom';

import formatAddress from '../../../utils/formatAddress';
import formatCurrency from '../../../utils/formatCurrency';

import { Container, ContainerDetails, Card } from './styles';
import NoDataFound from '../../../components/NoFoundData';
import EmployeeList from '../../Employee/list';
import checkHasData from '../../../utils';

class CompanyList extends Component {
  state = {
    company: this.props.companies.find(
      company => company.id == this.props.match.params.id
    ),
    employees: this.props.employees.filter(
      employee => employee.company == this.props.match.params.id
    ),
    noCompanyMessage: 'Company not found',
  };

  includeBackButton = () => {
    return (
      <div className="btn-group">
        <Link to="/" title="Access company details" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    );
  };

  render() {
    const { company, employees } = this.state;

    if (!checkHasData(company)) {
      return (
        <Container>
          {this.includeBackButton()};
          <NoDataFound
            message={this.state.noCompanyMessage}
            icon={<MdBusiness color="#fff" size={150} />}
          />
        </Container>
      );
    }
    return (
      <Container>
        {this.includeBackButton()};
        <ContainerDetails>
          <h1>{company.name}</h1>
          <Card>
            <div>
              <p>
                <strong>Revanue:</strong> {company.revenueFormatted}
              </p>
              <p>
                <strong>Total of employees:</strong> {employees.length}
              </p>
            </div>
          </Card>
          <Card>
            <div>
              <p>
                <strong>Zipcode:</strong> {company.zipcode}
              </p>
              <p>
                <strong>Street:</strong> {company.street}
              </p>
            </div>
            <div>
              <p>
                <strong>Number:</strong> {company.number}
              </p>
              <p>
                <strong>Complement:</strong> {company.complement || ''}
              </p>
            </div>
            <div>
              <p>
                <strong>City:</strong> {company.city}
              </p>
              <p>
                <strong>State:</strong> {company.state}
              </p>
            </div>
          </Card>

          <Card>
            <EmployeeList employees={employees} />
          </Card>
        </ContainerDetails>
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
    employees: state.employee.map(employee => ({
      ...employee,
      address: formatAddress(employee),
    })),
  };
};

export default connect(mapStateToProps)(CompanyList);
