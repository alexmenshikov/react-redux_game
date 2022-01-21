import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import './cart-block.scss'

export const CartBlock = () => {
    return (
        <div className='cart-block'>
            <FiShoppingCart size={25} className='cart-block__icon'/>
            <span className='cart-block__price'>2010 руб.</span>
        </div>
    )
}