import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFav } from '../services/productSlice'

const FavCard = ({product}) => {
    const dispatch = useDispatch()
  return (
    <div className='card' style={{ width: "18rem" }}>
    <div className="card-body">
        <img src={product?.images[0] } className='d-block mx-auto mb-3' height={"100px"} alt="" />
        <h5>{product?.title.substring(0,20)}..</h5>
        <p className='fw-bold text-primary'>{product?.price}</p>
       
        <button className="btn btn-outline-danger ms-2" onClick={()=>dispatch(removeFav(product))}><AiFillDelete/></button>
    </div>
</div>
  )
}

export default FavCard
