import React from 'react';
import './EditFriend.scss';

class EditFriend extends React.Component {
  render() {
    const { match } = this.props;
    console.log(match);
    console.log(match);

    return (
      <div className="Home">
        <h4>Edit your Friend!!!</h4>
      </div>
    );
  }
}

export default EditFriend;
