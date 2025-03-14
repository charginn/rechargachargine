import React from 'react'
import About4Image from '../images/About4Image.png'
import SVG1 from '../images/SVG1.png'
import SVG2 from '../images/SVG2.png'
import SVG3 from '../images/SVG3.png'
import SVG4 from '../images/SVG4.png'
import '../csss/AboutCSS/About4.css'     

const About4 = () => {
    return (
        <div className='about4'>
            <div className='greenLine'></div>
            <div className='block'>
                <div className='writtenPart'>
                    <div className='heading'>Definition of recharge chargine generator:</div>
                    <div className='new'>A Recharge Charging Generator (RCG) is a device that converts mechanical energy
                        into usable electrical energy by utilizing the principle of electromagnetic induction,
                        incorporating a multi-rotor concept.</div>
                </div>
                <div className='imagePart'>
                    <img src={About4Image} />
                </div>
            </div>
            <div></div>
            <div className='block2'>
                <div className='block2Part' >
                    <img src={SVG1}/>
                    <div className='heading'>Expert Installation</div>
                    <div className='content'>We offer professional solar
                        panel installation services .Team
                        of experienced technicians will
                        ensure it is installed correctly.</div>
                </div>
                <div className='block2Part'>
                    <img src={SVG2}/>
                    <div className='heading'>Low Cost operation</div>
                    <div className='content'>We offer professional solar
                        panel installation services .Team
                        of experienced technicians will
                        ensure it is installed correctly.</div>
                </div>
                <div className='block2Part'>
                    <img src={SVG3}/>
                    <div className='heading'>Instant Support</div>
                    <div className='content'>We offer professional  installation services .Team of experienced technicians will ensure it is installed correctly.</div>
                </div>
                <div className='block2Part'>
                    <img src={SVG4}/>
                    <div className='heading'>Modern Technology</div>
                    <div className='content'>We offer professional solar
                        panel installation services .Team
                        of experienced technicians will
                        ensure it is installed correctly.</div>
                </div>
            </div>
        </div>
    )
}

export default About4


