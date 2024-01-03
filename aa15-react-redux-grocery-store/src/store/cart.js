

const ADDCARTITEM = "cart/addCartItem"
const REMOVECARTITEM = 'cart/removeCartItem'


export const cartReducer = (state = {}, action) => {
    const nextState = {...state}

    switch (action.type) {
        case ADDCARTITEM: 
            return {...nextState, [action.produceId]: {
                id: action.produceId,
                count: 1
            }}
        case REMOVECARTITEM: 
            delete nextState[action.produceId]
            return nextState;
        default :
            return state;
    }
}

export const addCartItem = (produceId) => {
    // debugger
    return { 
        type: ADDCARTITEM,
        produceId
    }
}

export const removeCartItem = (produceId) => {
    return {
        type: REMOVECARTITEM,
        produceId
    }
}