import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/products`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const GetProductByID = (productID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/products/getProductByProductID/${productID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getAllProducts, GetProductByID };
