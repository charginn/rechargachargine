import React from 'react';
import SolarPanels from "../images/SolarPanels.png";
import Charging from "../images/Charging.png";
import Charger from "../images/Charger.jpg";
import Sticker from "../images/Sticker.jpg";
import BSVG1 from "../images/BSVG1.png";
import BSVG2 from "../images/BSVG2.png";
import BSVG3 from  "../images/BSVG3.png";
import '../csss/HomeCSS/Section3.css';
const Section3 = () => {
    return (
        <div className='section3'>
            <div className='greenee'>WHY CHOOSE US</div>
            <div className='sub-heading'>Driving the Future of<br/> Energy</div>
            <div className='row'>
                <div className='col' id='col1'>
                    <div className='heading'>Cutting Edge Design</div>
                    <p className='content'>Our proprietary multi-stator, multi-rotor configuration maximizes power output while minimizing energy waste.</p>
                    <div className='line'>
                        <div className='num'>01</div>
                        <div className='greencard'><img src={BSVG1} /></div>
                    </div>
                </div>
                <div className='col' id='col1'>
                    <div className='heading'>Versatile Applications</div>
                    <p className='content'>From powering wind turbines to optimizing industrial motors, the RCG is adaptable to a wide range of industries.</p>
                    <div className='line'>
                        <div className='num'>02</div>
                        <div className='greencard'><img src={BSVG2}/></div>
                    </div>
                </div>
                <div className='col' id='col2'>
                    <div className='heading'>Sustainable Impact</div>
                    <p className='content'>The RCG reduces carbon emissions and energy costs, contributing to a cleaner, greener planet.</p>
                    <div className='line3   '>
                        <div className='num3'>03</div>
                        <div className='greencard3'><img src={BSVG3}/></div>
                    </div>
                </div>
                <div className='col' id='col2'>
                    <div className='heading'>Scalable and Reliable</div>
                    <p className='content'>Designed for modularity and robustness, the RCG seamlessly integrates into operations of any scale.</p>
                    <div className='line'>
                        <div className='num'>04</div>
                        <div className='greencard'><img src={BSVG3}/></div>
                    </div>
                </div>
               
            </div>
            <div className='Block'>
                <div className='images'>
                    <img className='charging' src={Charging} />
                    <img className='sticker' src={Sticker} />
                    <img className='charger' src={Charger} />
                    
                </div>
                <div className='paragraph'>
                    <div className='mission'>RCG missions are made for best performance</div>
                    <p className='content'>At Recharga Chargine, we are not just creating a product; we are shaping a movement. With the RCG, we aim to revolutionize energy efficiency across critical sectors like renewable energy, manufacturing, and mobility.</p>
                    <p className='content'>Join us in powering a sustainable tomorrow with the Recharga Chargine Generator—where innovation meets impact.</p>
                    <p className='probim'>Problem we are solving- Wind turbines, electric vehicles (EVs), and manufacturing industries require more sustainable, energy-efficient technologies to meet environmental standards and improve operational efficiency.</p>
                    <p className='probim'>Impact- Recharga Chargine’s technology increases energy efficiency and output across various applications, including wind turbines, manufacturing lines, and EVs. This translates to significant cost savings and a reduction in carbon emissions.</p>
                </div>
                <div>
                    <img className='solarpanels' src={SolarPanels} />
                </div>
            </div>
        </div>
    )
}

export default Section3
/* Section */

