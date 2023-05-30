import React from 'react'

export default function Item(item) {
    return (
        <div className='item'>
            <div className='item-img'>
                <img src={"./img-public/" + item.item.img} />
            </div>
            <b>{item.item.title}</b>
            {/* <p>{item.item.category}</p> */}
            <h3>{item.item.price} руб</h3>
            {/* <div className='add-to-cart'>+</div> */}
        </div>
    )
}