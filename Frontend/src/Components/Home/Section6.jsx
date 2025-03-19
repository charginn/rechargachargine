import React, { useState, useEffect } from 'react';
import '../csss/ContactCSS/Section6.css'; // Make sure you have proper CSS

const Section6 = () => {
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
    formDataToSend.append('access_key', 'd354e4fe-b7ae-449d-b15c-4dd1e31dc92a'); // Replace with your access key

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
    <div className="section6">
      <div className="section6Card">
        <div className="heading">Section 6 - Contact Us</div>
        <div className="sub-heading">Contact us for any inquiries and we will get back to you soon.</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="consultationType"
            placeholder="Consultation Type"
            value={formData.consultationType}
            onChange={handleChange}
          />
          <button type="submit" disabled={!isFormValid}>
            Send Us Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section6;
