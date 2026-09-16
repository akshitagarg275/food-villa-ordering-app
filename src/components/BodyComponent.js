import React , {useState, useEffect} from "react"
import RestaurantCard from "./RestaurantCard"
import ShimmerComponent from "./ShimmerComponent"
import { resList } from "../utils/restaurant_mock"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const BodyComponent = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus()

    const topRatesRetaurants = () => {
        // console.log("Top rated restaurants", listOfRestaurants);

        const resList2= listOfRestaurants.filter((res) => (Number(res?.info?.avgRating) > 4.0));
        // console.log('res: ', resList2)
        setListOfRestaurants(resList2);
    }

    //If no dependency array, useEffect called on every render
    // If the dependency array is empty, than useEffect is called on initial render and just once
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
    console.log(onlineStatus)
    if (onlineStatus === false)  return <h1>Looks Like you are offline</h1>
    console.log("Body rendered")
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
                listOfRestaurants.map((restaurant, index) => <Link key={`${restaurant?.info?.id} + ${index}`} to={'/restaurants/'+restaurant?.info?.id}><RestaurantCard  resData={restaurant?.info} /></Link> )
               }


            </div>
        </div>
    )
}
 
export default BodyComponent