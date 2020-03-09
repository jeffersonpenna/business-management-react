import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 20px;
    margin-bottom: 55px;
    border-bottom: 1px solid #e1e3e8;

    input {
      flex: 1;
      margin-bottom: 10px;
    }

    select {
      flex: 1;
      margin-bottom: 10px;
    }

    .form-inline {
      display: flex;
    }
  }
`;
