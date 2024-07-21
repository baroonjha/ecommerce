import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="box">
      <div className="features">
        <div className="element">
          <div className="overlap-group">
            <p className="lorem-ipsum-dolor">Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.</p>
            <div className="overlap">
              <div className="ellipse" />
              <img className="group" alt="Group" src="/Group.png" />
            </div>
            <div className="big-offers">Big Offers</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <p className="text-wrapper">Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.</p>
            <div className="quality-guarantee">Quality Guarantee</div>
            <div className="div">
              <div className="ellipse-2" />
              <img className="img" alt="Group" src="Group1.png" />
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <p className="p">Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.</p>
            <div className="element-secure-payment">100% Secure Payment</div>
            <div className="overlap-group-2">
              <div className="ellipse-3" />
              <img className="group-2" alt="Group" src="Group3.png" />
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap-group">
            <p className="lorem-ipsum-dolor-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipi Elit.</p>
            <div className="free-delivery">Free Delivery</div>
            <div className="overlap-group-3">
              <div className="ellipse-4" />
              <img className="group-3" alt="Group" src="grp4.png" />
            </div>
          </div>
        </div>
        <div className="rectangle" />
      </div>
    </div>
  );
};

export default Feature;