import React from 'react'
import AboutImage1 from '../images/AboutImage1.png'
import AboutImage2 from '../images/AboutImage2.png'
import '../csss/AboutCSS/About2.css'
const About2 = () => {
  return (
    <div className='about2'>
        <div className='button'>ABOUT RECHARGE CHARGINE</div>
        <div className='block'>
            <div className='Content1'>Recharga Chargine offers an innovative magnetic flywheel technology that captures and regenerates energy from rotating mechanisms.</div>
            <div className='Content2'>Our solution integrates seamlessly with wind turbines, EVs, and production lines in industries like garment and food manufacturing, improving energy efficiency and output.<br/><button className='button2'>Learn More</button></div>
           
        </div>
        <div className='block2'>
          <img className='AboutImage1'src={AboutImage1}/>
          <img className='AboutImage2'src={AboutImage2}/>
        </div>
    </div>
  )
}

export default About2