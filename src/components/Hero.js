import React from 'react'
import '../App.css'
import {Button} from './Button'
import '../assets/css/Hero.css'
function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>LET NATURE HEAL YOU</h1>
            <p>Are you ready for this?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Trailer <i class="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default Hero
