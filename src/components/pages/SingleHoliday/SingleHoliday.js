import React from 'react';
import PropTypes from 'prop-types';
import holidaysShape from '../../../helpers/propz/holidaysShape';
import './SingleHoliday.scss';

class SingleHoilday extends React.Component {
  static propTypes = {
    holiday: holidaysShape,
    deleteSingleHoliday: PropTypes.func,
    passHolidayToEdit: PropTypes.func,
    holidayDetailView: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleHoliday, holiday } = this.props;
    deleteSingleHoliday(holiday.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passHolidayToEdit, holiday } = this.props;
    passHolidayToEdit(holiday.id);
  }

  changeHolidayToDetailView = (e) => {
    e.preventDefault();
    const { holidayDetailView, holiday } = this.props;
    holidayDetailView(holiday.id);
  }

  render() {
    const { holiday } = this.props;
    const makeButtons = () => (
          <div>
            <span className="">
              <button className="btn btn-danger" onClick= {this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
            <span className="">
              <button className="btn btn-success ml-2" onClick={this.editEvent}>
                <i className="fas fa-pencil-alt"></i>
              </button>
            </span>
          </div>
    );

    return (
      <div className="card ml-4 single-holiday-card bg-light mb-3">
        <div className="img-holder" onClick={this.changeHolidayToDetailView}>
        <img className="card-img-top holiday-img" src={holiday.imageUrl} alt="holiday"/>
        </div>
        <div className="card-body" onClick={this.changeHolidayToDetailView}>
          <h5 className="card-title">Name: {holiday.name}</h5>
          <p className="card-text"> Date: {holiday.Date}</p>
          <p className="card-text">Location: {holiday.location}</p>
          <p className="card-text">Start Time: {holiday.startTime}</p>
        </div>
        <div className="card-body">{makeButtons()}</div>
      </div>
    );
  }
}

export default SingleHoilday;
