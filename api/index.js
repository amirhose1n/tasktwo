import axios from 'axios';

const config={
  baseURL: 'https://dummyapi.io/data/api/',
  headers :{
    "app-id": '5ffd9d08fae51817e8926c03'
  }
};

const axiosInstance = axios.create(config);

export default axiosInstance;
