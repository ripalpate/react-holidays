import React from 'react';
import { Button } from 'reactstrap';
import './Friends.scss';

// const firebaseId = this.props.match.params.id;
class Friends extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/friends/:${view}/edit`);
  }

  render() {
    return (
      <div className="Friends mx-auto" id="1234" to="/friend/:id/edit" onClick={this.changeView}>
        <Button className ="btn btn-success mt-5">Edit Friend</Button>
      </div>
    );
  }
}

export default Friends;
