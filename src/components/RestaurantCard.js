import { DUMMY_IMAGE_URL } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
    // console.log("RestaurantCard rendered : ", resData)
    return (
        <div className="restaurant-card">
            <img src={DUMMY_IMAGE_URL} alt="Restaurant" />
            <h3>{resData?.name}</h3>
            <h4>{resData?.cuisines?.join(", ")}</h4>
            <h4>{resData?.avgRating} stars</h4>
            <h4>{resData?.costForTwo} FOR TWO</h4>
        </div>
    )
}

export const withVegLabel = (RestaurantCard) => {
    //return another component
    // resData will come here
    return ({resData}) => {
        // react functional component returns some piece of jsx
        return (
            <div>
                <label className='label'>Veg</label>
                <RestaurantCard resData={resData}/>
            </div>
        )

    }
}

export default RestaurantCard