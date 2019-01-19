import React from 'react';
import './HolidayFriends.scss';
import friendsRequests from '../../../helpers/data/friendsRequests';
import authRequests from '../../../helpers/data/authRequests';

class HolidayFriends extends React.Component {

  state = {
    friends: [],
  }

  componentDidMount() {
    const uid = authRequests.getCurrentUid();
    friendsRequests.getFriendsRequest(uid)
      .then((friends) => {
        this.setState({ friends });
      }).catch(err => console.error(err));
  }

  render() {
    const { friends } = this.state;
    const friendnames = friends.map(friend => (
      <div key={friend.id} className="">
        <h5 className="card-header">{friend.name}</h5>
      </div>));
    return (
      <div className="EditHoliday">
        <h3>Add Friends to Holiday Page</h3>
        <div className="">{friendnames}</div>
      </div>
    );
  }
}

export default HolidayFriends;
