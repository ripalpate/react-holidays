import React from 'react';
import './HolidayFriends.scss';
import friendsRequests from '../../../helpers/data/friendsRequests';
import authRequests from '../../../helpers/data/authRequests';
import holidaysRequests from '../../../helpers/data/holidaysRequests';

class HolidayFriends extends React.Component {

  state = {
    singleHoliday: [],
    friends: [],
  }

  componentDidMount() {
    const uid = authRequests.getCurrentUid();
    const firebaseId = this.props.match.params.id;
    friendsRequests.getFriendsRequest(uid)
      .then((friends) => {
        this.setState({ friends });
      }).catch(err => console.error(err));

    holidaysRequests.getSingleHoliday(firebaseId)
      .then((singleHoliday) => {
        this.setState({ singleHoliday });
      }).catch(err => console.error(err));
  }

  render() {
    const { friends, singleHoliday } = this.state;
    const friendnames = friends.map(friend => (
      <div key={friend.id} className="">
        <h5 className="card-header">{friend.name}</h5>
        <div className="form-check">
          <input type="checkbox" aria-label="Checkbox for following text input"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Attending {singleHoliday.name} </label>
        </div>
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
