import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false)
    console.log('resCategory: ', data)
    
    const handleClick = () => {
        setShowIndex();
    }
  return (
    <div>
        {/* accordion header */}
        <div className='w-6/12 font-bold text-lg bg-gray-50 shadow-lg p-4 mx-auto my-6'>
            <div onClick={handleClick} className='cursor-pointer flex justify-between'>
                <h2>{data.title} ({data.itemCards.length})</h2>
                <span>{showItems? '⬇️' : '⬆️'} </span>
            </div>
            {/* accordion bottom */}
            {showItems && <ItemList itemCards = {data?.itemCards}/>}
        </div>
       
    </div>
  )
}

export default RestaurantCategory