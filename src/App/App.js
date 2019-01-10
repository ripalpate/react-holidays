import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import MyNavBar from '../components/MyNavbar/MyNavbar';
import Friends from '../components/pages/Friends/Friends';
import Holidays from '../components/pages/Holidays/Holidays';
import NewFriend from '../components/pages/NewFriend/NewFriend';
import NewHoliday from '../components/pages/NewHoliday/NewHoliday';
import EditFriend from '../components/pages/EditFriend/EditFriend';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import HolidayDetail from '../components/pages/HolidayDetail/HolidayDetail';
import EditHoliday from '../components/pages/EditHoliday/EditHoliday';
import holidayFriends from '../components/pages/HolidayFriends/HolidayFriends';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props}/>)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }}/>));
  return <Route {...rest} render={props => routeChecker(props)}/>;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props}/>)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }}/>));
  return <Route {...rest} render={props => routeChecker(props)}/>;
};

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, pendingUser } = this.state;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
          <MyNavBar isAuthed={authed} logoutClickEvent={logoutClickEvent}/>
          <div className="appContainer">
            <div className="row">
              <Switch>
                <PrivateRoute exact path="/" component={Home} authed={this.state.authed}/>
                <PrivateRoute path="/home" component={Home} authed={this.state.authed}/>
                <PrivateRoute exact path="/friends/" authed={this.state.authed} component={Friends}/>
                <PrivateRoute exact path="/holidays/" authed={this.state.authed} component={Holidays}/>
                <PrivateRoute exact path="/holidays/:id" authed={this.state.authed} component={HolidayDetail}/>
                <PrivateRoute path="/holidays/:id/edit" authed={this.state.authed} component={EditHoliday}/>
                <PrivateRoute path="/holidays/:id/friends" authed={this.state.authed} component={holidayFriends}/>
                <PrivateRoute path="/friends/new" authed={this.state.authed} component={NewFriend}/>
                <PrivateRoute path="/holidays/new" authed={this.state.authed} component={NewHoliday}/>
                <PrivateRoute path='/friends/:id/edit' authed={this.state.authed} component={EditFriend}/>
                <PublicRoute path="/auth" component={Auth} authed={this.state.authed}/>
              </Switch>

            </div>
          </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
