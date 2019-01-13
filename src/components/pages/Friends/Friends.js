import React from 'react';
import { Button } from 'reactstrap';
import friendsRequests from '../../../helpers/data/friendsRequests';
import SingleFriend from '../SingleFriend/SingleFriend';
import './Friends.scss';

// const firebaseId = this.props.match.params.id;
class Friends extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    friendsRequests.getFriendsRequest()
      .then((friends) => {
        this.setState({ friends });
      }).catch(err => console.error(err));
  }

  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/friends/:${view}/edit`);
  }

  render() {
    const singleFriendComponent = this.state.friends.map(friend => (
      <SingleFriend
      friend={friend}
      key={friend.id}
      />));
    return (
      <div className="Friends mx-auto" id="1234" to="/friend/:id/edit" onClick={this.changeView}>
        <div>
          <Button className ="btn btn-success mt-5">Edit Friend</Button>
        </div>
        <div className="singleFriend mt-3 row">{singleFriendComponent}</div>
      </div>
    );
  }
}

export default Friends;
