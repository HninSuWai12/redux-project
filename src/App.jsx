// eslint-disable-next-line no-unused-vars
import React from 'react'
import Product from './components/Product'
import Navbar from './components/Navbar'
// eslint-disable-next-line no-unused-vars
import Fav from './components/Fav'
import Cart from './components/Cart'
import { Routes ,Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar/>
<Routes>
  <Route path='/' element={<Product/>}/>
  <Route path='/fav' element={<Fav/>}/>
  <Route path='/cart' element={<Cart/>}/>


</Routes>
    </div>
  )
}

export default App
