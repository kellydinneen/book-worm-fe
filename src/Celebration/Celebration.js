import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import wormImg from '../assets/worm.png';
import bookImg from '../assets/openbook.svg';
import apple from '../assets/plainApple.svg';
import flower from '../assets/flower.svg';
import donut from '../assets/donut.svg';
import sushi from '../assets/sushi.svg';
import redBalloon from '../assets/redBalloon.svg';
import yellowBalloon from '../assets/yellowBalloon.svg';
import { gsap, CSSPlugin } from 'gsap';

gsap.registerPlugin(CSSPlugin);

const Celebration = (props) => {
    const currentUser = props.currentUser;
    
    const celebrate = () => {
      CSSPlugin.defaultTransformPerspective = 300;
      gsap.to(".dancingWorm", {x: -150, duration:5, rotation:360})
      gsap.to(".dancingWorm", {x: 150, duration:5, scale: 1.2, ease: "bounce"})
      gsap.to(".dancingBook", {x: 150, duration:5, rotation:360})
      gsap.to(".dancingBook", {x: -150, duration:5, scale: 1.2, ease: "bounce"})
      gsap.to(".flower", {x: -40, y: 400, duration: 5, rotation:260, ease: "bounce"})
      gsap.to(".sushi", {x: -90, y: 465, duration: 6, rotation:360, ease: "bounce"})
      gsap.to(".apple", {y: 440, duration: 8, rotation:60, ease: "bounce"})
      gsap.to(".donut", {x: 80, y: 460, duration: 4, rotation:360, ease: "bounce"})
      gsap.to(".redBalloon", {y: -360, duration: 6, rotation: 40, ease: "bounce"})
      gsap.to(".yellowBalloon", {x: 100, y: -340, duration: 9, rotation: 340, ease: "bounce"})
    }
    
 
    useEffect(() => {
      celebrate();
    }, []);

    return(
      <>
      <section className="celebrationDisplay">
        <h2 className="celebrationTitle">Congratulations, {currentUser.givenName}! You finished! </h2>
        <div id="container" className="celebrationStation">
          
          <div className="confettiContainer">
          <img src={flower} className="confetti flower" alt="falling flower animation"></img>
          <img src={sushi} className="confetti sushi" alt="falling sushi animation"></img>
          <img src={apple} className="confetti apple" alt="falling apple animation"></img>
          <img src={donut} className="confetti donut" alt="falling donut animation"></img>
          </div>

          <div className="celebrationContainer">
            <img className="dancingWorm" src={wormImg} alt="spinning and dancing worm"></img>
            <img className="dancingBook" src={bookImg} alt="bouncy book"></img>
          </div>

          <div className="balloonContainer">
            <img className="balloon redBalloon" src={redBalloon} alt="a red balloon flying upwards"></img>
            <img className="balloon yellowBalloon" src={yellowBalloon} alt="a yellow balloon flying upwards"></img>
          </div>
        </div>
        <Link to={{
          pathname: '/home',
          state: {currentUser: currentUser}
        }}>
        <button className="buttonHome">Home</button>
        </Link>
      </section>
    </>
    )
}

export default Celebration;
