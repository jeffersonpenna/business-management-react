import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import history from '../../services/history';

import { Container } from './styles';

class Header extends Component {
  state = {
    toSearch: '',
  };

  execFilter = event => {
    event.preventDefault();

    const { toSearch } = this.state;
    const url = !toSearch ? '/' : `/?company=${toSearch}`;

    history.push(url);
  };

  handleChange = event => {
    this.setState({ toSearch: event.target.value });
  };

  render() {
    return (
      <Container>
        <nav>
          <Link to="/">Business Management</Link>
          <div>
            <form
              onSubmit={this.execFilter}
              className="form-inline my-2 my-lg-0"
            >
              <input
                type="search"
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

export default Header;
