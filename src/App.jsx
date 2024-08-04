import './App.css'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import Register from './pages/Register'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import {Routes,Route,Navigate} from "react-router-dom"
// import ProductList from './pages/ProductList'


function App() {

  const user=true;

  return (
    <>
    <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/register" element={<Register/>} /> */}
        <Route path="/register" element={ user ? <Navigate to="/" />:<Register/>}/>
       
        
    </Routes> 
    </>
  )
}

export default App
