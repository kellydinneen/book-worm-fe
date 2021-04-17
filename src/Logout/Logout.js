import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import apple from '../assets/apple.svg';

const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Logout() {
    const onLogoutSuccess = (res) => {
        alert('Logout was successful!');
         
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
        <button onClick={signOut} className="logoutButton">
            <img src={apple}></img>
            <p>Logout</p>
        </button>
    );
}

export default Logout;