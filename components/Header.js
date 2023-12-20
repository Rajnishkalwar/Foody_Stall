import React, { useState } from "react";
import { CDN_LOGO } from "../utilis/Links"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import {
    BuildingOfficeIcon,
    HomeIcon,
    PhoneIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { useSelector } from "react-redux";




const Header = () => {


    const [isLoggedin, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const onlinestatus = useOnlineStatus();
    const cartItems =useSelector(
        (store)=>store.cart.items
    );
    console.log(cartItems);

    return (
        <div className="flex justify-between px-6 shadow-md">
            <div className="logo-container">
                <img src={CDN_LOGO}
                    className="w-32 p-5 rounded-full" alt="logo" />
            </div>
            <div className="flex items-center m-3">
                <ul className="flex">
                    <li className="className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 text-gray-700">
                        {onlinestatus? "user online: 🟢" : "user offline: ⛔️"}
                    </li>
                    <Link to='/'
                        className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <HomeIcon className='w-4 h-4 text-gray-700' />
                        <li className="">
                            Home
                        </li>
                    </Link>
                   
                    <Link to='/explore'
                        className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
                        <li className="hidden md:block">Explore</li>
                    </Link>
                    <Link to='/cart'
                        className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
                        <li className="hidden md:block">Cart ({cartItems.length} items)</li>
                    </Link>
                    
                    <Link to='/contact' className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                        <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
                        <li className="hidden md:block">
                            Contact
                        </li>
                    </Link>
                    {isLoggedin ? (
                        <button className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </button>
                    ) : (
                        <button className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;