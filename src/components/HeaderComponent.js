import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
           <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="Food Villa Logo" />
           </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li><button onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}} className='sign-in-btn'>{btnName}</button></li>
            </ul>
           </div>
        </div>
    );
}

export default HeaderComponent;