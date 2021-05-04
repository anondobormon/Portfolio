import React from 'react';
import './Navbar.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {

    return (
        <div>


            <nav class="navbar navbar-expand-lg navbar-light  background" style={{backgroundColor: '#e3f2fd'}}>
                <div class="container-fluid ml-5 mr-5">
                    <a class="navbar-brand anondo" href="#">ANONDO BORMON</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#blog">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

           



        </div>
    );
};

export default Navbar;