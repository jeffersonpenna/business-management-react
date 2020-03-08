import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  h1 {
    font-size: 2.1rem;
    span {
      font-size: 1.5rem;
      display: block;
      border-top: 1px solid ${darken(0.2, '#ff961e')};
      padding-top: 2px;
      margin-top: 2px;
    }
    a {
      text-decoration: none;
      color: #ff961e;
    }
  }
`;

export const Form = styled.form`
  input {
    font-size: 1.3rem;
    color: #2c303a;
    border-radius: 20px;
    border: 0;
    padding: 10px 15px;
  }
`;
