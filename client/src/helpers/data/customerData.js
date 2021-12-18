import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getCustomers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/customers`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getCustomerByID = (customerID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/customers/getCustomerByCustomerID/${customerID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getCustomers, getCustomerByID };
