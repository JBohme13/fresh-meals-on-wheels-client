import React, { useState } from 'react';
import TextInput from '../FormComponents/TextInput';
import Button from '../FormComponents/Button';
import SubBanner from '../LayoutComponents/SubBanner';

export default function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleUserNameChange(input) {
        setUserName(input);
    }

    function handlePasswordChange(input) {
        setPassword(input);
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
                //onClick={this.handleLoginClick}
            />
            <SubBanner name='New to Meals on Wheels? Click Register below to Sign up!'/>
            <Button
                name='Register' 
                //onClick={this.handleRegisterClick}
            />
        </form>
    )
}