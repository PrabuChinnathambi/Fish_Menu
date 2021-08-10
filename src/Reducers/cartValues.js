const initialstate = {
    cartProducts:[]
}


const cartReducer = ( state = initialstate, action) => {
    switch (action.type) {
        case "CART_PRODUCTS":
            return state;
        default:
            return state;
    }
}


export default cartReducer;