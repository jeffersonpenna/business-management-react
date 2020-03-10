import React from 'react';
import { Container } from './styles';

export default function NoFoundData({ message, icon }) {
  return (
    <Container>
      <div>{icon}</div>
      <h2>{message}</h2>
    </Container>
  );
}
