import React from 'react'
import vector from '../images/Vector.png'
import '../csss/AboutCSS/About3.css'
const About3 = () => {
  return (
    <div className='about33'>
    <div className='about3'>
        <div className='block1'>
          <div className='small1'>
            <div className='num'>20+</div>
           <div className='same'>Employees</div>  
           </div>
            <div className='text'>We have 20+ amazing
           expert solar expert for
            repair & installation</div>
        </div>
        <div className='vertical-line'></div>
       
        <div className='block2'>
          <div className='small2'>
            <div className='num'>100% </div>
            <div className='same'>  Client Satisfaction</div>
            </div>
            <div className='text'>We achieved 100% of
             our client satisfaction
              through our work</div>
        </div>
       
    </div>
   
    <div className='horizontal-line'></div>
    <img src={vector}/>
   
    </div>
  );
}

export default About3;