import React from 'react'
import { Link } from 'react-router-dom'

export default function Account() {
    return (
        <Link to='/account'>
            <ul className='nav_account__list'>
                <li><p>Войти</p></li>
                <li><p>Зарегистрироваться</p></li>
            </ul>
        </Link>
    )
}