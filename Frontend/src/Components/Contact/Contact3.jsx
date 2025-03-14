import React from 'react';
import "../csss/ContactCSS/Contact3.css"; 
import v3 from "../images/v3.png";
import v4 from "../images/v4.png";
import v5 from "../images/v5.png";
import v6 from "../images/v6.png";
import v7 from "../images/v7.png";
import v8 from "../images/v8.png";
import v9 from "../images/v9.png";
import v10 from "../images/v10.png";
import v11 from "../images/v11.png";
import v12 from "../images/v12.png";
import v13 from "../images/v13.png";
import v14 from "../images/v14.png";
import v15 from "../images/v15.png";
import v16 from "../images/v16.png";
import v17 from "../images/v17.png";
import v0 from "../images/v0.png";
import v1 from "../images/v1.png";
import v2 from "../images/v2.png";
import v18 from "../images/v18.png";
import v19 from "../images/v19.png"
import v20 from "../images/v20.png"
import google from "../images/google.png";
import direction from "../images/direction.png";
import rating from "../images/rating.png";
import inImage from "../images/in.png";
import out from "../images/out.png";
import horizontal from "../images/horizontal.png";
import {MapPin} from 'lucide-react'


const images = [v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17,v18,v19,v20];

const gridLayout = [
  [18,17 ,14, 11, 8, 5,2],
  [,19,16,13, 10, 7, 4,1],
  [,20,15,12, 9, 6, 3,0],
];

const Contact3 = () => {
  return (
    <div className="contact3">
    <div className="container">
      <div className="gallery">
        {gridLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((imageIndex) => (
              <div key={imageIndex} className="image-container">
                <img src={images[imageIndex]} alt={`Map Part ${imageIndex}`} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Overlay Text & Button */}
      <div className="overlay">
       <div className="top-left">
        <div className="info">
            <p className="bold">lastminute.com London Eye</p>
            <p>Riverside Building, County Hall,<br/>
            London SE1 7PB, United Kingdom</p>
            <a href="https://www.google.com/maps/search/?api=1&query=lastminute.com+London+Eye" target="_blank" rel="noopener noreferrer"><p>4.5<img src={rating}/></p>See Reviews</a>
            <a href="https://www.google.com/maps/search/?api=1&query=lastminute.com+London+Eye" target="_blank" rel="noopener noreferrer"><p>View larger map</p></a>
            <link></link>
        </div>
        <div className="direction">
       
            <img src={direction}/>
            <a href="https://www.google.com/maps/search/?api=1&destination=lastminute.com+London+Eye" target="_blank" rel="noopener noreferrer"><p>Get Direction</p></a>
           
         
        </div>
       </div>
      </div>
     
      <a href="https://www.google.com/maps/search/?api=1&query=lastminute.com+London+Eye" target="_blank" rel="noopener noreferrer"><div className="google"><img src={google}/></div></a>
       <div className="bottom-right">  
        <div className="zoom">
        <img className="out" src={inImage}/>
        <img src={horizontal}/>
        <img className="out" src={out}/>
        </div>
        </div>
      
      <div className="last-line">
      

        <a href="https://support.google.com/maps/answer/3092107?hl=en&ref_topic=3092106" target="_blank" rel="noopener noreferrer">Keyboard shortcuts</a>
        <a href="https://www.google.com/maps/@?api=1&map_action=pano" target="_blank" rel="noopener noreferrer">Map data ©2024 Google</a>
        <a href="https://www.google.com/intl/en-US_US/help/terms_maps/" target="_blank" rel="noopener noreferrer">Terms</a>
        <a href="https://www.google.com/maps/preview?source=tldsi&hl=en&authuser=0&output=classic&q=Report+a+map+error" target="_blank" rel="noopener noreferrer">Report a map error</a>
      </div>
       </div>
   
    </div>
    
  );
};

export default Contact3;
