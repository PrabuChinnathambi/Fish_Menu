import React from 'react';
import './NavbarNew.css';
import { Link } from 'react-router-dom';


function NavbarNew() {
    return (
        <div className="navbar_container_new">
            <nav className="navbar navbar-expand-md navbar-dark p-3 bg-info bg-gradient" >
                <div className="container-fluid">
                    <img className="logo1" src="https://img.icons8.com/ios-filled/2x/ffffff/koi-fish.png" alt="" />
                    <a className="navbar-brand ms-2" href="#"><strong>Fish Menu</strong></a>
                    <button className="navbar-toggler ms-auto bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="collapseNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active me-5 ms-2 ">
                                <Link to="/home" className="nav-link text-white"><strong>Home</strong></Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link to="/about" className="nav-link text-white"><strong>About</strong></Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link to="/contact" className="nav-link text-white"><strong>Contact</strong></Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link to="/cart" className="nav-link text-white"><strong>Cart</strong></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavbarNew
