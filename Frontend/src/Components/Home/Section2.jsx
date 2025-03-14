import React from 'react';
import windmills from '../images/windmills.png';
import Card1 from'../images/Card1.png';
import Card2 from '../images/Card2.png';
import Lazer from '../images/Lazer.png';
import '../csss/HomeCSS/Section2.css';
const Section2 = () => {
    return (
        <div className='section2'>
            <div className='left'>
                <div className='greene'>FEATURE FOR</div>
                <div className='headline'>A Game-Changer in Energy Generation</div>
                <img className='background' src={windmills}/>
                <div className='Cards'>
                    <img src={Card1}/>
                    <img src={Card2}/>
                  
                </div>
            </div>
            <div className='Right'>
                <img className='Lazer' src={Lazer}/>
                <div className='paragraph'><p>The RCG is powered by our proprietary, patent-pending technology, which combines an innovative multi-stator and multi-rotor design to achieve unparalleled energy efficiency improvements of 25% or more. </p>

<p>Leveraging advanced electromagnetic principles, the RCG captures and regenerates energy with unmatched precision, setting new standards for performance and reliability.</p>
</div>
<div className='Learn'>Learn More</div>
            </div>
           
        </div>
    )
}

export default Section2;






