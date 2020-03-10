import React, { Component } from 'react';
import { MdGroup } from 'react-icons/md';

import NoDataFound from '../../../components/NoFoundData';
import checkHasData from '../../../utils';

import { Container } from './styles';

class EmployeeList extends Component {
  state = {
    employees: this.props?.employees || [],
    noEmployeesMessage: 'Employees not found',
  };

  render() {
    const { employees } = this.state;
    console.log(employees, '--------------');
    return (
      <Container>
        <NoDataFound
          data={employees}
          message={this.state.noEmployeesMessage}
          icon={<MdGroup color="#fff" size={150} />}
        />
      </Container>
    );
  }
}

export default EmployeeList;
