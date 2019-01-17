import React from 'react';
import './EditHoliday.scss';
import holidaysRequests from '../../../helpers/data/holidaysRequests';
import authRequests from '../../../helpers/data/authRequests';

const defaultHoliday = {
  name: '',
  Date: '',
  imageUrl: '',
  location: '',
  startTime: '',
  uid: '',
};

class EditHoliday extends React.Component {
  state = {
    editId: '-1',
    editedHoliday: defaultHoliday,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempHoliday = { ...this.state.editedHoliday };
    tempHoliday[name] = e.target.value;
    this.setState({ editedHoliday: tempHoliday });
  }

  nameChange = e => this.formFieldStringState('name', e);

  imageChange = e => this.formFieldStringState('imageUrl', e);

  dateChange = e => this.formFieldStringState('Date', e);

  locationChange = e => this.formFieldStringState('location', e);

  startTimeChange = e => this.formFieldStringState('startTime', e);

  formSubmitEvent = (editedHoliday) => {
    const { editId } = this.state;
    holidaysRequests.editHoliday(editId, editedHoliday)
      .then(() => {
        this.props.history.push('/holidays');
      }).catch(err => console.error(err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const myHoliday = { ...this.state.editedHoliday };
    myHoliday.uid = authRequests.getCurrentUid();
    this.formSubmitEvent(myHoliday);
    this.setState({ editedHoliday: defaultHoliday });
  }

  componentDidMount() {
    const firebaseId = this.props.match.params.id;
    holidaysRequests.getSingleHoliday(firebaseId)
      .then((holiday) => {
        this.setState({ editedHoliday: holiday });
        this.setState({ editId: holiday.id });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { editedHoliday } = this.state;
    return (
      <div className="EditHoliday">
        <h3>Edit Holiday Page</h3>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              value= {editedHoliday.name}
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
              value= {editedHoliday.imageUrl}
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
              value = {editedHoliday.Date}
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
              value = {editedHoliday.location}
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
              value = {editedHoliday.startTime}
              onChange = {this.startTimeChange}
            />
          </div>
          <button className="btn btn-success">Save Edited Holiday</button>
        </form>
      </div>
    );
  }
}

export default EditHoliday;
