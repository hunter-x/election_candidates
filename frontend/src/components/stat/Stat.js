import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';

export default class Stat extends Component {
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>
      <Navbar home='' stat='active' about='' />
       <h1>Stat</h1>
      </div>
    );
  }
}
