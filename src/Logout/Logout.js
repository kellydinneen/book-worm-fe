import React, {useState} from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import apple from '../assets/apple.svg';
import Login from '../Login/Login';



const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Logout({googleId}) {
    console.log(googleId)
    const [currentUser, setCurrentUser] = useState(googleId)
    console.log("beforeLogout", currentUser)
    const onLogoutSuccess = (res) => {     
        setCurrentUser({});
        console.log("logoutUser", currentUser)
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
          <img className="logOutButton" onClick={signOut} src={apple}></img>
          {currentUser === {} && <Redirect exact from="/home" to="/" />}
        </React.Fragment>
    );
}

export default Logout;