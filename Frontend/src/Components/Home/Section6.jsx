import React, { useState, forwardRef } from 'react';
import pointer from '../images/pointer.png';
import '../csss/HomeCSS/Section6.css';

const Section6 = forwardRef((props, ref) => {  // ✅ Fixed forwardRef syntax

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        intercoms: '',
        message: '',
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.agreeTerms) {
            alert("You must accept the terms and conditions.");
            return;
        }

        const response = await fetch('http://localhost:5000/UserContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                intercoms: '',
                message: '',
                agreeTerms: false
            });
        } else {
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className='section6' ref={ref}> {/* ✅ Attach ref here */}
            <div className='text-part'>
                <div className='small'><img src={pointer} alt="Pointer" /> Contact Recharga Chargine</div>
                <div className='big'>Get In Touch With Us</div>
                <div className='details'>
                    We’re finding ways to bring energy to more people in more ways every day,
                    so that all of us can be part of the changing energy system. Because Power
                    ring Progress means providing.
                </div>
                <div className='address'>
                    <div className='top'>
                        <div>Our Address</div>
                        <div>Our Mail Address</div>
                    </div>
                    <div className='bottom'>
                        <div>Jaipur, Rajasthan, India</div>
                        <div>salesinquiry@rechargachargine.com</div>
                    </div>
                </div>
            </div>
            <div className='form-part'>
                <div className='green-line'></div>
                <form className='form-fill' onSubmit={handleSubmit}>
                    <div className='input1'>
                        <input type="text" placeholder='Name*' name="name" onChange={handleChange} value={formData.name} />
                        <input type="email" placeholder='Email*' name="email" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className='input2'>
                        <input type="text" placeholder='Phone*' name="phone" onChange={handleChange} value={formData.phone} />
                        <input type="text" placeholder='Intercoms' name="intercoms" onChange={handleChange} value={formData.intercoms} />
                    </div>
                    <div className='input3'>
                        <textarea placeholder='Message*' name="message" onChange={handleChange} value={formData.message} />
                        <div className='checkbox-div'>
                            <input type="checkbox" className='checkbox' name="agreeTerms" onChange={handleChange} checked={formData.agreeTerms} />
                            <label> Accept terms and conditions from Rechraga Chargine</label>
                           
                            <button type="submit">Send Us For Email</button>                            
                            </div>
                       
                    </div>
                </form>
            </div>
        </div>
    );
});

export default Section6;
