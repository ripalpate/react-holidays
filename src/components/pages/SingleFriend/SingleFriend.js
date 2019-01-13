import React from 'react';
import PropTypes from 'prop-types';
import './SingleFriend.scss';
import friendsShape from '../../../helpers/propz/friendsShape';
import authRequests from '../../../helpers/data/authRequests';

class SingleFriend extends React.Component {
  static propTypes = {
    message: friendsShape,
    deleteSingleFriend: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleFriend, friend } = this.props;
    deleteSingleFriend(friend.id);
  }

  render() {
    const { friend } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (friend.uid === uid) {
        return (
            <span className="">
              <button className="btn btn-danger" onClick= {this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
        );
      }
      return <span className=""></span>;
    };

    return (
        <div className="card ml-4 single-friend-card bg-light mb-3">
          <h5 className="card-header">{friend.name}</h5>
          <div className="card-body">
            <p className="card-text"> Address: {friend.address}</p>
            <p className="card-text">Phone Number: {friend.phoneNumber}</p>
            <p className="card-text">Email: {friend.email}</p>
            <p className="card-text">{makeButtons()}</p>
          </div>
        </div>
    );
  }
}

export default SingleFriend;
