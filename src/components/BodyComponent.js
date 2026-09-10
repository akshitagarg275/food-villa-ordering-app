import React , {useState, useEffect} from "react"
import RestaurantCard from "./RestaurantCard"
import ShimmerComponent from "./ShimmerComponent"
import { resList } from "../utils/restaurant_mock"
const BodyComponent = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const topRatesRetaurants = () => {
        console.log("Top rated restaurants");
        resList2 = resList.filter((res) => (Number(res?.data?.avgRating) > 4.0));
        setListOfRestaurants(resList2);
    }

    useEffect(()=> {
        console.log('useEffect called')
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch('https://namastedev.com/api/v1/listRestaurants')
        const json = await data.json()
        console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const searchFunctionality = () => {

        const filterList = filteredRestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
        setListOfRestaurants(filterList)
    }


    // console.log("Body rendered")
    return listOfRestaurants.length === 0 ? (
        <ShimmerComponent/>
    ) :  (
        <div className="body">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn" onClick={searchFunctionality}>Search</button>
                <div>
                    <button className="top-rated-btn" onClick={topRatesRetaurants }>Top Rated Restaurants</button>
                </div>
            </div>
             <div className="res-container">
               {
                listOfRestaurants.map((restaurant, index) => <RestaurantCard key={`${restaurant?.info?.id} + ${index}`} resData={restaurant?.info} /> )
               }


            </div>
        </div>
    )
}
 
export default BodyComponent