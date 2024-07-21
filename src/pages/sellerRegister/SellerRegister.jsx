import React, { useState } from "react";
import "./SellerRegister.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AddressForm from "./AddressForm";

const SellerRegister = () => {

  const [showAddress,setShowAddress] = useState(false);

  const handleContinueClick=()=>{
    setShowAddress(true);
  }
  return (
    <div className="reg-seller-cont">
      <div className="progress-bar">
        <div>Thaluwa</div>
        <div className="first-div">
        <div className="inside-bar"><IoMdCheckmarkCircleOutline className="icon"/>Information</div>
        <div className="line"></div>
        <div className="inside-bar"><IoMdCheckmarkCircleOutline className="icon"/>Password</div>
        <div className="line"></div>
        <div className="inside-bar"><IoMdCheckmarkCircleOutline className="icon"/>Final</div>
        </div>
      </div>
       {!showAddress && <form action="" className="seller-form">
      <div className="reg-info-container">
        <div className="text-field w100p">
          <input className="text-base w100p" type="tel" required placeholder=" "/>
          <span>Phone Number *</span><button className="otp-send-btn">Send OTP</button>
        </div>
        <div className="text-field w100p">
          <input
            className="text-base w100p"
            type="email"
            required
            placeholder=" "
          />
          <span>E-Mail *</span>
        </div>
        <div className="text-field w100p">
          <textarea className="text-base w100p" required placeholder=" "></textarea>
          <span>About *</span>
        </div>
      <div className="reg-category">
        <div className="dropdown-text">Select The category</div>
        <select className="dropdown-box">
        <option value="">Home Decor</option>
        <option value="">Cloths</option>
        <option value="">Tea</option>
        <option value="">Jewellery</option>
        </select>
        <div></div>
      </div>
      <div className="seller-reg-text">
      <p className="privacy-text">By continuing, I agree to Thaluwa’s </p><span>Terms of Use </span>&<span> Privacy Policy.</span>
      </div>
      <div>
        <button className="continue-btn" onClick={handleContinueClick}>Continue </button>
      </div>
      </div>
      </form> 
      }
     { showAddress && <AddressForm />} 
    </div>
  );
};

export default SellerRegister;
