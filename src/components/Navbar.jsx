    // Navbar.jsx

    import React, { useState } from 'react';
    import './Navbar.css'; // Import CSS for styling
    import {  FaSearch, FaShoppingCart ,} from 'react-icons/fa'; // Import icons from react-icons library
    import { Link , useNavigate} from 'react-router-dom';
    import Modal from '../Model';
    import Cart from '../screens/Cart';
    import { useCart } from './ContextReducer';
    
    

    const Navbar = () => {
        const [cartView,setCartView] = useState(false);
        const [searchValue, setSearchValue] = useState('');
        let data = useCart();
        const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        };

        const navigate = useNavigate();
        const handlelogout = () =>{
            localStorage.removeItem("authToken");
            navigate("/login");
        }
        return (
        <nav className="navbar">
            <div className="logo-section">
                <div className="logo">
                <Link to='/'><img src='abc.png'></img></Link>
                </div>

                {/* <div className="search-container"> */}

                {/* <input type='text' id="search-navbar" class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." /> */}
                {/* // type="text" 
                // placeholder="Search..." 
                // value={searchValue}
                // onChange={handleSearchChange} 
                */}
                {/* <button><FaSearch /></button> */}
            {/* </div> */}
            </div>
            <div className="links-section">
            <ul className='navbar-nav flex'>
                <li>
                    <Link to="/" aria-current="page" className="home">Home</Link>
                </li>
                {(localStorage.getItem("authToken"))?
                <li>
                <Link to="/myOrder" aria-current="page" className="" >My Orders</Link>
                </li>
            :""}   

            </ul>
            {(!localStorage.getItem("authToken"))?
            <div className=''>
            {/* <Link className='login-link' to="/Login">Login</Link> */}
            <Link className='btn bg-white text-teal-400' to="/Login">Login</Link>
            <Link className='btn bg-white text-teal-400' to="/createuser">Signup</Link>
            </div>
            
            :
                <div className=' flex'>
                <div className=' px-4'>
                {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
                {/* <div class="relative inline-flex w-fit"> */}
                <div class="relative w-fit">
                <div
                class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                {data.length}
                </div>
                <div onClick={()=>{setCartView(true)}}>
                <button
                type="button"
                className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                My cart
                </button>
                </div>
                </div>

                {/* <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                My Cart
    
                
                </button> */}
                </div>
                {cartView? <Modal onClose={()=>setCartView(false)} ><Cart/></Modal>: null}
                <div className=''>
                
                <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={handlelogout}>
                Logout
                </button>
            </div>
            </div>
            }   
            </div>
        </nav>
        );
    };

    export default Navbar;

    {/* <Link to="#">Contact Us</Link>
            <button className="cart-button "><FaShoppingCart /> My Cart</button> */}