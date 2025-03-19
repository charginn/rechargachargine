import React, { useState, useEffect } from 'react';
import mail from '../images/mail.png';
import Headset from '../images/Headset.png';
import Location from '../images/Location.png';
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
    consultationType: '',
  });
  
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if all form fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every((field) => field.trim() !== '');
    setIsFormValid(allFilled);
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData and append access_key
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("access_key", "d354e4fe-b7ae-449d-b15c-4dd1e31dc92a");

    // Send form data to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      alert('Your form is successfully submitted!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
      });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='contact2'>
      <div className='firsthalf'>
        <div className='contactCard'>
          <div className='heading'>Make Appointment</div>
          <div className='sub-heading'>
            RechargaChargine offers a full range of solar energy services for renewable energy
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder='Your Phone'
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="consultationType"
              placeholder='Consultation Type'
              value={formData.consultationType}
              onChange={handleChange}
            />
            <button type='submit' disabled={!isFormValid}>
              Send us Your Mail
            </button>
          </form>
        </div>
      </div>

      <div className='secondhalf'>
        <div className='text'>
          <span className='Git'>Get In Touch</span>
          <div className='for'>For More Inquiry Give Us A call</div>
          <div className='info'>
            <div><img src={Headset} alt="Headset" />+919322107991</div>
            <div><img src={Location} alt="Location" />Jaipur, Rajasthan</div>
            <div><img src={mail} alt="Mail" />salesinquiry@rechargachargibe.com</div>
          </div>
        </div>
        <div className='contactImage'>
          <img className='path' src={svgc6} alt="SVG6" />
          <div className='mills'>
            <img className='Svgc1' src={Svgc1} alt="Svgc1" />
            <img className='scgc2' src={scgc2} alt="scgc2" />
            <img className='scgc3' src={svgc3} alt="svgc3" />
            <img className='scgc4' src={svgc4} alt="svgc4" />
            <img className='scgc5' src={svgc5} alt="svgc5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
