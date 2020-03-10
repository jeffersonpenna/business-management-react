import React from 'react';
import { Container } from './styles';

import checkHasData from '../../utils';

export default function NoFoundData({ data, message, icon }) {
  return (
    <Container hasData={checkHasData(data)}>
      <div>{icon}</div>
      <h2>{message}</h2>
    </Container>
  );
}
