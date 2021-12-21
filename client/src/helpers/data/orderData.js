import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderByID = (orderID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/getOrderByID/${orderID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const placeOrder = (quoteID) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/orders/createOrder/${quoteID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getAllOrders, getOrderByID, placeOrder };
