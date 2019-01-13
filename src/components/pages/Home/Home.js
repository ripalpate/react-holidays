import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className="Home mx-auto">
        <div className="card-deck mt-5">
          <div className="card border-dark" id="friends" onClick={this.changeView}>
            <div className="card-body home text-center">
              <h4 className="card-title"><i className="fas fa-user-friends fa-6x home-friend"></i></h4>
              <h5 className="card-subtitle mb-2 text-muted">Friends</h5>
              <p className="card-text">List of Friends</p>
            </div>
          </div>
          <div className="card border-dark" id='Holidays' onClick={this.changeView}>
            <div className="card-body home text-center">
              <h4 className="card-title"><i className="fas fa-holly-berry fa-6x home-holiday"></i></h4>
              <h5 className="card-subtitle mb-2 text-muted">Holidays</h5>
              <p className="card-text">Holiday Detail</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
