import React from 'react'

import "./Order.css"

const Order = () => {
  return (
    <div>
        <div className="all-orders">
          <div className="element">
            <div className="group">
              <img className="kindpng" alt="Kindpng" src="kindpng-375186-2.png" />
            </div>
            <button className="button">
              <button className="text-wrapper">Delivered</button>
            </button>
            <p className="p">Your product has been delivered</p>
            <div className="rectangle" />
            <div>
            <p className="text-wrapper-2">Girls Pink Moana Printed Dress</p>
            <div className="text-wrapper-3">Qyt: 1</div>
            <div className="text-wrapper-4">₹80.00</div>
            <div className="text-wrapper-5">Size: S</div>
            </div>


            <div className="frame">
              <button className="button-wrapper">
                <button className="button-2">View Order</button>
              </button>
              <button className="div-wrapper">
                <button className="button-3">Write A Review</button>
              </button>
            </div>
          </div>

          
          <div className="element">
            <div className="group">
              <img className="img" alt="Kindpng" src="kindpng-4794023-1.png" />
            </div>
            <button className="button-4">
              <button className="button-5">In Process</button>
            </button>
            <p className="text-wrapper-6">Your product has been Inprocess</p>
            <div className="rectangle" />
            <div className="text-wrapper-2">Women Textured Handheld Bag</div>
            <div className="text-wrapper-3">Qyt: 1</div>
            <div className="text-wrapper-4">₹80.00</div>
            <div className="text-wrapper-5">Size: Regular</div>
            <div className="frame">
              <button className="button-wrapper">
                <button className="button-2">View Order</button>
              </button>
              <button className="button-6">
                <button className="button-3">Cancel Order</button>
              </button>
            </div>
          </div>

          
        </div>
    </div>
  )
}

export default Order