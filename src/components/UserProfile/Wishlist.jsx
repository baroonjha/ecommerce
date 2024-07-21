import React, { useState, useEffect } from 'react';
import "./Wishlist.css"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the wishlist items from your API or local storage
    // setItems(fetchedItems);
  }, []);

  const removeFromWishlist = (itemId) => {
    // Remove the item from the wishlist
    setItems(items.filter(item => item.id !== itemId));
    // Update the backend or local storage accordingly
  };

  return (
    // <div className='user-wishlist-main'>
    //   <div className='wishlist-product-cont'>
    //   <div>
    //     <button className='user-wishlist-delete-btn'>Delete</button>
    //     <img src="https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A" alt="handbag"  width={100} height={50} />
    //     <button className='user-wishlist-add-btn'>Move To Cart</button>
    //   </div>
    //   <div className='user-wishlist-text'>
    //     <div className='wishlist-title'>Title</div>
    //     <div>Rs.199 <span>Rs.499</span></div>
    //   </div>
    //   </div>
    // </div>
    <>
    <div className='Container'>
        <div className='Circle' />
        <img src='https://media.licdn.com/dms/image/D5603AQEeaLRMyf5g_w/profile-displayphoto-shrink_400_400/0/1718258907016?e=2147483647&v=beta&t=iBMmp9k_CzF6ZVYdlvvvOuz1b_AWkEV77gEuUQ5Aj0A' alt='image' className='Image'/>
        <div className='Info'>
            <div className='Icon-add'>
                <HiOutlineShoppingCart />Add To Cart
            </div>
            <div className='Icon-delete'>
                <MdOutlineDelete />
            </div>
        </div>
        <div className='user-wishlist-text'>
         <div className='wishlist-title'>Title</div>
         <div>Rs.199 <span className='wishlist-discount-price'>Rs.499</span></div>
      </div>
    </div>
    </>
  );
};

export default Wishlist;
