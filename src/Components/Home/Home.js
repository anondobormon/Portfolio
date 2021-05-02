import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;