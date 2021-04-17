import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout was successful!');
         
    };

    return (
        <div>
            <GoogleLogout
              clientId={clientId}
              buttonText='Logout'
              onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;