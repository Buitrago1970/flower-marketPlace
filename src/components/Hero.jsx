import React from 'react';
import '../styles/components/Hero.css';
import { IoIosArrowDown } from 'react-icons/io';

import flor from '../images/heroimg.png';
export default function Hero() {
  return (
    <div className="hero">
      <div className="contaner-text-hero">
        <span className="principal-text-hero">
          Find the perfect complement to your room
        </span>
        <div className="paragraph">
          <p>We will help you find plants that mach your needs and style. </p>
          <p>Check our offer in the store and surround with greenery! </p>
        </div>
        <div className="icon">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="space">
        <img className="img-flor" src={flor} alt="" />
      </div>
    </div>
  );
}
