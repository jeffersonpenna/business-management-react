import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #e1e3e8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px; 
  }

  button {
    cursor: pointer;
  }

  .main-button {
    background: #2c303a;
    padding: 10px 15px;
    border: 0;
    color: #e1e3e8;
    border-radius: 8px;
    transition: all 0.2s;
    text-transform: uppercase;

    &:hover {
      background: ${lighten(0.15, '#2c303a')};
    }
  }
`;
