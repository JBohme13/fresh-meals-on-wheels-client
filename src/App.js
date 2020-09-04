import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Context from './Context/Context';
import Header from './Header/Header';
import Home from './Home/Home';
import MealsHome from './Meals/MealsHome';
import VolunteerCreateUser from './Volunteer/VolunteerSignUp/VolunteerCreateUser';
import VolunteerHome from './Volunteer/VolunteerHome';
import VolunteerLogin from './Volunteer/VolunteerLogin';
import VolunteerInfo from './Volunteer/VolunteerInfo';
import AdminLogin from './Admin/AdminLogin';
import Main from './Main/Main';
import VolunteerSignUpForm from './Volunteer/VolunteerSignUp/VolunteerSignUpForm';

 class App extends Component {
  static contextType = Context;
  
  handlePageNavigation = pathway => {
    this.props.history.push(`${pathway}`)
  };

  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        main: Home,
        header: Header,
      },
      {
        path: '/meals',
        exact: true,
        main: MealsHome,
        header: Header
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
        path: '/volunteer/createUser',
        exact: false,
        main: VolunteerCreateUser,
        header: Header
      },
      {
        path: '/volunteer/login',
        exact: false,
        main: VolunteerLogin,
        header: Header
      },
      {
        path: '/admin',
        exact: true,
        main: AdminLogin,
        header: Header
      }
    ];
  
    const mainNavLinks =[
      {
        id:'mainNavHome',
        name:'Home',
        to:'/',
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
    ];

    const contextValue = {
      handlePageNavigation: this.handlePageNavigation
    }
    return (
      <Context.Provider
        value={contextValue}
      >
        <Header mainNavLinks={mainNavLinks}/>
        <Main routes={routes}/>
      </Context.Provider>
    );
  };
 };

export default withRouter(App);