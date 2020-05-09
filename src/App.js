import React, { Component } from 'react';
import Header from './Header/Header';
import Login from './Login/Login';
import VolunteerSignUpForm from './VolunteerSignUp/VolunteerSignUpForm';
import Main from './Main/Main';

export default class App extends Component {
  render() {
    const routes = [
      {
        path: '/',
        exact: false,
        main: VolunteerSignUpForm,
        header: Header,
      }
    ]
    return (
      <section>
        <Header/>
        <Main routes={routes}/>
      </section>
    );  
  }
}