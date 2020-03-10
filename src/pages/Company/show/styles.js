import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerDetails = styled.div`
  display: ${props => (props.hasData ? 'block' : 'none')};
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
