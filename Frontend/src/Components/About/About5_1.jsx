import React from 'react'
import i1 from '../images/i1.png'
import '../csss/AboutCss/About5.css'

const About5 = () => {
    return (
        <div className='about5_1'>
            <div className='working'>Working principle of recharga chargine generator:</div>
            <div className='defination'>
                The Recharge Charging Generator (RCG) operates on the principle of Faraday's Law of Electromagnetic Induction, which states that a changing magnetic flux through a coil induces an electromotive force (EMF) in the coil. Here's how it works
            </div>
            <div className='details'>
                <img src={i1}/>
                <div className='box'>
                    <div className='bold'>Magnetic Flux Variation</div>
                    <div className='normal'>The generator contains a fully multi-rotor design which divides into five sections(rotors). Three of these sections have neodymium-iron-boron magnets, and two have copper coils. As the rotors spin, they create a dynamic interaction between the magnetic field and the coils.</div>
                </div>
            </div>
          
        </div>
    )
}

export default About5