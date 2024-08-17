import React, { useState } from "react";
import { navLinks } from "../constants";
import { TfiLocationPin } from "react-icons/tfi";

const Nav = ( {show ,handleShow} ) => {

  console.log(show);
  
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container-fluid">
        {navLinks.map((elements) => (
          <React.Fragment key={elements.id}>
            {elements.icon && (
              <a
                className="navbar-brand d-flex align-items-center text-white "
                href={elements.icon.link}
              >
                <img
                  src={elements.icon.img.navImg}
                  className="nav-img pe-1"
                  alt="Nav Logo"
                />
                <TfiLocationPin className="nav-location-icon "/>
                <p className="mb-0 location ps-1">{elements.icon.place}</p>
              </a>
            )}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav">
                {elements.links &&
                  elements.links.map((item) => (
                    <li className="nav-item" key={item.id}>
                      <a className="nav-link text-white" href={item.link}>
                        {item.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
        <button className="sign-up" type="button" onClick={handleShow}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
