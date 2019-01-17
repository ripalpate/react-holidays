import React from 'react';
import { Button } from 'reactstrap';
import SingleHoliday from '../SingleHoliday/SingleHoliday';
import './Holidays.scss';
import authRequests from '../../../helpers/data/authRequests';
import holidaysRequests from '../../../helpers/data/holidaysRequests';

class Holidays extends React.Component {
  state = {
    holidays: [],
  }

  getHolidays = () => {
    const uid = authRequests.getCurrentUid();
    holidaysRequests.getHolidaysRequest(uid)
      .then((holidays) => {
        this.setState({ holidays });
      }).catch(err => console.error(err));
  }

  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`${view}`);
  }

  componentDidMount() {
    this.getHolidays();
  }

  deleteOne = (holidayId) => {
    holidaysRequests.deleteHoliday(holidayId)
      .then(() => {
        this.getHolidays();
      })
      .catch(err => console.error(err));
  }

  passHolidayToEdit = (holidayId) => {
    this.props.history.push(`/holidays/${holidayId}/edit`);
  }

  render() {
    const singleHolidayComponent = this.state.holidays.map(holiday => (
      <SingleHoliday
      holiday={holiday}
      key={holiday.id}
      deleteSingleHoliday = {this.deleteOne}
      passHolidayToEdit = {this.passHolidayToEdit}
      />
    ));
    return (
      <div className="Holidays mx-auto">
        <Button className="btn btn-success mt-5" id="holidays/new" onClick={this.changeView}>Add new Holiday</Button>
        <div className="singleHoliday mt-3 row">{singleHolidayComponent}</div>
      </div>
    );
  }
}

export default Holidays;
