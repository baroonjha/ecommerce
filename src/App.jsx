import './App.css'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import Register from './pages/Register'
import Home from './pages/Home'
import ProductList from './pages/Cart'
import {Routes,Route} from "react-router-dom"
// import ProductList from './pages/ProductList'


function App() {

  return (
    <>
    <Routes> 
        <Route path="/cart" element={<Cart/>} />
        <Route path='/' element={<Home />} />
    </Routes> 
     {/* <Home /> */}
    </>
  )
}

export default App
