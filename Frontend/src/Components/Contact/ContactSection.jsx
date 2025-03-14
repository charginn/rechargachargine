import React from 'react'
import Contact1 from './Contact1'
import Contact2 from './Contact2'
import Contact3 from './Contact3'
import Footer from '../../Footer'

const ContactSection = () => {
  return (
    <div className='contactSection'>
        <Contact1/>
        <Contact2/>
        <Contact3/>
        <Footer/>
    </div>
  )
}

export default ContactSection