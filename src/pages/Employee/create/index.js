import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

class EmployeeCreate extends Component {
  state = {
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

  handleAddCompany = event => {
    event.preventDefault();

    const { dispatch } = this.props;

    dispatch({
      type: '@company/ADD',
      company: this.state,
    });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleAddCompany}>
          <select
            value={this.state.company}
            name="company"
            onChange={this.handleChange}
          >
            <option value="0">-- Select a company --</option>
            <option value="1">Accenture</option>
            <option value="2">COCUS</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <div className="form-inline">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              onChange={this.handleInputChange}
            />
          </div>

          <input
            type="text"
            name="street"
            placeholder="Street"
            onChange={this.handleInputChange}
          />
          <div className="form-inline">
            <input
              type="text"
              name="number"
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
            placeholder="Neighborhood"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="state"
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

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CompanyActions, dispatch);

export default connect()(EmployeeCreate);
