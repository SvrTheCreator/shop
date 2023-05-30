import React from 'react'
import { MdAccountBox } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";

export default function Authorization() {
    return (
        <div className='container'>
            <h4 className='authorization__title'>Авторизация</h4>
            <div className='authorization'>
                <div className='authorization_create'>
                    <h4 className='authorization_create__title'>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</h4>
                    <div className='authorization_create__text'>Для регистрации укажите пожалуйста свой адрес электронной почты (E-mail)</div>
                    <div className='authorization_new__email'>
                        <label >
                            E-mail адрес:
                        </label>
                        <input type='text' name='E-mail' />
                    </div>
                    <button type='submit'> <MdAccountBox /> <span>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</span></button>
                </div>
                <div className='authorization_come'>
                    <h4 className='authorization_come__title'>УЖЕ ЗАРЕГИСТРИРОВАНЫ В НАШЕМ МАГАЗИНЕ?</h4>
                    <div className='authorization__email'>
                        <label>
                            E-mail адрес:
                        </label>
                        <input type='text' name='E-mail' />
                    </div>
                    <div className='authorization__password'>
                        <label>
                            Пароль:
                        </label>
                        <input type="password" name='password' />
                    </div>
                    <button type='submit'> <AiFillUnlock /> <span>ВОЙТИ</span></button>
                </div>
            </div>
        </div>
    )
}