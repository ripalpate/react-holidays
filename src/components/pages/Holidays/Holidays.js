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
      <div className="Holidays">
        <Button className="btn btn-info" id="1234" onClick={this.changeView}>Holiday Detail</Button>
      </div>
    );
  }
}

export default Holidays;
