import axios from 'axios';

const zipcodeApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default zipcodeApi;
