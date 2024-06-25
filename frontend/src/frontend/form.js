// src/form.js

import React from 'react';
import './form.css';

const BodyLayout = () => {
    return (
      <div className="body-layout">
        <div className="image-container">
          {/* Replace the src with your image path */}
          <img src="your-image.jpg" alt="Your Image" className='image' />
        </div>

        <div className="form-container">
          {/* Your general form component goes here */}
          <form className="general-form">
            {/* Example form fields */}
            {/* <label htmlFor="name">Username:</label> */}
            <div className="input-container">
                <input type="text" id="name" name="name" placeholder="Username" />
                <input type="text" id="dept" name="dept" placeholder="Department" />
                <input type="text" id="psno" name="psno" placeholder="PS Number" />
            </div>

            <div className="input-container">
                <label>FROM</label>
                <input type="date" id="fromdate" name="fromdate" placeholder="From Date" />
                <label>TO</label>
                <input type="date" id="todate" name="todate" placeholder="To Date" />
            </div>
            
            <div className="input-container">
                <input type="time" id="pickup" name="pickup" placeholder="PickUp Time" />
                <input type="text" id="pickloc" name="pickloc" placeholder="PickUp Location" />
            </div>
            
            <div className="input-container">
                <input type="time" id="dropoff" name="dropoff" placeholder="Drop Time" />
                <input type="text" id="droploc" name="droploc" placeholder="DropOff Location" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default BodyLayout;