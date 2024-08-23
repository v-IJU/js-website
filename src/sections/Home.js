import React,{useState} from "react";
import { logo } from "../assets/images";
import SignUp from "../components/SignUp";
import SignUpHome from "../components/SignUpHome";
import Search from "../components/Search";

const Home = ({ show, handleClose }) => {
  return (
    <section className="home-section">
      <div className="container-fluid home-bg text-center ">
        <div className="home-bg-overlay"></div>
        {/* <section>
          <Nav show={show} setShow={setShow} handleShow={handleShow} />
        </section> */}
        <SignUp show={show} handleClose={handleClose} />
        <SignUpHome />

        <div className="home-content text-white">
          <p className="Montserrat-alter home-h">
            F<span>OO</span>DTODAY
          </p>
          <p className="home-p1">Discover the best Meals & drinks</p>

          <Search />
        </div>

        <div className="container-fluid logo py-4">
          <p className="py-2 logo-p1 Ubuntu logo-h">AS FEATURED IN</p>
          <div className="row justify-content-evenly">
            <div className="col-7 ">
              <div className="row logo-container px-0 justify-content-start">
                {logo.map((logo, index) => (
                  <div className="col  logo-div" key={index}>
                    <img src={logo} className="logo-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
