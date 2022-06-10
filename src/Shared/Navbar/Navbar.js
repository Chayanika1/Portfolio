import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Chayanika</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Intro">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                
                                <a class="btn n-button" href="#contact" role="button">Contact Us</a>
                                    
                                    
                                

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </div>



    );
};

export default Navbar;