import getReducer from '../Reducers/getProducts';
import cartReducer from '../Reducers/cartValues';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    getproducts: getReducer,
    cartProducts: cartReducer
})


export default allReducers;