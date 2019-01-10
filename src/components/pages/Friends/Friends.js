import React from 'react';
import './Friends.scss';

// const firebaseId = this.props.match.params.id;
class Friends extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/friends/:${view}/edit`);
  }

  render() {
    const { match } = this.props;

    return (
      <div className="Friends" match={match} id="1234" onClick={this.changeView}>
        <button className = "btn btn-info">Edit Friend</button>
      </div>
    );
  }
}

export default Friends;
