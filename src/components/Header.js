import NavMan from "./NavMan"
import NavWoman from "./NavWoman"
import NavAccount from "./NavAccount"
// import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { showManItems, showWomanItems } from '../store/action'
import { store } from '../index'

export default function Header() {



    const showMan = () => {
        store.dispatch(showManItems)
    }

    return (
        <header>
            <div className="container">
                <div className='header'>
                    <Link to='/'>
                        <div className='logo'>
                            JOSKO TEAM
                        </div>
                    </Link>
                    <ul className='nav' >
                        <Link to='/Man' onClick={showMan}>
                            <li className='nav_men'><span>Мужское</span>
                                <NavMan />
                            </li>
                        </Link>
                        <Link to='/Woman'>
                            <li className='nav_women'><span>Женское</span>
                                <NavWoman />
                            </li>
                        </Link>
                        <Link to='/about' >
                            <li className='nav_contacts'><span>Контакты</span></li>
                        </Link>
                        <li className='nav_account'>
                            <span className="nav_icon" >
                                <MdAccountCircle />
                            </span>
                            <NavAccount />
                        </li>
                        <Link to='/shop'>
                            <li className='nav_basket'>
                                <span className="nav_icon">
                                    <FaShoppingCart className="shop-cart-button" />
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header >
    )
}


