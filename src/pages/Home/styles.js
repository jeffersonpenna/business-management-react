import styled from 'styled-components';

export const Container = styled.div`
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;

    button:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;
