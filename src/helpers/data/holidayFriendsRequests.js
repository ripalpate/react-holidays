import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getFriendIdsForHoliday = holidayId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/holidayFriends.json?orderBy="holidayId"&equalTo="${holidayId}"`)
    .then((result) => {
      const holidayFriendObject = result.data;
      const friendIds = [];
      if (holidayFriendObject !== null) {
        Object.keys(holidayFriendObject).forEach((hfId) => {
          friendIds.push(holidayFriendObject[hfId].friendId);
        });
      }
      resolve(friendIds);
    }).catch((error) => {
      reject(error);
    });
});

export default { getFriendIdsForHoliday };
