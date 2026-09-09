import React from "react"
import RestaurantCard from "./RestaurantCard"

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search-container">
                Search
            </div>
             <div className="res-container">
                <RestaurantCard resName="Meghna Foods" cuisine="Indian, North Indian" rating="4.2" cost="₹ 300 for two"/>
                <RestaurantCard resName="Another Restaurant" cuisine="Italian" rating="4.0" cost="₹ 500 for two"/>


            </div>
        </div>
    )
}

export default BodyComponent