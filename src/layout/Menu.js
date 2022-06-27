import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
        <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">

            <div className="sidebar-wrapper">
            <div className="logo">
                <Link to="/Dashboard" className="simple-text">
                    Inventory
                </Link>
            </div>
            <ul className="nav">
                <li className="active">
                <Link to="/Dashboard">
                    <i className="pe-7s-graph" />
                    <p>Dashboard</p>
                </Link>
                </li>
                <li>
                <Link to="/UserType">
                    <i className="pe-7s-user" />
                    <p>User Type</p>
                </Link>
                </li>
                <li>
                <Link to="/table">
                    <i className="pe-7s-note2" />
                    <p>Table List</p>
                </Link>
                </li>
                <li>
                <Link to="/typography">
                    <i className="pe-7s-news-paper" />
                    <p>Typography</p>
                </Link>
                </li>
                <li>
                <Link to="/icons">
                    <i className="pe-7s-science" />
                    <p>Icons</p>
                </Link>
                </li>
                <li>
                <Link to="/maps">
                    <i className="pe-7s-map-marker" />
                    <p>Maps</p>
                </Link>
                </li>
                <li>
                <Link to="/notifications">
                    <i className="pe-7s-bell" />
                    <p>Notifications</p>
                </Link>
                </li>
                <li className="active-pro">
                <Link to="/upgrade">
                    <i className="pe-7s-rocket" />
                    <p>Upgrade to PRO</p>
                </Link>
                </li>
            </ul>
            </div>
      </div>
    )
  }
}
