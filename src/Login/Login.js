import React, {useState} from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import { Home } from '../Home/Home';
import wormImg from '../assets/worm.png';
import bookImg from '../assets/openbook.svg';
import { gsap } from 'gsap';

const clientId = '426129823464-ckm4t40qqinikh5e96pvna36i4tujlo5.apps.googleusercontent.com';

function Login() {
    const [currentUser, setCurrentUser] = useState({})
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        setCurrentUser(res.profileObj)
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
    gsap.to(".worm", {x: -100, duration:2, ease: "bounce"})
    gsap.to(".book", {x: 100, duration:2, scale: 1.2, ease: "bounce"})

    return (
        <React.Fragment>
        {currentUser && <main>
          <div className="loginBackground">
            <div className="loginContainer">
              <div className="imageContainer">
                <img className="book" src={bookImg}></img>
                <img className="worm" src={wormImg}></img>
              </div>
              <button onClick={signIn} className="loginButton">
               Sign In
              </button>
            </div>
          </div>
        </main>
        }   
       {/* <Home currentUser={currentUser}/> */}
        </React.Fragment>
        
        
    )
}

export default Login;