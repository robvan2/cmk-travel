import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { Button } from '../Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero">
            <video className="hero__video" src='/videos/video-1.mp4' autoPlay loop muted></video>
            <h1 className="hero__header">
                ADVENTURE AWAITS
            </h1>
            <p className="hero__headline">What are you waiting for?</p>
            <div className="hero__buttons">
                <Button className="btn" buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btn" buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH TRAILER <FaRegPlayCircle className="btn__icon" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
