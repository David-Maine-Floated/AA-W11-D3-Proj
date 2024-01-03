

const CARTITEM = "cart/addCartItem"


export const cartReducer = (state = {}, action) => {
    const nextState = {...state}

    switch (action.type) {
        case CARTITEM: 
            return {...nextState, [action.produceId]: {
                id: produceKey,
                count: 1
            }}
        default :
            return state;
    }
}

export const addCartItem = (produceId) => {
    // debugger
    return { 
        type: CARTITEM,
        produceId
    }
}