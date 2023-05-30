import { SHOW_WOMAN_ITEMS, SHOW_MAN_ITEMS } from './actionTypes'
import { items } from '../Constants';

// import Item from './Item'


const initialState = {
    items: [items]
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MAN_ITEMS:
            return {
                ...state,
                items: state.items.filter(el =>
                    el.sex === 'male'
                )
                // ,
                // items: state.items.map(el => {
                //     <Item key={el.id} item={el} />
                // })
            }
        case SHOW_WOMAN_ITEMS:
            return {
                ...state,
                items: state.items.filter(el =>
                    el.sex === 'female'
                )
            }
        default:
            return state;
    }
}