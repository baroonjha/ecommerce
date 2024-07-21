import React, { useState, useEffect } from 'react';
import "./ManageAddress.css"
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    // Fetch the addresses from your API or local storage
    // setAddresses(fetchedAddresses);
  }, []);

  const addAddress = (newAddress) => {
    // Add the new address to the list
    setAddresses([...addresses, newAddress]);
    // Update the backend or local storage accordingly
  };

  const editAddress = (addressId, updatedAddress) => {
    // Update the address in the list
    setAddresses(addresses.map(addr => addr.id === addressId ? updatedAddress : addr));
    // Update the backend or local storage accordingly
  };

  const deleteAddress = (addressId) => {
    // Delete the address from the list
    setAddresses(addresses.filter(addr => addr.id !== addressId));
    // Update the backend or local storage accordingly
  };

  return (
    <div className='manage-address-main'>
      {/* <h2>Manage Addresses</h2> */}
      {/* {addresses.map(address => (
        <div key={address.id}>
          <p>{address.line1}, {address.city}</p>
          <button onClick={() => editAddress(address.id)}>Edit</button>
          <button onClick={() => deleteAddress(address.id)}>Delete</button>
        </div>
      ))} */}

      <button className='user-manage-address-main-btn'>+ Add New Address</button>
      <div className='user-manage-address'>
        <div>
          <div className='address-name'>Baroon Jha</div>
          <div>Fatasil GS Colony ,Guwahati 781009</div>
          <div className='call-symbol'><FiPhoneCall/> (+91) 7002800000</div>
        </div>
        <div>
        <button className="user-manage-address-edit-btn"><FaRegEdit />Edit</button>
        <button className="user-manage-address-delete-btn"><MdOutlineDelete />Delete</button>
        </div>
        </div>
        <div className="rectangle" />
      </div>
  );
};

export default ManageAddress;
