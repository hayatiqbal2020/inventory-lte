import React from 'react';
import Menu from '../layout/Menu';
import Header from '../layout/Header';

const Dashboard =()=> {

    return (
      <div>
        <Menu />
        <div className="main-panel">
          <Header />
        </div>
      </div>
    )

}
export default Dashboard;