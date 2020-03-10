import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../services/history';

import { Container } from './styles';

class Header extends Component {
  state = {
    search: '',
  };

  handleSubmitForm = event => {
    event.preventDefault();

    const { search } = this.state;
    const { dispatch } = this.props;

    this.setState({ search: '' });

    const urlToRedirect = !search ? '/' : `/?q=${search}`;

    history.push(urlToRedirect);

    dispatch({
      type: '@search/UPDATE',
      search,
    });
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <Container>
        <nav>
          <Link to="/">Business Management</Link>
          <div>
            <form onSubmit={this.handleSubmitForm} className="form-inline">
              <input
                type="search"
                value={this.state.search}
                placeholder="Search company"
                onChange={this.handleChange}
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

export default connect(mapStateToProps)(Header);
