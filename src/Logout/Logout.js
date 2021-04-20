import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import apple from '../assets/apple.svg';



const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Logout({ setCurrentUser, currentUser }) {

    const onLogoutSuccess = (res) => {
        setCurrentUser({});
        console.log('Logout was successful!');
    };
    const onFailure = () => {
        console.log('Logout failed')
    }
    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });
    return (
        <React.Fragment>
          <img className="logOutButton" onClick={signOut} src={apple} alt="apple as a logout button"></img>
          {!currentUser.googleId && <Redirect to="/" />}
        </React.Fragment>
    );
}

export default Logout;
