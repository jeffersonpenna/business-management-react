import { createGlobalStyle } from 'styled-components';
import { lighten, darken } from 'polished';

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

  body, input, button {
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #2c303a;
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
`;
