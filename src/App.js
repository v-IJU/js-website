import React from "react";
import "./App.css";
import Home from "./sections/Home";
import Meals from "./sections/Meals";
import Gallery from "./sections/Gallery";
import Pricing from "./sections/Pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import Footer from "./sections/Footer";
import "./assets/mediaQuery/style.css";
import Recipe from "./components/Recipe";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import { useState } from "react";

const App = () => {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
};

const AppContainer = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <div className="App">
       <Nav className="nav-section" handleShow={handleShow} />
      <Routes>
        <Route
          path="/"
          element={<HomePage show={show} handleClose={handleClose} />}
        ></Route>
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
};

const HomePage = ({ show, handleClose }) => {
  return (
    <div>
      <Home show={show} handleClose={handleClose} />
      <Meals />
      <Gallery />
      <Pricing />
    </div>
  );
};

export default App;
