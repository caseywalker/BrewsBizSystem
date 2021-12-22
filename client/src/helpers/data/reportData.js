import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getReportDay = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/Reports/report/day`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getReportWeek = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/Reports/report/week`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getReportMonth = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/Reports/report/month`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getReportYear = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/Reports/report/year`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getReportDay, getReportWeek, getReportMonth, getReportYear
};
