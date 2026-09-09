import React , {useState} from "react"
import RestaurantCard from "./RestaurantCard"
import {resList} from "../utils/restaurant_mock";
const BodyComponent = () => {
    console.log(resList);

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const topRatesRetaurants = () => {
        console.log("Top rated restaurants");
        resList2 = resList.filter((res) => (Number(res?.data?.avgRating) > 4.0));
        setListOfRestaurants(resList2);
    }
    return (
        <div className="body">
            <div className="search-container">
                Search
                <div>
                    <button className="top-rated-btn" onClick={topRatesRetaurants }>Top Rated Restaurants</button>
                </div>
            </div>
             <div className="res-container">
               {
                listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant?.data?.id} resData={restaurant?.data} /> )
               }


            </div>
        </div>
    )
}

export default BodyComponent