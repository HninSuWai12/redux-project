// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import Card from './Card'
import { getData } from '../api'
 import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../services/productSlice'
const Product = () => {
    // eslint-disable-next-line no-unused-vars
    const dispatch =useDispatch();
    const productsData = useSelector(state => state.product.products);
    // console.log(productsData);
    const getProductsData = async()=>{
        try{
          const data = await getData('/products');
          // const data = response.data;
        dispatch(addProducts(data));
        //console.log(data);
        }catch(error){
          console.log('Error fatching products:' , error)
        }
    }
    useEffect(()=>{
        getProductsData()
    }, [])
  return (
    <div className='my-5 d-flex flex-wrap gap-2'>
            {Array.isArray(productsData.products) && productsData.products.length > 0 ? (
    productsData.products.map(product => {
        //console.log("Product:", product); // Add this line for debugging
        return <Card key={product.id} product={product} />;
    })
) : (
    <p>No productsData available.</p>
)}

            
        </div>
  )
}

export default Product
