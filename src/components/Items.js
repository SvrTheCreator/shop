// import { state } from '../Constants'
import Item from './Item'
import { store } from '../index'
import { useState } from 'react';


export default function Items() {
    const [items, setItems] = useState(store.getState().items)
    // console.log('items', items[0][0]);
    return (
        <main>
            <div className='container'>
                {items.map(el => (
                    <Item key={el.id} item={el} />
                ))}
            </div>
        </main>
    )
}