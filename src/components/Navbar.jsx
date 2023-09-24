/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'
import {RiShoppingCartFill} from 'react-icons/ri'
import {FaShopware} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const cart = useSelector(state =>state.cart)
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <Link to='/' className="navbar-brand text-decoration-none" href="#"><FaShopware className='text-info'/> MyShop</Link>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/cart'>
          <button className='btn btn-primary'>
            <RiShoppingCartFill/> {cart.length}
          </button>
          </Link>
          <Link to='/fav'>
          <button className='btn btn-danger ms-2'>
            <AiFillHeart/> 
          </button>
          </Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  
        </div>
    )
}

export default Navbar
