import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getHolidaysRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/holidays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const holidays = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          holidays.push(res.data[key]);
        });
      }
      resolve(holidays);
    })
    .catch(err => reject(err));
});

const deleteHoliday = holidayId => axios.delete(`${firebaseUrl}/holidays/${holidayId}.json`);

const createHoliday = holiday => axios.post(`${firebaseUrl}/holidays.json`, holiday);

export default {
  getHolidaysRequest,
  deleteHoliday,
  createHoliday,
};
