import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    //fetchData
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`)
        const jsonData = await data.json()
        setResInfo(jsonData?.data)
    }
    return resInfo;
}

export default useRestaurantMenu;