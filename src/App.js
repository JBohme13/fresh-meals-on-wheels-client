import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from './Header/Header';
import Login from './Login/Login';
import VolunteerSignUpForm from './Volunteer/VolunteerSignUp/VolunteerSignUpForm';
import VolunteerHome from './Volunteer/VolunteerHome';
import VolunteerLogin from './Volunteer/VolunteerLogin';
import VolunteerInfo from './Volunteer/VolunteerInfo';
import Main from './Main/Main';

function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      main: Login,
      header: Header,
    },
    {
      path: '/volunteer',
      exact: true,
      main: VolunteerInfo,
      header: Header
    },
    {
      path: '/volunteer/home',
      exact: false,
      main: VolunteerHome,
      header: Header
    },
    {
      path: '/volunteer/signUp',
      exact: false,
      main: VolunteerSignUpForm,
      header: Header
    },
    {
      path: '/volunteer/login',
      exact: false,
      main: VolunteerLogin,
      header: Header
    }
  ];

  const mainNavLinks =[
    {
      id:'mainNavHome',
      name:'Home',
      to:'/home',
    },
    {
      id:'mainNavMeals',
      name:'Get Meals',
      to:'/meals',
    },
    {
      id:'mainNavVolunteer',
      name:'Volunteer',
      to:'/volunteer',
    },
    {
      id:'mainNavAdmin',
      name:'Admin',
      to:'/admin',
    }
  ]
  return (
    <section>
      <Header mainNavLinks={mainNavLinks}/>
      <Main routes={routes}/>
    </section>
  );  
}

export default withRouter(App);