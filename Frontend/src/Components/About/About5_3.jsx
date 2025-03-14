import React from 'react'
import i3 from '../images/i3.png'
import '../csss/AboutCSS/About5.css'


const About5_3 = () => {
  return (
    <div className='about5_3'>
    <img src={i3}/>
    <div className='box'>
        <div className='bold'>Magnetic Flux Variation</div>
        <div className='normal'>The generator contains a fully multi-rotor design which divides into five sections(rotors). Three of these sections have neodymium-iron-boron magnets, and two have copper coils. As the rotors spin, they create a dynamic interaction between the magnetic field and the coils.</div>
    </div>
</div>
  )
}

export default About5_3