import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">Business Management</Link>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input type="search" placeholder="Search company" />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </Container>
  );
}
