import React from 'react';
import friendsRequests from '../../../helpers/data/friendsRequests';
import SingleFriend from '../SingleFriend/SingleFriend';
import './Friends.scss';
import authRequests from '../../../helpers/data/authRequests';

// const firebaseId = this.props.match.params.id;
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
    this.props.history.push(`/friends/:${view}/edit`);
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

  render() {
    const singleFriendComponent = this.state.friends.map(friend => (
      <SingleFriend
      friend={friend}
      key={friend.id}
      deleteSingleFriend= {this.deleteOne}
      />));
    return (
        <div className="singleFriend mt-3 row">{singleFriendComponent}</div>
    );
  }
}

export default Friends;
