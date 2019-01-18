import React from 'react';
import './HolidayFriends.scss';
import friendsRequests from '../../../helpers/data/friendsRequests';

class EditHoliday extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    friendsRequests.getFriendsRequest()
      .then((friends) => {
        this.setState({ friends });
      }).catch(err => console.error(err));
  }

  render() {
    // const { friends } = this.state;
    return (
      <div className="EditHoliday">
        <h3>Add Friends to Holiday Page</h3>
        <div></div>
      </div>
    );
  }
}

export default EditHoliday;
