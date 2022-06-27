import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserType from './components/UserType';

class App extends React.Component
{
  render() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="UserType" element={<UserType />}></Route>
          </Routes>
        </BrowserRouter>
      );
  }
}

export default App;
