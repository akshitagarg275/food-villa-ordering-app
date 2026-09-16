import React, { use, useEffect, useState } from 'react'
import ShimmerComponent from './ShimmerComponent'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
    const params = useParams()
    console.log('params', params)
    const {resId} = useParams()
    const resInfo = useRestaurantMenu("123456")
    

    if (resInfo === null) return  <ShimmerComponent/>
    const {name, cuisines, costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info
    const menuCategories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const categories = menuCategories.filter((category) => category?.card?.card?.title)
    console.log(menuCategories)
    const menuTitle = menuCategories.map((menu)=>menu?.card?.card?.title ).filter((menu)=>menu)
    console.log(menuTitle)
    const itemCards= menuCategories[1]?.card?.card?.itemCards
    console.log("item",itemCards)
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(',')} - {costForTwoMessage}</p>
        <h5>Rating: {avgRating}</h5>
        <h2>Menu</h2>
        
        <div>
    {categories.map((category) => {
      const { title, itemCards } = category?.card?.card;

      return (
        <div className='title-container' key={title}>
          <h2>{title}</h2>

          {itemCards.map((item) => {
            const info = item.card.info;

            return (
              <div  key={info.id}>
                <h3>{info.name}</h3>
                <div className='menu-container'>
                    <p>{info.description}</p>
                    <p>₹{info.price / 100}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
    </div>
  )
}

export default RestaurantMenu