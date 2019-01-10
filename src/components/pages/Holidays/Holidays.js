import React from 'react';
import { Button } from 'reactstrap';
import './Holidays.scss';

class Holidays extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/:${view}`);
  }

  render() {
    return (
      <div className="Holidays mx-auto">
        <Button className="btn btn-success mt-5" id="1234" onClick={this.changeView}>Holiday Detail</Button>
      </div>
    );
  }
}

export default Holidays;
