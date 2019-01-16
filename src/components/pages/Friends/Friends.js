import React from 'react';
import friendsRequests from '../../../helpers/data/friendsRequests';
import SingleFriend from '../SingleFriend/SingleFriend';
import './Friends.scss';
import authRequests from '../../../helpers/data/authRequests';

class Friends extends React.Component {
  state = {
    friends: [],
  }

  getFriends = () => {
    const uid = authRequests.getCurrentUid();
    friendsRequests.getFriendsRequest(uid)
      .then((friends) => {
        this.setState({ friends });
      }).catch(err => console.error(err));
  }

  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  componentDidMount() {
    this.getFriends();
  }


  deleteOne = (friendId) => {
    friendsRequests.deleteFriend(friendId)
      .then(() => {
        const uid = authRequests.getCurrentUid();
        friendsRequests.getFriendsRequest(uid)
          .then((friends) => {
            this.setState({ friends });
          });
      }).catch(err => console.error(err));
  }

  passFriendToEdit = (friendId) => {
    this.props.history.push(`/friends/${friendId}/edit`);
  }

  render() {
    const singleFriendComponent = this.state.friends.map(friend => (
      <SingleFriend
      friend={friend}
      key={friend.id}
      deleteSingleFriend= {this.deleteOne}
      passFriendToEdit = {this.passFriendToEdit}
      />));
    return (
      <div>
        <button className="btn btn-success" id="friends/new" onClick={this.changeView}>Add Friend</button>
        <div className="singleFriend mt-3 row">{singleFriendComponent}</div>
      </div>
    );
  }
}

export default Friends;
