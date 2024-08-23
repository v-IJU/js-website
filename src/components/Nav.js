import React, { useState } from "react";
import { navLinks } from "../constants";
import { TfiLocationPin } from "react-icons/tfi";
import { MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = ({ handleShow }) => {
  return (
    <section className="nav-section">
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
                  <TfiLocationPin className="nav-location-icon " />
                  <p className="mb-0 location ps-1">{elements.icon.place}</p>
                </a>
              )}
            </React.Fragment>
          ))}
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
              {navLinks.flatMap((elements) =>
                elements.links
                  ? elements.links.map((item) => (
                      <li className="nav-item" key={item.id}>
                        <a className="nav-link text-white" href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))
                  : []
              )}
            </ul>
            <Link to="/bookmark">
              <button className="nav-bookmark">
                <MdBookmarkBorder className=" nav-bookmark-icon" />
              </button>
            </Link>
          </div>
          <button className="sign-up" type="button" onClick={handleShow}>
            Sign Up
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
