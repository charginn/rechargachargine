import React from 'react'
import Section1 from './Section1'
import HeroSection from './HeroSection'
import Section2 from './Section2'
import Section3 from './Section3'
import Section5 from './Section5'
import Section4_1 from './Section4_1'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import Section6 from './Section6'
import Section4_2 from './Section4_2'
import { useState ,useRef} from 'react';


const HomeSection = () => {
  const [activeSection, setActiveSection] = useState('null');
  const ContactSectionRef=useRef(null);


  const scrollTOContact=()=>{
    if(ContactSectionRef.current){
      ContactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

 
  return (
    <div>
     
        <HeroSection/>
        <Section1 scrollTOContact={scrollTOContact}/>
        <Section2/>
        <Section3/>
        {activeSection === 'wind' ?(<Section4_1 setActiveSection={setActiveSection} />) :( <Section4_2 setActiveSection={setActiveSection} />)}
        <Section5/>
        <Section6 ref={ContactSectionRef}/>
        <Footer/>
    </div>
  )
}

export default HomeSection

