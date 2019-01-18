import React from 'react';
import { Button } from 'reactstrap';
import './HolidayDetail.scss';
import authRequests from '../../../helpers/data/authRequests';
import holidaysRequests from '../../../helpers/data/holidaysRequests';
import holidayFriendsRequests from '../../../helpers/data/holidayFriendsRequests';
import friendsRequests from '../../../helpers/data/friendsRequests';
import SingleFriend from '../SingleFriend/SingleFriend';

class HolidayDetail extends React.Component {
  state = {
    singleHoliday: [],
    friends: [],
    friendDetailView: true,
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
    const { singleHoliday, friends, friendDetailView } = this.state;

    // const friendsStringBuilder = () => {
    //   let friendString = '<h3>Friends:</h3>';
    //   friends.forEach((friend) => {
    //     friendString += `<h5>${friend.name}</h5>`;
    //   });
    //   return friendString;
    // };

    const attendingFriend = friends.map(friend => (
      <SingleFriend
      key={friend.id}
      friend={friend}
      name= {friend.name}
      friendDetailView= {friendDetailView}
      />
    ));
    return (
      <div className="HolidayDetail mx-auto">
        <Button className ="btn btn-success m-5" id="1234" onClick={this.changeViewFriend}>Add Friends To Holiday</Button>
        <div className="card ml-4 single-holiday-card bg-light mb-3">
          <div className="img-holder">
          <img className="card-img-top holiday-img" src={singleHoliday.imageUrl} alt="holiday"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: {singleHoliday.name}</h5>
            <p className="card-text"> Date: {singleHoliday.Date}</p>
            <p className="card-text">Location: {singleHoliday.location}</p>
            <p className="card-text">Start Time: {singleHoliday.startTime}</p>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">Attending Friends</h5>
          {attendingFriend}
          </div>
      </div>
    );
  }
}

export default HolidayDetail;
