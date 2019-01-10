import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;

    const buildNavbar = () => {
      if (isAuthed) {
        return (
          <Nav className= "ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/home/"><i className="fas fa-home fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/friends/"><i className="fas fa-user-friends fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/friends/new"><i className="fas fa-user fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/Holidays"><i className="fas fa-holly-berry fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/holidays/new"><i className="fas fa-candy-cane fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logoutClickEvent}><i className="fas fa-sign-out-alt fa-2x"></i></NavLink>
            </NavItem>
          </Nav>

        );
      }
      return <Nav className= "ml-auto" navbar/>;
    };

    return (
      <div className="my-navbar">
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Holidays</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
