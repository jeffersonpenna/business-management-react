import styled from 'styled-components';

export const Container = styled.header`
  padding: 2.25rem 1.25rem;
  background-color: #2c303a;
  color: #e1e3e8;
  width: 100%;
  margin-bottom: 3.125rem;
  border-bottom: 3px solid #ff961d;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.125rem;
    a {
      text-decoration: none;
      color: #e1e3e8;
      text-transform: uppercase;
    }

    form {
      input {
        margin-right: 10px;
        width: 200px;
      }
    }
  }
`;
