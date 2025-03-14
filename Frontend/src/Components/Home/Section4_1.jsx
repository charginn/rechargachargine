import React, { useState, useRef, useEffect } from 'react';
import energy from '../images/energy.png';
import'../csss/HomeCSS/Section4.css';

const Section4_1 = ({ setActiveSection }) => {
  const [sliderStyle, setSliderStyle] = useState({ left: "0px", width: "0px" });
  const refs = useRef([]); // Store references to divs

  const sections = [
    { name: "Wind Turbine", section: "wind" },
    { name: "Industrial Motors/Manufacturing Units", section: "industrial" }
  ];

  useEffect(() => {
    // Set initial slider position after component mounts
    if (refs.current.length > 0) {
      const firstElement = refs.current[0];
      if (firstElement) {
        setSliderStyle({
          left: `${firstElement.offsetLeft}px`,
          width: `${firstElement.offsetWidth}px`
        });
      }
    }
  }, []);

  const moveSlider = (index) => {
    setTimeout(() => {
      const element = refs.current[index];
      if (element) {
        const left = element.offsetLeft;
        const width = element.offsetWidth;

        console.log(`Element ${index}: left=${left}px, width=${width}px`); // Debugging

        setSliderStyle({
          left: `${left}px`,
          width: `${width}px`
        });

        setActiveSection(sections[index].section);
      }
    }, 10); // Small delay to ensure the element is fully rendered
  };

  return (
    <div className='section4_1'>
      <div className="content">
        <div className='heading'>OUR AREA OF WORK</div>
        <div className='sub-heading'>Review our case studies to get a better idea</div>
      </div>

      {/* Over-line navigation */}
      <div className="over-line">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)} // Store ref
            onMouseEnter={() => moveSlider(index)}
          >
            {section.name}
          </div>
        ))}
      </div>

      {/* Slider Bar */}
      <div className="slider">
        <div className="slider-bar" style={sliderStyle}></div>
      </div>

      <div className='energy'>
        <img className='big-image' src={energy} alt="Energy" />
        <div className='All-details'>
          <div className='over-line'>
            <div className='boxes'>Maintenance</div>
            <div className='boxes'>Powergrid</div>
            <div className='boxes'>Turbine</div>
          </div>
          <div className='boldsent'>Wind Turbine Project for <br /> GreenTech</div>
          <hr className='line' />
          <div className='more-details'>
            Recharga's innovative PMSG generator, leveraging Faraday's law, utilizes a multi-stator and rotor design to significantly enhance power output. This unique configuration optimizes electromagnetic interactions, leading to greater efficiency and scalability. Ideal for high-power applications in renewable energy and electric vehicles.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4_1;