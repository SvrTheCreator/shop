import React from 'react'

export default function Telegram() {

    function telegramHandler() {
        const telegram = 'https://t.me/danyajsk/'
        window.open(telegram)
    }

    return (
        <article>
            <div className='container'>
                <div className='telegram' onClick={telegramHandler}>
                    <div className='presentation'></div>
                </div>
            </div>
        </article>
    )
}