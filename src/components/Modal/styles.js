import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 3.125rem;
  text-align: center;

  h3 {
    strong {
      display: block;
      text-transform: uppercase;
      padding-top: 24px;
      color: #ff961d;
    }
  }

  .modal {
    background-color: #fff;
    border-radius: 4px;
    max-width: 800px;
    min-height: 300px;
    margin: 0 auto;
    padding: 1.25rem;
    position: relative;

    .modal__tittle {
      text-align: center;
      text-transform: uppercase;
      padding: 20px 0 40px;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 1.25rem;

      div {
        display: flex;
      }

      button.modal-btn-success {
        display: ${props => (props.hasSuccessButton ? 'block' : 'none')};
      }

      button:not(:last-of-type) {
        margin-right: 10px;
      }

      button:last-of-type {
        margin-right: 1.25rem;
      }
    }
  }
`;
