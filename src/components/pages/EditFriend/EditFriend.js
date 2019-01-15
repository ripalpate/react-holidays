import React from 'react';
import './EditFriend.scss';

class EditFriend extends React.Component {
  componentDidMount() {
    const firebaseId = this.props.match.params.id;
    console.log(firebaseId);
  }

  render() {
    return (
      <div className="Home">
        <h4>Edit your Friend!!!</h4>
      </div>
    );
  }
}

export default EditFriend;
