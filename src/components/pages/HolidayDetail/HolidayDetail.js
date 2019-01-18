import React from 'react';
import { Button } from 'reactstrap';
import './HolidayDetail.scss';
import authRequests from '../../../helpers/data/authRequests';
import holidaysRequests from '../../../helpers/data/holidaysRequests';
import holidayFriendsRequests from '../../../helpers/data/holidayFriendsRequests';
import friendsRequests from '../../../helpers/data/friendsRequests';
// import singleFriend from '../SingleFriend/SingleFriend';

class HolidayDetail extends React.Component {
  state = {
    singleHoliday: [],
    friends: [],
  }

  componentDidMount() {
    const firebaseId = this.props.match.params.id;
    const uid = authRequests.getCurrentUid();
    holidaysRequests.getSingleHoliday(firebaseId)
      .then((singleHoliday) => {
        holidayFriendsRequests.getFriendIdsForHoliday(firebaseId)
          .then((friendIds) => {
            friendsRequests.getFriendsByArrayOfIds(uid, friendIds)
              .then((friends) => {
                console.log(friends);
                this.setState({ singleHoliday });
                this.setState({ friends });
              });
          });
      }).catch(err => console.error(err));
  }

  changeViewFriend = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/:${view}/friends`);
  }

  render() {
    return (
      <div className="HolidayDetail mx-auto">
        <Button className ="btn btn-success m-5" id="1234" onClick={this.changeViewFriend}>Add Friends To Holiday</Button>
      </div>
    );
  }
}

export default HolidayDetail;
