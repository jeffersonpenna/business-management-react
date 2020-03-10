import React, { Component } from 'react';
import { MdGroup } from 'react-icons/md';

import NoDataFound from '../../../components/NoFoundData';
import checkHasData from '../../../utils';

// import Table from '../../../components/Table';

import { Container } from './styles';

class EmployeeList extends Component {
  state = {
    employees: this.props?.employees || [],
    noEmployeesMessage: 'Employees not found',
    thread: ['a', 'b', 'c'],
    threadSizes: [25, 50],
  };

  render() {
    const { employees } = this.state;

    if (!checkHasData(employees)) {
      return (
        <Container>
          <NoDataFound
            message={this.state.noEmployeesMessage}
            icon={<MdGroup color="#fff" size={150} />}
          />
        </Container>
      );
    }

    return (
      <Container>
        <h3>Employees</h3>
        <table>
          <thead>
            <tr>
              <th width="35%">Name</th>
              <th width="15%">Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => {
              return (
                <tr>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default EmployeeList;
