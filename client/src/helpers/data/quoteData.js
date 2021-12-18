import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getOpenQuotes = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/quotes/getOpenQuotes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getQuoteByID = (quoteID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/quotes/getQuoteByQuoteID/${quoteID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getOpenQuotes, getQuoteByID };
