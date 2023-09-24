import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { removeCart } from '../services/cartSlice';

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total , setTotal] = useState(0);
  const calculateTotal =()=>{
    const result = cart?.reduce((a,c)=>a + c?.price , 0);
    setTotal(result);
  }
  useEffect(()=>{
    setTotal();
  },[])

  return (
    <div className="my-5">
      <div className="row mt-3">
        <div className="col-7 gap-2 d-flex flex-wrap">
          {cartData?.map((item) => (
            <div className="card mb-5" style={{ width: "18rem" }} key={item.id}>
              <div className="card-body">
                <img src={item?.images[0]} className="d-block mx-auto mb-3" height={"100px"} alt="" />
                <h5>{item?.title.substring(0, 20)}..</h5>
                <p className="fw-bold text-primary">{item?.price}</p>
                <button className="btn btn-outline-primary ms-2" onClick={() => dispatch(removeCart(item))}>
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-4">
          <h1 className="text-primary">Total Price-{total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
