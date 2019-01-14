import React from 'react';
import friendsRequests from '../../../helpers/data/friendsRequests';
import './NewFriend.scss';
import authRequests from '../../../helpers/data/authRequests';

const defaultFriend = {
  name: '',
  address: '',
  phoneNumber: '',
  email: '',
  relationship: '',
  isAvoiding: false,
  uid: '',
};

class NewFriend extends React.Component {
  state = {
    newFriend: defaultFriend,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempFriend = { ...this.state.newFriend };
    tempFriend[name] = e.target.value;
    this.setState({ newFriend: tempFriend });
  }

  nameChange = e => this.formFieldStringState('name', e);

  addressChange = e => this.formFieldStringState('address', e);

  phoneNumberChange = e => this.formFieldStringState('phoneNumber', e);

  emailChange = e => this.formFieldStringState('email', e);

  relationshipChange = e => this.formFieldStringState('relationship', e);

  formSubmitEvent = (newFriend) => {
    friendsRequests.createFriend(newFriend)
      .then(() => {
        this.props.history.push('/friends');
      }).catch(err => console.error(err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const myFriend = { ...this.state.newFriend };
    myFriend.uid = authRequests.getCurrentUid();
    this.formSubmitEvent(myFriend);
    this.setState({ newFriend: defaultFriend });
  }

  render() {
    const { newFriend } = this.state;
    return (
      <div className="NewFriend">
        <h2>Add New Friend:</h2>
        <form className="friend-form" onSubmit={ this.formSubmit }>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="John Smith"
              value= {newFriend.name}
              onChange= {this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
              placeholder="500 Interstate Blvd, Nashville, TN-37210"
              value = {newFriend.address}
              onChange = {this.addressChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number :</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              aria-describedby="phoneNumberHelp"
              placeholder="615-123-3213"
              value = {newFriend.phoneNumber}
              onChange = {this.phoneNumberChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="yoyo@mamma.com"
              value = {newFriend.email}
              onChange = {this.emailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship:</label>
            <input
              type="text"
              className="form-control"
              id="relationship"
              aria-describedby="relationHelp"
              placeholder="Mother"
              value = {newFriend.relationship}
              onChange = {this.relationshipChange}
            />
          </div>
          <button className="btn btn-success">Save Friend</button>
        </form>
      </div>
    );
  }
}

export default NewFriend;
