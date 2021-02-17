import React, { Component } from 'react';
import Profiles from '../components/Profiles';
import './Employee.css';


export default class Employees extends Component {
render() {
return (
  <div className="boundary">
    <p className="title">OUR TEAM</p>
    <h4>Lorem ipsum dolor sit</h4>
    <p className="employee">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
   
    <Profiles ></Profiles>
  </div>
);
}

}