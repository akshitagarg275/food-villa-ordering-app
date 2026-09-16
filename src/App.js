import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
}

const Grocery = lazy(() => import("./components/Grocery"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <BodyComponent/>
            },
            {
                path:"/about",
                element: <AboutUsComponent/>
            },
            {
                path:"/contact",
                element: <ContactUsComponent/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Grocery fallback Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <ErrorComponent/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);