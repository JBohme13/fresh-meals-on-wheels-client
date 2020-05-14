import React, { useState } from 'react';
import TextInput from '../FormComponents/TextInput';
import Button from '../FormComponents/Button';

export default function Login(props) {
    const [adminUserName, setAdminUserName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const handleUserNameChange = input => setAdminUserName(input);
    const handlePasswordChange = input => setAdminPassword(input);
    const handleAdminLogin = e => {
        e.preventDefault();
        //Fetch admin login here
    }

    return (
        <form id='login-form'>
            <TextInput
                type='text'
                id='user-name'
                name='User Name'
                required={true}
                placeholder='Your user name here'
                onChange={e => handleUserNameChange(e.target.value)}
            />
            <TextInput
                type='text'
                id='password'
                name='Password'
                required={true}
                placeholder='Your password here'
                onChnge={e => handlePasswordChange(e.target.value)}
            />
            <Button
                name='Login'
                onClick={e => handleAdminLogin(e.target.value)}
            />
        </form>
    )
}