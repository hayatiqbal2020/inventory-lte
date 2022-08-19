import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserType from './components/UserType';
import UserTypeAlter from './components/UserTypeAlter';

class App extends React.Component
{
  render() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="UserType" element={<UserType />}></Route>
            <Route path="UserTypeAlter" element={<UserTypeAlter />}></Route>
          </Routes>
        </BrowserRouter>
      );
  }
}

export default App;
