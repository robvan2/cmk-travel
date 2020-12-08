import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/index'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <h1 className="footer__header">
                Join the adventure newsletter to recieve our best vacation deals
            </h1>
            <div className="footer__subscription">
                <h3 className="footer__subscription__headline">
                    You can unsubscribe at any time
                </h3>
                <div className="footer__subscription__form">
                    <input type="email" autoComplete='none' placeholder='Your Email' />
                    <Button className="btn" buttonStyle='btn--outline'
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className="footer__wrapper">
                <div className="footer__links">
                    <h3 className="footer__links__header">
                        About Us
                    </h3>
                    <Link to='/' className="footer__links__item">How it works</Link>
                    <Link to='/' className="footer__links__item">Testimonials</Link>
                    <Link to='/' className="footer__links__item">Careers</Link>
                    <Link to='/' className="footer__links__item">Investors</Link>
                    <Link to='/' className="footer__links__item">Terms of Service</Link>
                </div>
                <div className="footer__links">
                    <h3 className="footer__links__header">
                        Contact Us
                    </h3>
                    <Link to='/' className="footer__links__item">Contact</Link>
                    <Link to='/' className="footer__links__item">Support</Link>
                    <Link to='/' className="footer__links__item">Festinations</Link>
                    <Link to='/' className="footer__links__item">Sponsorships</Link>
                </div>
                <div className="footer__links">
                    <h3 className="footer__links__header">
                        Videos
                    </h3>
                    <Link to='/' className="footer__links__item">Submit Video</Link>
                    <Link to='/' className="footer__links__item">Ambassadors</Link>
                    <Link to='/' className="footer__links__item">Agency</Link>
                    <Link to='/' className="footer__links__item">Influencer</Link>
                </div>
                <div className="footer__links">
                    <h3 className="footer__links__header">
                        Social Media
                    </h3>
                    <Link to='/' className="footer__links__item">Facebook</Link>
                    <Link to='/' className="footer__links__item">Instagram</Link>
                    <Link to='/' className="footer__links__item">Twitter</Link>
                    <Link to='/' className="footer__links__item">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
