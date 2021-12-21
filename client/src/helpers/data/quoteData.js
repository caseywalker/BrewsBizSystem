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

const getQuoteDetailsByID = (quoteID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/quotedetails/getQuoteDetailsByQuoteID/${quoteID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addNewQuote = (quoteObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/quotes`, quoteObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addProductToQuote = (quoteID, productObj) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/quotes/addProductToQuote/${quoteID}`, productObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const EditProductInQuote = (quoteDetailID, quoteID, productQuantity) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/quotes/updateProductQuantity/${quoteDetailID}/${quoteID}/${productQuantity}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const removeProductFromQuote = (quoteDetailID, quoteID) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/quotes/removeProductFromQuote/${quoteDetailID}/${quoteID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteQuote = (quoteID) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/api/quotes/deleteQuote/${quoteID}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getOpenQuotes, getQuoteByID, getQuoteDetailsByID, addNewQuote, addProductToQuote, EditProductInQuote, removeProductFromQuote, deleteQuote
};
