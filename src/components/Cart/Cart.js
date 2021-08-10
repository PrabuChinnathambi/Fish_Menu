import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarNew from '../Navbarnew/NavbarNew';
import Axios from 'axios';

function Cart() {


    const [productsData, setProductsData] = useState([]);
    const [cartItems, setCartItems] = useState("");
    

    const location = useLocation();
     setCartItems(location.state.cartItems); 
    //  setProductsData(location.state.productAllData);

    // console.log(productsData);
    console.log(cartItems);
    useEffect(() => {
      

    }, [])


    // const filterData = () => {

    //     if (cartData) {
    //         cartData.map(item => {
    //             var data = productAllData.find(x => x._id === item);
    //             console.log(data);
    //             setCartItems([...cartItems, data]);
    //         })
    //     }

    // }


    


    return (
        <div>
            <div>
                <NavbarNew />
            </div>
            <div>
                {/* {
                    cartData.map(item => {
                        return (
                            <div key={item}>
                                <h1>{item}</h1>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default Cart
