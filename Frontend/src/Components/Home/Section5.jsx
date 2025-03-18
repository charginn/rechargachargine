import React from 'react'
import sec1 from '../images/sec1.png'
import sec2 from '../images/sec2.png'
import sec3 from '../images/sec3.png'
import dots from '../images/dots.png'
import sling from '../images/sling.png'
import { useRef } from 'react';


import '../csss/HomeCSS/Section5.css'

const Section5 = () => {
  
  return (
    <div className='section5'>
       <div className='howitworks'>

        <div className='headings'>
          <span className='caps'>HOW IT WORKS</span>
          <div className='normal'>We always follow the
          best way</div>
          </div>
        
          <div className='steps'>
           
            <div className='step1'>
              <img className='sec1' src={sec1} />
              <img className='dot1' src={dots} />
               <div className='greenBack1'>1</div>
                <div className='number1'>1</div>
              <div className='green-headline1'>Step 1: Mechanical to Electrical Conversion</div>
              <ul className='step1list'>
              <li>A motor rotates a shaft.</li>
              <li>The shaft, coupled to the generator, transfers kinetic energy.</li>
              <li>The generator's rotating magnets induce current in coils, producing electricity.</li>
               </ul>
            </div>
            <img className='sling' src={sling} />
            <div className='step2'>
            <img className='sec2' src={sec2} />
              <img className='dot2' src={dots} />
              
               <div className='greenback2'>2</div>
                <div className='number2'>2</div>
              <div className='green-headline2'>Step 2: Enhanced Efficiency and Performance</div>
              <ul  className='step2list'>
              <li>The multi-stator, multi-rotor design optimizes power output.</li>
              <li>Reduced energy losses and increased efficiency.</li>
              <li>Effective energy recovery in regenerative braking systems</li>
               </ul>
            </div>
          </div>
        </div>
        
        <div className='step3'>
          <img  className='sec3' src={sec3} />
          <img className='dot3' src={dots} />
          <div className='greenback3'>3</div>
          <div className='number3'>3</div>
          <div className='green-headline3'>Step 3: Versatile and Sustainable</div>
          <ul className='step3list'>
          <li>Scalable design for various power requirements.</li>
          <li>Efficient operation at low RPMs.</li>
          <li>Reduced reliance on external energy sources.</li>
          </ul>
        </div>
        
     </div>
      
  )
}

export default Section5;