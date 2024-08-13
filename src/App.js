import React from 'react'
import "./App.css"
import Home from './sections/Home'
import Meals from './sections/Meals'
import Gallery from './sections/Gallery'
import Pricing from './sections/Pricing'
import 'bootstrap'

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
    </div>
  )
}

export default App;
