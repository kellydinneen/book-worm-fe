import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import wormImg from '../assets/worm.png';

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
        <main>
          <div className="loginBackground">
            <div className="loginContainer">
              <img className="worm" src={wormImg}></img>
              <button onClick={signIn} className="loginButton">
               Sign In
              </button>
            </div>
          </div>
        </main>
    )
}

export default Login;