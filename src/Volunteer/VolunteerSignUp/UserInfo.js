import React from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import TextInput from '../../FormComponents/TextInput';

export default function UserInfo (props) {
    return(
        <section className={props.className}>
            <SubBanner name='User Information' />
            <TextInput
                id='userName'
                name='User Name'
                required={true}
                placeholder=''
                onChange={e => props.handleUserNameChange(e.target.value)}
            />
            <TextInput
                id='password'
                name="Password"
                required={true}
                placeholder=''
                onChange={e => props.handlePasswordChange(e.target.value)}
            />
        </section>
    )
}

            