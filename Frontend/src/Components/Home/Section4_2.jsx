import React, { useState } from 'react';
import About from '../images/About.png'; 
import { useNavigate } from 'react-router-dom';
import'../csss/HomeCSS/Section4.css';

const Section4_2 = ({ setActiveSection }) => {  // Receive setActiveSection as a prop
  const navigate = useNavigate();
  const [sliderStyle, setSliderStyle] = useState({ left: "170px", width: "220px" });

  const moveSlider = (left, width, section) => {
    setSliderStyle({ left, width });

    if (section === 'industrial') {
      setActiveSection('industrial');  // Switch to Section4_2
    } else {
      setActiveSection('wind');  // Switch back to Section4_1
    }
  };

  return (
    <div className='section4_2'>
      <div className="content">
        <div className='heading'>OUR AREA OF WORK</div>
        <div className='sub-heading'>Review our case studies to get a better idea</div>
      </div>

      {/* Slider Navigation */}
      <div className="over-line">
        <div onMouseEnter={() => moveSlider("0px", "150px", "wind")}>
          Wind Turbine
        </div>
        <div onMouseEnter={() => moveSlider("170px", "220px", "industrial")}>
          Industrial Motors/Manufacturing Units
        </div>
      </div>

      {/* Slider Bar */}
      <div className="slider">
        <div className="slider-bar" style={sliderStyle}></div>
      </div>

      {/* Main Content */}
      <div className='energy'>
        <img className='big-image' src={About} alt="Industrial Motors" />
        <div className='All-details'>
          <div className='over-line'>
            <div className='boxes'>Maintenance</div>
            <div className='boxes'>Powergrid</div>
            <div className='boxes'>Turbine</div>
          </div>
          <div className='boldsent'>Industrial Motors Project</div>
          <hr className='line' />
          <div className='more-details'>It fits on the shaft on any industrial motor and uses the excess capacity to regenerate and redirect the energy to another motor, another device or store the energy for backup.</div>
        </div>
      </div>
    </div>
  );
};

export default Section4_2;
