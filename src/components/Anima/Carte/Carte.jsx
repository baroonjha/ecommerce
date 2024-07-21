import React from "react";
// import Footer from "src/components/Footer";
import "./Carte.css";

export const Carte = () => {
  return (
    <div className="cart">
      <div className="div">
        <div className="overlap">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-2">Cart</div>
                  <img className="meubel-house-logos" alt="Meubel house logos" src="meubel-house-logos-05.png" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-4">
            <div className="div-wrapper">
              <div className="overlap-4">
                <div className="group-5">
                  <div className="text-wrapper-5">Rs. 250,000.00</div>
                  <div className="text-wrapper-6">Asgaard sofa</div>
                  <div className="text-wrapper-7">Rs. 250,000.00</div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-4">
                    <div className="rectangle-2" />
                    <div className="group-6">
                      <div className="text-wrapper-8">Product</div>
                      <div className="text-wrapper-9">Price</div>
                      <div className="text-wrapper-10">Quantity</div>
                      <div className="text-wrapper-11">Subtotal</div>
                      <div className="group-7">
                        <div className="overlap-group-3">
                          <div className="rectangle-3" />
                          <img className="mask-group" alt="Mask group" src="mask-group.png" />
                        </div>
                      </div>
                      <div className="group-8">
                        <div className="overlap-5">
                          <div className="text-wrapper-12">1</div>
                        </div>
                      </div>
                      <img className="ant-design-delete" alt="Ant design delete" src="ant-design-delete-filled.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-9">
              <div className="overlap-6">
                <div className="text-wrapper-13">Cart Totals</div>
                <div className="text-wrapper-14">Subtotal</div>
                <div className="text-wrapper-15">Total</div>
                <div className="text-wrapper-16">Rs. 250,000.00</div>
                <div className="text-wrapper-17">Rs. 250,000.00</div>
                <div className="group-10">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-18">Check Out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};