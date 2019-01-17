import React from 'react';
import './EditHoliday.scss';

class EditHoliday extends React.Component {
  componentDidMount() {
    const firebaseId = this.props.match.params.id;
  }

  render() {
    return (
      <div className="EditHoliday">
        <h3>Edit Holiday Page</h3>
      </div>
    );
  }
}

export default EditHoliday;
