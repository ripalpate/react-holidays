import React from 'react';
import './EditFriend.scss';
import friendsRequests from '../../../helpers/data/friendsRequests';
import authRequests from '../../../helpers/data/authRequests';

const defaultFriend = {
  name: '',
  address: '',
  phoneNumber: '',
  email: '',
  relationship: '',
  isAvoiding: '',
  uid: '',
};

class EditFriend extends React.Component {

  state = {
    editId: '-1',
    editedFriend: defaultFriend,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempFriend = { ...this.state.editedFriend };
    tempFriend[name] = e.target.value;
    this.setState({ editedFriend: tempFriend });
  }

  nameChange = e => this.formFieldStringState('name', e);

  addressChange = e => this.formFieldStringState('address', e);

  phoneNumberChange = e => this.formFieldStringState('phoneNumber', e);

  emailChange = e => this.formFieldStringState('email', e);

  relationshipChange = e => this.formFieldStringState('relationship', e);

  formSubmitEvent = (editedFriend) => {
    const { editId } = this.state;
    friendsRequests.editFriend(editId, editedFriend)
      .then(() => {
        this.props.history.push('/friends');
      }).catch(err => console.error(err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const myFriend = { ...this.state.editedFriend };
    myFriend.uid = authRequests.getCurrentUid();
    this.formSubmitEvent(myFriend);
    this.setState({ editedFriend: defaultFriend });
  }

  componentDidMount() {
    const firebaseId = this.props.match.params.id;
    friendsRequests.getSingleFriend(firebaseId)
      .then((friend) => {
        this.setState({ editedFriend: friend });
        this.setState({ editId: friend.id });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { editedFriend } = this.state;
    return (
      <div className="NewFriend">
        <h2>Edit Friend:</h2>
        <form className="friend-form" onSubmit={ this.formSubmit }>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              value= {editedFriend.name}
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
              value= {editedFriend.address}
              onChange= {this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number :</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              aria-describedby="phoneNumberHelp"
              value= {editedFriend.phoneNumber}
              onChange= {this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value= {editedFriend.email}
              onChange= {this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship:</label>
            <input
              type="text"
              className="form-control"
              id="relationship"
              aria-describedby="relationHelp"
              value= {editedFriend.relationship}
              onChange= {this.nameChange}
            />
          </div>
          <button className="btn btn-success">Save Friend</button>
        </form>
      </div>
    );
  }
}

export default EditFriend;
