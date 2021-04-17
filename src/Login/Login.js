import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
              clientId={clientId}
              buttonText='Login'
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '100px' }}
              isSignedIn={true}
            />
        </div>
    );
}

export default Login;