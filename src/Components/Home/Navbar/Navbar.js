import React from "react";
import "./Navbar.css";
// import './Navbar.sass'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light  background"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid ml-5 mr-5">
          <a class="navbar-brand anondo" href="#">
            ANONDO BORMON
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#blog">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Navr>
                <Logo>
                    <a href="">ANONDO BORMON</a>
                </Logo>
                <Menu>
                    <Ul>
                        <Li>Home</Li>
                        <Li>Home</Li>
                        <Li>Home</Li>
                        <Li>Home</Li>
                    </Ul>
                </Menu>
            </Navr> */}
    </div>
  );
};

export default Navbar;

// const Navr = styled.div`
//     height: 60px;
//     width: 100%;
//     display: flex:
//     justify-content: space-between;
//     align-items: center

// `

// const Logo = styled.div`

// `
// const Menu = styled.div`

// `
// const Ul = styled.ul`

// `
// const Li = styled.li`

// `
