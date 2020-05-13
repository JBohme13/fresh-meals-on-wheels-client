import React, { useState, Fragment } from 'react';
import VolunteerNavBar from './VolunteerNavBar';
import TextInput from '../FormComponents/TextInput';
import Button from '../FormComponents/Button';

export default function VolunteerLogin(props) {
    const [volunteerUserName, setVolunteerUserName] = useState('');
    const [volunteerPassword, setVolunteerPassword] = useState('');

    const handleUserNameChange = userName => setVolunteerUserName(userName);
    const handlePasswordChange = password => setVolunteerPassword(password);
    const handleVolunteerLogin = e => {
        e.preventDefault();
        //Make API call to verify user credentials
        /*fetch(`${apiUrl}/api/volunteer/credentials`, {
            method: 'GET'
        })*/
    }
    return(
        <Fragment>
            <VolunteerNavBar />
            <form id='volunteerLogin'>
                <TextInput
                    id='volunteeruserName'
                    name='User Name'
                    required={true}
                    onChange={e => handleUserNameChange(e.target.value)}
                />
                <TextInput
                    id='volunteerPassword'
                    name='Password'
                    required={true}
                    onChange={e => handlePasswordChange(e.target.value)}
                />
                <Button
                    id='volunteerLoginSubmit'
                    name='Log In'
                    type='submit'
                    onSubmit={e => handleVolunteerLogin(e)}
                />
            </form>
        </Fragment>
    )
}