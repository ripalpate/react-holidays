import React from 'react';
import './SingleHoliday.scss';

class SingleHoilday extends React.Component {
  render() {
    const { holiday } = this.props;
    return (
      <div className="card ml-4 single-holiday-card bg-light mb-3">
        <div className="img-holder">
        <img className="card-img-top holiday-img" src={holiday.imageUrl} alt="holiday"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">Name: {holiday.name}</h5>
          <p className="card-text"> Date: {holiday.Date}</p>
          <p className="card-text">Location: {holiday.location}</p>
          <p className="card-text">Start Time: {holiday.startTime}</p>
        </div>
      </div>
    );
  }
}

export default SingleHoilday;
