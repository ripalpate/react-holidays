import React from 'react';
import holidaysRequests from '../../../helpers/data/holidaysRequests';
import './NewHoliday.scss';
import authRequests from '../../../helpers/data/authRequests';

const defaultHoliday = {
  name: '',
  Date: '',
  imageUrl: '',
  location: '',
  startTime: '',
  uid: '',
};

class NewHoliday extends React.Component {
  state = {
    newHoliday: defaultHoliday,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempHoliday = { ...this.state.newHoliday };
    tempHoliday[name] = e.target.value;
    this.setState({ newHoliday: tempHoliday });
  }

  nameChange = e => this.formFieldStringState('name', e);

  imageChange = e => this.formFieldStringState('imageUrl', e);

  dateChange = e => this.formFieldStringState('Date', e);

  locationChange = e => this.formFieldStringState('location', e);

  startTimeChange = e => this.formFieldStringState('startTime', e);

  formSubmitEvent = (newHoliday) => {
    holidaysRequests.createHoliday(newHoliday)
      .then(() => {
        this.props.history.push('/holidays');
      }).catch(err => console.error(err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const myHoliday = { ...this.state.newHoliday };
    myHoliday.uid = authRequests.getCurrentUid();
    this.formSubmitEvent(myHoliday);
    this.setState({ newHoliday: defaultHoliday });
  }


  render() {
    const { newHoliday } = this.state;
    return (
      <div className="NewHoliday">
        <h3>New Holiday Page</h3>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Halloween"
              value= {newHoliday.name}
              onChange= {this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              aria-describedby="imageHelp"
              placeholder="www.jrekjr.jpg"
              value= {newHoliday.imageUrl}
              onChange= {this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              className="form-control"
              id="date"
              aria-describedby="dateHelp"
              placeholder="11/26/2018"
              value = {newHoliday.Date}
              onChange = {this.dateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location :</label>
            <input
              type="text"
              className="form-control"
              id="location"
              aria-describedby="locationHelp"
              placeholder="1 main st, Nashville, TN 37210"
              value = {newHoliday.location}
              onChange = {this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startTime">Start Time: </label>
            <input
              type="text"
              className="form-control"
              id="startTime"
              aria-describedby="startTimeHelp"
              placeholder="11:15am"
              value = {newHoliday.startTime}
              onChange = {this.startTimeChange}
            />
          </div>
          <button className="btn btn-success">Save Holiday</button>
        </form>
      </div>
    );
  }
}

export default NewHoliday;
