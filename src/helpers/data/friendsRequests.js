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

const getSingleFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends/${friendId}.json`)
    .then((result) => {
      const singleFriend = result.data;
      singleFriend.id = friendId;
      resolve(singleFriend);
    }).catch(err => reject(err));
});

const editFriend = (friendId, friend) => axios.put(`${firebaseUrl}/friends/${friendId}.json`, friend);

const getFriendsByArrayOfIds = (uid, friendIdsArray) => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const friendsObject = result.data;
      const friendsArray = [];
      if (friendsObject !== null) {
        Object.keys(friendsObject).forEach((friendId) => {
          friendsObject[friendId].id = friendId;
          friendsArray.push(friendsObject[friendId]);
        });
      }
      const selectedFriends = friendsArray.filter(x => friendIdsArray.includes(x.id));
      resolve(selectedFriends);
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getFriendsRequest,
  deleteFriend,
  createFriend,
  getSingleFriend,
  editFriend,
  getFriendsByArrayOfIds,
};
