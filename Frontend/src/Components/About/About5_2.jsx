import React from 'react'
import i2 from '../images/i2.png'
import '../csss/AboutCSS/About5.css'

const About5_2 = () => {
  return (
 <div className='about5_2'>
    
    <div className='box'>
        <div className='bold'>Magnetic Flux Variation</div>
        <div className='normal'>The generator contains a fully multi-rotor design which divides into five sections(rotors). Three of these sections have neodymium-iron-boron magnets, and two have copper coils. As the rotors spin, they create a dynamic interaction between the magnetic field and the coils.</div>
    </div>
    <img src={i2}/>
</div>
  )
}

export default About5_2