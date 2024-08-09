import './App.css'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import Register from './pages/Register'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import {Routes,Route, Navigate,useNavigate} from "react-router-dom"
import Success from './pages/Success'
import { useSelector } from 'react-redux'
// import ProductList from './pages/ProductList'


function App() {

  const user=useSelector((state)=>state.user.currentUser);
  console.log("user",user)
  // const navigate= useNavigate();

  return (
    <>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/products/:category' element={<ProductList />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
    <Route path="/success" element={<Success/>} />
    <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
</Routes>
    </>
  )
}

export default App
