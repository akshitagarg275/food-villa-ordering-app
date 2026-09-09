const RestaurantCard = ({ resData }) => {
    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/d8120cc8-3088-4bfe-b51e-e615d66ea0d2_350077.JPG"} alt="Restaurant" />
            <h3>{resData?.name}</h3>
            <h4>{resData?.cuisine}</h4>
            <h4>{resData?.avgRating} stars</h4>
            <h4>{resData?.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard