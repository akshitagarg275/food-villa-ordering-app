import React, { use, useEffect, useState } from 'react'
import ShimmerComponent from './ShimmerComponent'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    const [showItems, setShowItems] = useState(0)

    const [showIndex, setShowIndex] = useState(0)
    const params = useParams()
    console.log('params', params)
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)
    

    if (resInfo === null) return  <ShimmerComponent/>
    const {name, cuisines, costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info
    const menuCategories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    console.log('menu categories: ', menuCategories)
    const categories = menuCategories.filter((category) => category?.card?.card?.title)
    console.log('categories: ', categories)
    const menuTitle = menuCategories.map((menu)=>menu?.card?.card?.title ).filter((menu)=>menu)
    console.log(menuTitle)
    const itemCards= menuCategories[1]?.card?.card?.itemCards
    console.log("item",itemCards)
  return (
    <div className='menu'>
        <h1 className="text-center font-bold my-10 text-2xl">{name}</h1>
        <p className='text-center font-bold text-lg'>{cuisines.join(',')} - {costForTwoMessage}</p>
        <h5 className='text-center font-bold text-lg'>Rating: {avgRating}</h5>
        <h2 className='mx-auto w-6/12 font-bold text-lg text-yellow-600'>Menu</h2>
        
        <div>
    {categories.map((category, idx) => {
      {/*Controlled component */}
      return (
       <RestaurantCategory 
        key={`category?.card?card?.title-${idx}`} 
        data={category?.card?.card} 
        showItems={idx===showIndex && true}
        setShowIndex = {() => setShowIndex(idx)}
       />
      );
    })}
  </div>
    </div>
  )
}

export default RestaurantMenu