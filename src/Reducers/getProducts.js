const initialstate = {
    products: []
}


const productReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case "GET_PRODUCTS":
            return {...state, products: payload};
        default:
            return state;
    }
}


export default productReducer;