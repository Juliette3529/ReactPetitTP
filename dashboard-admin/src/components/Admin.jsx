import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import DashboardList from "./DashboardList";

class Admin extends Component {

  constructor(props) {
    super(props);
  }

  handleLogout(e) {
    e.preventDefault();
  }

  render() {

    const url = this.props.match.url;
    const path = this.props.match.path;

    return (
      <div>
        <nav className="nav-main">
          <ul>
            <li><NavLink to={url + "/dashboards"} activeClassName="active">Dashboard</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to={url + "/profile"} activeClassName="active">Profile</NavLink></li>
            <li><a href="#" onClick={e => this.handleLogout(e)}>Logout</a></li>
          </ul>
        </nav>
        <Route exact path={path + "/dashboards"} component={DashboardList}/>
      </div>
    );
  }

}

export default Admin;