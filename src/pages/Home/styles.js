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

export const ContainerTable = styled.div`
  display: ${props => (props.hasData.length ? 'block' : 'none')};
  margin: 0 auto;
  max-width: 1280px;
  padding-bottom: 50px;
  width: 100%;
`;

export const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoDataRegistered = styled.div`
  display: ${props => (props.hasData.length ? 'none' : 'block')};
  div {
    background: #e1e3e8;
    padding: 4.125rem;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }
`;
