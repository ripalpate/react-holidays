import React from 'react';
import { Button } from 'reactstrap';
import './HolidayDetail.scss';

// const firebaseId = this.props.match.params.id;
class HolidayDetail extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/:${view}/edit`);
  }

  changeViewFriend = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/:${view}/friends`);
  }

  render() {
    return (
      <div className="HolidayDetail mx-auto">
        <Button className ="btn btn-info m-4"id="1234" onClick={this.changeView}>Edit Holiday</Button>
        <Button className ="btn btn-info m-5" id="1234" onClick={this.changeViewFriend}>Add Friends To Holiday</Button>
      </div>
    );
  }
}

export default HolidayDetail;
