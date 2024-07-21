import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const UserProfileSidebar = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white p-5">
        <h2 className="text-xl font-semibold mb-5">My Profile</h2>
        <nav>
          <ul>
            <li className="mb-3">
              <Link to="wishlistuserprofilesidebar" className="hover:text-gray-300">Wishlist</Link>
            </li>
            <li className="mb-3">
              <Link to="/manage-address" className="hover:text-gray-300">Manage Address</Link>
            </li>
            {/* Add more sidebar links here */}
          </ul>
        </nav>
      </div>
      {/* <Outlet/> */}
      <div className="flex-grow p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfileSidebar;



