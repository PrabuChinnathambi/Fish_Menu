import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import './Home.css';
import './Home.scss';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts, cartProducts} from '../../Actions/action';

function Home() {

    const [productsData, setProductsData] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const rdproducts = useSelector(state => state.getproducts)
    console.log(rdproducts);
    
    const dispatch = useDispatch();
    

    useEffect(() => {
        getProducts();
        
    }, [])

    const getProducts = async () => {
        const response = await Axios.get("http://localhost:8000/getItemData")
            .then(res => {
                console.log(res);
                setProductsData(res.data);
            }).catch(err => {
                console.log(err)
            })

        console.log(response);
        // dispatch(getProducts(response.data));
    };

    const handleAddtocart = (prodID) => {
        let count = cartCount;
        setCartCount(count + 1);
        setCartItems(cartItems => [...cartItems, prodID]);
    }

    const handleFinalCart = () => {
        localStorage.setItem("cartItems", cartItems);
    }


    // console.log(cartItems);

    return (
        <div className="home_page">
            <div>
                <Navbar />
            </div>
            <div className="home_container">
                <div className="home_card">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bbLtRM4OZ13uKeLsIxrkYu2JAUgcs6kerQ&usqp=CAU" alt="" />
                    </div>
                    <div className="quotes">
                        <h3>Good Food is the foundation of genuine happiness...</h3>
                    </div>
                </div>
                <Link to={{
                    pathname:"/cart",
                    state:  {
                        cartItems
                    }
                }} onClick={() => {handleFinalCart()}}>
                    <div className="icon_float">
                        <div className="add_cart">
                            <img src="https://img.icons8.com/ios-glyphs/2x/fa314a/buy.png" alt="" />
                            <div className="count"><p>{cartCount}</p></div>
                        </div>
                    </div>
                </Link>
                <div className="home_products">

                    {
                        productsData.map((res) => {
                            return (
                                <div className="home_productCard" key={res._id}>
                                    <div className="product_img">
                                        <img src={res.image} alt="" />
                                    </div>
                                    <div className="card_details">
                                        <p className="product_name">{res.productName}vjhvhj</p>
                                        <div className="product_cost">
                                            <p>Cost : {res.cost}/KG</p>
                                            <p>Stock : {res.quantity}</p>
                                        </div>
                                        <button type="submit" className="button" onClick={() => { handleAddtocart(res._id) }}>Add To Cart</button>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
