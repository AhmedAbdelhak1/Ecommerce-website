import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStateValue} from './StateProvider';
import {auth} from "./firebase";

function Header() {
    const [{basket, user}]= useStateValue();
    const login =()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className='header'>
            <Link to="/">
            <img className="header__logo" src="Basket.png" alt=""/> 
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={ !user && "/Login"} className="header__link">
                    <div onClick={login}className="header__option">
                        <span className="header__optionLine">
                            {user ? 'Sign out':'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine">
                            Orders
                        </span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link" >
                    <div className="header__basket">
                    <AddShoppingCartIcon/>
                    <span className="header__optionLine header__basketCount"> 
                        {basket?.length}</span>
                    </div>

                </Link>

            </div>
            
        </nav>
    )
};

export default Header;
