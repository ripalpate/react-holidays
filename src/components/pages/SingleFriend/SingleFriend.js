import React from 'react';
import './SingleFriend.scss';
import friendsShape from '../../../helpers/propz/friendsShape';

class SingleFriend extends React.Component {
  static propTypes = {
    message: friendsShape,
  }

  render() {
    const { friend } = this.props;
    return (
        <div className="card ml-4 single-friend-card bg-light mb-3">
          <h5 className="card-header">{friend.name}</h5>
          <div className="card-body">
            <p className="card-text"> Address: {friend.address}</p>
            <p className="card-text">Phone Number: {friend.phoneNumber}</p>
            <p className="card-text">Email: {friend.email}</p>
          </div>
        </div>
    );
  }
}

export default SingleFriend;
