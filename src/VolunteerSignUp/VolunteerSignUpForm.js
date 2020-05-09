import React, { useState, Fragment } from 'react'
import ContactInfo from './ContactInfo';
import PersonalInfo from './PersonalInfo';
import References from './References';
import AutoInfo from './AutoInfo';
import SectionBanner from '../LayoutComponents/SectionBanner';
import SubBanner from '../LayoutComponents/SubBanner';

export default function VolunteerSignUpForm(props) {
    return(
        <Fragment>    
            <SectionBanner name='Volunteer Sign Up'/>
            <SubBanner name='If you need help please give us a Call! (###)###-####'/>
            <ContactInfo />
            <PersonalInfo />
            <References />
            <AutoInfo />
        </Fragment>
    )
}