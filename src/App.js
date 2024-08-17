import React from 'react'
import "./App.css"
import Home from './sections/Home'
import Meals from './sections/Meals'
import Gallery from './sections/Gallery'
import Pricing from './sections/Pricing'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css';
import Footer from './sections/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./assets/mediaQuery/style.css"

const App = () => {
  return (
    <div className='App'>
      <section>
        <Home />
      </section>
      <section>
        <Meals />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default App;
