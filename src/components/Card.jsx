/* eslint-disable no-unused-vars */
import React from 'react'
import {RiShoppingCartFill} from 'react-icons/ri'
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addFav } from '../services/productSlice'
import { addToCart } from '../services/cartSlice'

// eslint-disable-next-line react/prop-types
const Card = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div className='card' style={{ width: "18rem" }}>
    <div className="card-body">
        <img src={product?.images[0] } className='d-block mx-auto mb-3' height={"100px"} alt="" />
        <h5>{product?.title.substring(0,20)}..</h5>
        <p className='fw-bold text-primary'>{product?.price}</p>
        <button className="btn btn-outline-primary ms-2" onClick={()=>dispatch(addToCart(product))}><RiShoppingCartFill/></button>
        <button className="btn btn-outline-danger ms-2" onClick={()=>dispatch(addFav(product))}><AiFillHeart/></button>
    </div>
</div>
  )
}

export default Card
