import React from 'react'
import { useSelector } from 'react-redux'
import FavCard from './FavCard'
const Fav = () => {
    const favCardData = useSelector(state=>state.product.fav)
    // console.log(favCard);
  return (
    <div className="d-flex flex-wrap gap-3 my-5">
        {favCardData?.map(item=> {
            return <FavCard key={item.id} product={item} />

        }
            )}
    </div>
  )
}

export default Fav
