import React from 'react'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import Sticker from "../images/Sticker.jpg"
import Charger2 from "../images/Charger2.png"
import '../csss/HomeCSS/Section1.css'


const Section1 = ({scrollTOContact}) => {
  

  return (
<div className='section1'>
 
      <div className='images'>
        <img  className='image1' src={image1}/>
        <div className='together'>
        <img className='image2' src={image2}/>
        <img  className='image3' src={image3}/>
      </div>
      <img className='greenCircle' src={Sticker}/>
      <img className='chargerr2' src={Charger2}/>

      <div className='text'>
        <span className='greene'>FEATURED FOR</span>
        <div className='headline'>RCG believes in sustainable energy practices</div>
        <div className='para'>At Recharga Chargine, we are redefining the future of ...sustainable energy with our groundbreaking innovation: the Recharga Chargine Generator (RCG). Born from a passion for efficiency and sustainability, the RCG is an engineering marvel designed to transform how industries generate and utilize power.</div>
        <div className='quote'>RCG Solar Energy specialty:</div>
        <ul className='list'>
          <div>
          <li className='listItem'>Lower Energy Costs</li>
          <li className='lower'>Environmentally Friendly</li>
          </div>
          <div >
          <li>Increase Home Value</li>
          <li className='lower'> Energy Independence</li>
          </div>
        </ul>
          <button className='contact' onClick={scrollTOContact}>Contact RCG</button>
       
      </div>
    
      </div>
      
    </div>
  )
}

export default Section1




