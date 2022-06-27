import React, { Component } from 'react';
import Menu from '../layout/Menu';
import Header from '../layout/Header';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="main-panel">
          <Header />
        </div>
      </div>
    )
  }
}
