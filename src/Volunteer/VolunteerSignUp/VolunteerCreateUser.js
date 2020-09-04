import React, { useContext,useState, Fragment } from 'react'
import UserInfo from'./UserInfo';
import SubBanner from '../../LayoutComponents/SubBanner'
import Button from '../../FormComponents/Button'
import Context from '../../Context/Context';

export default function VolunteerCreateUser(props) {
    const value = useContext(Context);
    const apiUrl = 'http://localhost:8000';
    //user info state variables
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const createNewUser = e => {
        e.preventDefault();

        const userInfo = {
            userName: userName,
            password: password
        }
        value.handlePageNavigation('/volunteer/signUp');
        fetch(`${apiUrl}/api/volunteers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then((userRes) => {
            if (userRes.ok) {
                return userRes.json();
            } else {
                throw new Error('Something went wrong, please try again')
            }
        })
        .then(userResJson => {
            console.log(userResJson);
        })
        value.handlePageNavigation('/volunteer/signUp');
    };

    return(
        <Fragment>
            <SubBanner name='Please create a username and password below' />
            <UserInfo 
                handleUserNameChange={userName => setUserName(userName)}
                handlePasswordChange={password => setPassword(password)}
            />
            <Button 
                onClick={e => createNewUser(e)} 
                type='submit'
                name='Save'
            />
        </Fragment>
    )
}