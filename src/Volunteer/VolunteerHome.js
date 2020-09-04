import React, { Fragment } from 'react';
import SectionBanner from '../LayoutComponents/SectionBanner';
import SubBanner from '../LayoutComponents/SubBanner';
import VolunteerNavBar from './VolunteerNavBar';

export default function VolunteerHome() {
    return(
        <Fragment>
            <VolunteerNavBar />
            <section>
                <SectionBanner name='Welcome to Meals On Wheels Volunteer Portal!'/>
                <SubBanner name='Continue reading here to learn about volunteering for Meals On Wheels, or click Sign Up above to get started!'/>
                <p>*this is where all of the volunteering information will be presented for current volunteers such as available routes and shifts*</p>
            </section>
        </Fragment>
    )
}