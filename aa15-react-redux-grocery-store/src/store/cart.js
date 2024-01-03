

const ADDCARTITEM = "cart/addCartItem"
const REMOVECARTITEM = 'cart/removeCartItem'
const INCREMENTCARTITEM = 'cart/incrementCartItem'
const DECREMENTCARTITEM = 'cart/decrementCartItem'
const EMPTYCART = 'cart/emptyCart'

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

        case INCREMENTCARTITEM:
            // console.log(nextState, "nextState")
            // debugger
            nextState[action.produceId].count += 1
            return nextState;

        case DECREMENTCARTITEM:
            nextState[action.produceId].count -= 1
            return nextState

        case EMPTYCART:

            return {}
            
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

export const incrementCartItem = (produceId) => {
    return {
        type: INCREMENTCARTITEM,
        produceId
    }
}

export const decrementCartItem = (produceId) => {
    return {
        type: DECREMENTCARTITEM,
        produceId
    }
}

export const emptyCart = () => {
    return {
        type: EMPTYCART
    }
}