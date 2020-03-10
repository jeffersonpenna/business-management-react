import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from './styles';

class EmployeeCreate extends Component {
  state = {
    id: 0,
    company: 0,
    name: '',
    gender: '',
    phone: '',
    zipcode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  };

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleAddEmployee = (event, onSuccessFunc) => {
    event.preventDefault();

    const moment = Date.now();
    const employee = this.state;
    employee.id = moment;

    onSuccessFunc();
    toast.success('Data created with success');

    const { dispatch } = this.props;
    dispatch({
      type: '@employee/ADD',
      employee,
    });
  };

  render() {
    return (
      <Container onSuccessFunc companies>
        <form
          onSubmit={event =>
            this.handleAddEmployee(event, this.props.onSuccessFunc)
          }
        >
          <select name="company" onChange={this.handleInputChange}>
            <option value="0">-- Select a company --</option>
            {this.props.companies.map(company => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <div className="form-inline">
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="zipcode"
              required
              placeholder="Zipcode"
              onChange={this.handleInputChange}
            />
          </div>

          <input
            type="text"
            name="street"
            required
            placeholder="Street"
            onChange={this.handleInputChange}
          />
          <div className="form-inline">
            <input
              type="text"
              name="number"
              required
              placeholder="Number"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="complement"
              placeholder="Complement"
              onChange={this.handleInputChange}
            />
          </div>
          <input
            type="text"
            name="neighborhood"
            required
            placeholder="Neighborhood"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="city"
            required
            placeholder="City"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="state"
            required
            placeholder="State"
            onChange={this.handleInputChange}
          />
          <button className="btn btn-primary--dark" type="submit">
            Create
          </button>
        </form>
      </Container>
    );
  }
}

export default connect()(EmployeeCreate);
