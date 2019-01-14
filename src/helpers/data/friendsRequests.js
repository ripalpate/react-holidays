import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getFriendsRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const friends = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          friends.push(res.data[key]);
        });
      }
      resolve(friends);
    })
    .catch(err => reject(err));
});

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

const createFriend = friend => axios.post(`${firebaseUrl}/friends.json`, friend);

export default {
  getFriendsRequest,
  deleteFriend,
  createFriend,
};
