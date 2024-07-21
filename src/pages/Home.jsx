import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
// import CategoryItem from '../components/CategoryItem'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Profile } from '../components/Anima/Profile'
import { Shop } from '../components/Anima/Shop'
import {ProfileSlidebar} from "../components/Anima/ProfileSlidebar"
import Feature from '../components/Anima/Feature/Feature'
import { Carte } from '../components/Anima/Carte/Carte'

import { Route, Routes } from 'react-router-dom'
import UserProfileSidebar from '../components/UserProfile/UserProfileSidebar'
import Wishlist from '../components/UserProfile/Wishlist'
import ManageAddress from '../components/UserProfile/ManageAddress'
import Order from '../components/UserProfile/Order.jsx'
import PersonalInfo from '../components/UserProfile/PersonalInfo.jsx'
import Product from "./Product.jsx"
import SingleProductPage from '../components/Anima/SingleProductPage/SingleProductPage.jsx'
import Register from './Register.jsx'
import SellerRegister from './sellerRegister/SellerRegister.jsx'
import AddressForm from './sellerRegister/AddressForm.jsx'



const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <SellerRegister/>
        {/* <AddressForm/> */}
        {/* <Product/> */}
        {/* <Register /> */}
        <SingleProductPage />
        {/* <UserProfileSidebar/> */}


<Routes>
      <Route path="/profile" element={<Profile />}>
        <Route path="/profileinfo" element={<PersonalInfo />} />
        <Route path="/profile/order" element={<Order />} />
        <Route path="profile/wishlist" element={<Wishlist />} />
        <Route path="/profile/manage-address" element={<ManageAddress />} />
        
      </Route>
    </Routes>

    


        {/* <Profile /> */}
        {/* <Feature /> */}
        {/* <ProfileSlidebar/> */}
        {/* <Shop /> */}
        {/* <Slider /> */}

        {/* <Carte /> */}
        
        {/* <Categories />
        <Products />
        <Newsletter /> */}
        <Footer />
    </div>
  )
}

export default Home