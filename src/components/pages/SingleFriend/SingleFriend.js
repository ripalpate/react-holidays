import React from 'react';
import PropTypes from 'prop-types';
import './SingleFriend.scss';
import friendsShape from '../../../helpers/propz/friendsShape';
import authRequests from '../../../helpers/data/authRequests';

class SingleFriend extends React.Component {
  static propTypes = {
    message: friendsShape,
    deleteSingleFriend: PropTypes.func,
    passFriendToEdit: PropTypes.func,
    friendDetailView: PropTypes.bool,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleFriend, friend } = this.props;
    deleteSingleFriend(friend.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passFriendToEdit, friend } = this.props;
    passFriendToEdit(friend.id);
  }

  render() {
    const { friend, friendDetailView } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (friend.uid === uid && !friendDetailView) {
        return (
          <div className="card ml-4 single-friend-card bg-light mb-3">
          <h5 className="card-header">{friend.name}</h5>
          <div className="card-body">
            <p className="card-text"> Address: {friend.address}</p>
            <p className="card-text">Phone Number: {friend.phoneNumber}</p>
            <p className="card-text">Email: {friend.email}</p>
            <span className="">
                 <button className="btn btn-danger" onClick= {this.deleteEvent}>
                   <i className="fas fa-trash-alt"></i>
                 </button>
               </span>
               <span className="">
                 <button className="btn btn-success ml-2" onClick= {this.editEvent}>
                   <i className="fas fa-pencil-alt"></i>
                 </button>
               </span>
          </div>
        </div>
        );
      }
      return (<h5 className="card-header">{friend.name}</h5>);
    };

    return (
        <div> {makeButtons()} </div>
    );
  }
}

export default SingleFriend;
