import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CompanyActions from '../../../store/modules/company/actions';

import { Container } from './styles';

class CompanyCreate extends Component {
  state = {
    name: '',
    revenue: 0,
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <div className="form-inline">
            <input
              type="number"
              name="revenue"
              placeholder="Revenue"
              onChange={this.handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={this.handleInputChange}
            />
          </div>

          <input
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            onChange={this.handleInputChange}
          />
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

export default connect()(CompanyCreate);
