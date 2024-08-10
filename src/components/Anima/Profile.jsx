import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";

import { FiBox } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";


export const Profile = () => {

  
  return (
    <div className="element-my-orders">
      <div className="div">
        
        <div className="title">
          <div className="text-wrapper-7">My Profile</div>
          <div className="frame-2">
            <div className="input">
              <div className="frame-3">
                <input type="text" className="text" placeholder="Search" ></input>
              </div>
            </div>
            <div className="button-7">
              <button className="button-8">Filter</button>
              <div className="huge-icon-device">
                <div className="overlap">
                  <div className="ellipse" />
                </div>
                <div className="overlap-group">
                  <div className="ellipse-2" />
                </div>
                <div className="overlap-group-2">
                  <div className="ellipse-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-menu">
          <div className="profile">
            <div className="rectangle-2" />
            <div className="frame-4">
              <img className="ellipse-4" alt="Ellipse" src="https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A" />
              <div className="frame-5">
                <div className="text-wrapper-8">Hello 👋</div>
                <div className="text-wrapper-9">Baroon Jha</div>
              </div>
            </div>
          </div>
          <div className="all-details">
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="icon-instance-node">
                <FaRegUser className="userDashboard-Icons"/>
                </div>
                <Link to="info" className="hover:text-gray-300"><div className="text-wrapper-10">Personal Information</div></Link>
                
              </div>
            </div>
              <Link to="order" className="focus:bg-black linkBg">
            <div className="frame-wrapper ">
              <div className="frame-6">
                <div className="icon-instance-node">
                <FiBox className="userDashboard-Icons"/>
                </div>
              <div className="text-wrapper-11">My Orders</div>
              </div>
            </div>
              </Link>
              <Link to="wishlist" className="focus:bg-black linkBg">
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="icon-instance-node" >
                <FaRegHeart className="userDashboard-Icons"/>
                </div>
                <div className="text-wrapper-10">My Wishlists</div>
              </div>
            </div>
            </Link>
            <Link to='manage-address'>
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="icon-instance-node">
                    <LuMapPin className="userDashboard-Icons"/>
                </div>
                <div className="text-wrapper-10">Manage Addresses</div>
              </div>
            </div>
            </Link>
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="icon-instance-node" >
                <FaRegCreditCard className="userDashboard-Icons"/>
                </div>
                <div className="text-wrapper-10">Saved Cards</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="icon-instance-node" >
                <FaRegBell className="userDashboard-Icons"/>
                </div>
                <div className="text-wrapper-10">Notifications</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="icon-instance-node" >
                <IoSettingsOutline className="userDashboard-Icons"/>
                </div>
                <div className="text-wrapper-10">Settings</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Outlet/>
        </div>
        {/* <div className="all-orders">
          <div className="element">
            <div className="group">
              <img className="kindpng" alt="Kindpng" src="kindpng-375186-2.png" />
            </div>
            <button className="button">
              <button className="order-text-wrapper">Delivered</button>
            </button>
            <p className="p">Your product has been delivered</p>
            <div className="order-rectangle" />
            <p className="order-text-wrapper-2">Girls Pink Moana Printed Dress</p>
            <div className="order-text-wrapper-3">Qyt: 1</div>
            <div className="order-text-wrapper-4">$80.00</div>
            <div className="order-text-wrapper-5">Size: S</div>
            <div className="order-frame">
              <button className="order-button-wrapper">
                <button className="order-button-2">View Order</button>
              </button>
              <button className="order-div-wrapper">
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
            <div className="text-wrapper-4">$80.00</div>
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
        </div> */}
      </div>
    </div>
  );
};
export default Profile;