import React from 'react';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <div className="btn-group">
        <button className="main-button">Create company</button>
        <button className="main-button">Create employee</button>
      </div>
    </Container>
  );
}
