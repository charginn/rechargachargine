import React from 'react'
import mail from '../images/mail.png'
import Headset from '../images/Headset.png'
import Location from '../images/Location.png'
import {useState} from 'react';
import Svgc1 from '../images/Svgc1.png';
import scgc2 from '../images/svgc2.png';
import svgc3 from '../images/svgc3.png';
import svgc4 from '../images/svgc4.png';
import svgc5 from '../images/svgc5.png';
import svgc6 from '../images/svgc6.png';
import '../csss/ContactCSS/Contact2.css';



const Contact2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        consultationType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send form data to the backend
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Message sent successfully!');
            // Optionally, reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                consultationType: ''
            });
        } else {
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className='contact2'>
            <div className='firsthalf'>
                
            
            <div className='contactCard'>
            <div className='heading'>Make Apointment</div>
                    <div className='sub-heading'>RechargaChargine offers full range of solar
                        energy services for renewable
                        energy</div>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />
                        <input type="email" name="email" placeholder='Your Email' value={formData.email} onChange={handleChange} />
                        <input type="text" name="phone" placeholder='Your Phone' value={formData.phone} onChange={handleChange} />
                        <input type="text" name="consultationType" placeholder='Consultation Type' value={formData.consultationType} onChange={handleChange} />
                        <button type='submit'>Send us Your Mail</button>
                    </form>
                </div>
            </div>
            <div  className='secondhalf'>
            <div className='text'>
                <span className='Git'>Get In Touch</span>
                <div className='for'>For More Inquiry Give Us A call</div>
                <div className='info'>
                    <div><img src={Headset} />+919322107991</div>
                    <div><img src={Location} />Jaipur ,Rajasthan</div>
                    <div ><img src={mail} />salesinquiry@rechargachargibe.com</div>
                </div>
            </div>
            <div className='contactImage'>
            <img className='path' src={svgc6} />
                <div className='mills'>
                <img className='Svgc1' src={Svgc1} />
                <img className='scgc2' src={scgc2} />
                <img className='scgc3' src={svgc3} />
                <img className='scgc4'src={svgc4} />
                <img className='scgc5'src={svgc5} />
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default Contact2