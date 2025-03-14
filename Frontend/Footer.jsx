import React from 'react'
import Charger from '../images/Charger.png'
import Gradient from '../images/Gradient.png'
import mountain from '../images/mountain.png'
import human from '../images/human.png'
import HeadSet from '../images/Headset.png'
import footerBackground from '../images/footerBackground.jpg'


const Footer = () => {
    return (
        <div className='footer'>
            <img src={footerBackground} />
            <div className='second'>
                <div className='firstElement'>
                    <div className='charger'>
                        <img src={Charger} />
                        <div>Recharge Chargine</div>
                    </div>
                    <p>We believe in sustainable energy
                        practices that can help preserve our
                        planet.</p>
                </div>
                <div className='call'>
                    <div>CONTACT US</div>
                    <div>Recharge Chargine</div>
                </div>
                <div>sahej.sharma@rechargachargine.com</div>
                <div>+91 9322107991</div>
                <div>Contact Us</div>
            </div>
            <hr className='line' />
            <div className='third'>
                <div>© Copyright 2024 </div>
                <div>Recharge Chargine. </div>
                <div>All rights reserved.</div>
            </div>
            <div className='greenFlap'>
                <img src={Gradient} />
                <p>RCG believes in sustainable
                    energy practices all time</p>
                <img className='mountain' src={mountain} />
                <img className='human' src={human} />
                <div>
                    <img src={HeadSet} />
                    <div>
                        <div>+91-9322107991</div>
                        <div>Call Us Anytime</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer