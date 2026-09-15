import { Link } from "react-router-dom";
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
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>Cart</li>
                <li><button onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}} className='sign-in-btn'>{btnName}</button></li>
            </ul>
           </div>
        </div>
    );
}

export default HeaderComponent;