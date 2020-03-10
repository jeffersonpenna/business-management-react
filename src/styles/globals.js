import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select {
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #2c303a;
  }

  input {
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid #2c303a;
    padding: 10px;
    border-radius: 4px;
  }

  select {
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid #2c303a;
    border-radius: 4px;
  }


  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  .btn {
    padding: 0.5rem 0.875rem;
    border: 0;
    border-radius: 4px;
    transition: all 0.2s;
    text-transform: uppercase;
  }

  .btn-light {
    background: transparent;
    color: #ff961d;
    border: 1px solid #ff961d;

    &:hover {
      color: ${darken(0.12, '#ff961d')};
      border: 1px solid ${darken(0.12, '#ff961d')};
    }
  }

  .btn-primary {
    border: 1px solid #2c303a;
    background: transparent;
    color: #2c303a;

    &:hover {
      border: 1px solid #ff961d;
      color: #ff961d;
    }
  }

  .btn-primary--dark {
    border: 1px solid #2c303a;
    background: #2c303a;
    color: #e1e3e8;

    &:hover {
      border: 1px solid #ff961d;
      background: #ff961d;
      color: #2c303a;
    }
  }
  
  .container {
    padding: 0 1.25rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: #e1e3e8;
    }

    thead th {
      color: #2c303a;
      text-align: left;
      padding: 12px;
    }

    tbody td {
      padding: 12px;
      border-bottom: 1px solid #eee;

      a:hover {
        svg {
          color: #ff961d !important;
        }
      }
    }
  }

  .Toastify__toast {
    border-radius: 4px;
  }

  .Toastify__toast--success {
    background: #7bc87d;
  }

  .Toastify__toast--error {
    background: #dd5d54;
  }
`;
