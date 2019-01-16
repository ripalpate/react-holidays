import React from 'react';
import './SingleHoliday.scss';

class SingleHoilday extends React.Component {
  render() {
    const { holiday } = this.props;
    return (
    <div className="card ml-4 single-friend-card bg-light mb-3">
          <h5 className="card-header">{holiday.name}</h5>
          <div className="card-body">
            <p className="card-text"> Date: {holiday.Date}</p>
            <p className="card-text">Location: {holiday.location}</p>
            <p className="card-text">Start Time: {holiday.startTime}</p>
          </div>
        </div>
    );
  }
}

export default SingleHoilday;
