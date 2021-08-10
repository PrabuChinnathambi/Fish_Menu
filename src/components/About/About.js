import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import NavbarNew from '../Navbarnew/NavbarNew';
import './About.css';

function About() {

    const state = useSelector(state => state.getproducts)
    console.log(state);
    return (
        <div>
            <div>
                <NavbarNew/>
            </div>
            <h1>About</h1>
            <Link to="/admin">Admin</Link>
        </div>
    )
}

export default About
