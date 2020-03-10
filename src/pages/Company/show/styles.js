import styled from 'styled-components';

export const Container = styled.div`
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.125rem;

    button:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

export const ContainerDetails = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem 3.125rem;

  h1 {
    padding-bottom: 3.125rem;
  }

  h2 {
    padding: 2.125rem 0;
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  background: #fafafa;
  padding: 1.25rem;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      flex: 1;
      line-height: 2rem;
    }
  }
`;
