import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase"

function Header() {
     const [{basket, user}, dispatch] = useStateValue();


     function handleAuthentication(){
      if(user){
        auth.signOut();
    }
}

    return (
        <div className="header">
            <Link to="/">
            <img  
            className="header__logo"
            
            src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"/>
            </Link>
            
            <div
            className="header__search">
            <input
            className="header__searchinput"
            type="/text"
            
            />

            <SearchIcon className="search__icon" />
            
            </div>
           

            <div className="header__nav">
            <Link to ={ !user && "/login"}>
                <div  onClick = {handleAuthentication} className="header__option">
                    <span className="header__optionOne">
                        Hello {user? user.email : 'Guest'}
                    </span>
                    <span className="header__optionTwo">
                        {user ? 'Sign out': 'Sign In'}
                    </span>



                </div>
            </Link>
           
                <div className="header__option">
                <span className="header__optionOne">
                        Returns
                    </span>
                    <span className="header__optionTwo">
                        & Orders
                    </span>

                    
                </div>
                <div className="header__option">
                <span className="header__optionOne">
                        Your
                    </span>
                    <span className="header__optionTwo">
                        Prime
                    </span>

                    
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
               
                
                </Link>
               



            </div>

        </div>

    )
}

export default Header
