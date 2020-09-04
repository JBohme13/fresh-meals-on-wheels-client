import React from 'react';
import { NavLink } from 'react-router-dom';
import './VolunteerNavBar.css';

export default function VolunteerNavBar() {
    return(
        <section id='navFragment'>
                <NavLink
                    id='volunteerInfo'
                    className='volunteerNav'
                    to='/volunteer'
                >
                    About Volunteering
                </NavLink>
                <NavLink
                    id='volunteerHome'
                    className='volunteerNav'
                    to='/volunteer/home'
                >
                    Home
                </NavLink>
                <NavLink
                    id='volunteerSignUp'
                    className='volunteerNav'
                    to='/volunteer/signUp'
                >
                    Sign Up!
                </NavLink>
                <NavLink
                    id='volunteerLogIn'
                    className='volunteerNav'
                    to='/volunteer/login'
                >
                    Log In
                </NavLink>
            </section>
    )
}