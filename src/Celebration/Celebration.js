import React from 'react';
import wormImg from '../assets/worm.png';
import bookImg from '../assets/openbook.svg';
import { gsap, CSSPlugin} from 'gsap';
gsap.registerPlugin(CSSPlugin);

const FinishedBook = ({currentUser}) => {
    CSSPlugin.defaultTransformPerspective = 400;
    gsap.to(".dancingWorm", {x: -200, duration:5, rotation:360})
    gsap.to(".dancingWorm", {x: 200, duration:5, scale: 1.2, ease: "bounce"})
    gsap.to(".dancingBook", {x: 200, duration:5, rotation:360})
    gsap.to(".dancingBook", {x: -200, duration:5, scale: 1.2, ease: "bounce"})

       
      
    

    return(
        <div id="container" className="celebrationStation">
            {confetti}
        <h2 className="celebrationTitle">Congratulations, {currentUser.givenName}! You finished! </h2>
          <div className="celebrationContainer">
            <img className="dancingWorm" src={wormImg}></img>
            <img className="dancingBook" src={bookImg}></img>
          </div>
        </div>
    )
}

export default FinishedBook;