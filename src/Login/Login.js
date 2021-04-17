import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import star from '../assets/star.svg'

const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };
    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    })
    return (
        <button onClick={signIn} className="loginButton">
            <img src={star}>
            </img>
            <p>Login</p>
        </button>
    )
}

export default Login;