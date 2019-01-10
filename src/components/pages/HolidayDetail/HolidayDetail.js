import React from 'react';
import { Button } from 'reactstrap';
import './HolidayDetail.scss';

// const firebaseId = this.props.match.params.id;
class HolidayDetail extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    console.log(view);
    this.props.history.push(`/holidays/:${view}/edit`);
    this.props.history.push(`/holidays/:${view}/friends`);
  }

  render() {
    return (
      <div className="HolidayDetail">
        <Button className ="btn btn-info"id="1234" onClick={this.changeView}>Edit Holiday</Button>
        <Button className ="btn btn-info" id="1234" onClick={this.changeView}>Add Friends To Holiday</Button>
      </div>
    );
  }
}

export default HolidayDetail;
