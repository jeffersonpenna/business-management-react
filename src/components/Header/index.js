import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>
        <Link to="/">
          Business <span>Management</span>
        </Link>
      </h1>
      <Form>
        <input type="search" placeholder="Buscar empresa" />
      </Form>
    </Container>
  );
}
