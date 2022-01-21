import React from "react";
import { Link } from 'react-router-dom'
import './header.scss'
import { CartBlock } from "../cart-block";

export const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__menu">
                    <Link to='/' className='header__title'>
                        Game Store
                    </Link>
                    <div className="header__cart">
                        <CartBlock />
                    </div>
                </div>
            </div>
        </div>
    )
}