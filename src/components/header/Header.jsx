import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import flag from "../../assets/img/flag.png";

import { useSelector } from 'react-redux'

import "./header.scss"
import { useState } from 'react';
import Cart from "../cart/Cart";

const Header = () => {
    // cart state
    const [openCart, setOpenCart] = useState(false)

    const products = useSelector(state => state.cart.products)

  return (
    <header className="header">
      <div className="wrapper">
        {/* left side */}
        <div className="left">
          <div className="item">
            <img src={flag} alt="flag-img" className="flag" />
            <MdKeyboardArrowDown />
          </div>
          <div className="item">
            <span>UY</span>
            <MdKeyboardArrowDown />
          </div>

          <div className="item">
            <Link className="link" to="/products">Men</Link>
            <Link className="link" to="/products">Women</Link>
            <Link className="link" to="/products">Children</Link>
          </div>
        </div>
                       {/* center side */} {/* logo */}
        <div className="center">
          <Link className="logo" to="/">GZM</Link>
        </div>
        {/* right side */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>

          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>

          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>

          {/*  icons*/}

          <div className="icons">
            <AiOutlineSearch size={20} />

            <AiOutlineUser  size={20}/>

            <AiOutlineHeart  size={20}/>

                    {/* open & close cart */}
            <div
            onClick={() => setOpenCart(!openCart)}
             className="cartIcon">
                <span className="badge">{products.length} </span>
              <AiOutlineShoppingCart size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* cart state && cart component*/}
      {openCart && <Cart/>}
    </header>
  );
};

export default Header;
