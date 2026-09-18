import React from 'react'
import { MENU_DUMMY_IMAGE_URL } from '../utils/constants'
const ItemList = ({itemCards}) => {
    console.log('ItemCasrds: ', itemCards)
  return (
    <div>
       
        {
            itemCards.map((item) => (
                <div key={item?.card?.info?.id} className='p-2 m-2 border-b-2 border-gray-200'>
                    <div className='flex justify-between'>
                        
                        <div className='text-gray-500'>
                            <div>{item?.card?.info?.name}</div>
                            <div className='text-sm'>₹ {item?.card?.info?.price/100}</div>
                        </div>
                        <div>
                        <div className='absolute'>
                            <button className='text-green-600 font-extralight text-xs my-10 mx-1 bg-gray-50 shadow-lg p-2 rounded-xl'>Add +</button>
                        </div>
                        <img className='w-14 h-14' src={MENU_DUMMY_IMAGE_URL}/>
                        </div>
                    </div>
                    <p className='text-xs text-left  text-gray-400'>{item?.card?.info?.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList