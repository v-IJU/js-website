import React from 'react'
import { gallery } from '../assets/images'

const Gallery = () => {
  return (
   <section className='container-fluid gallery pt-1 pb-2'>
    <div className='row'>
      <div className='col-6 gal-col1'>
      <p className="mb-1 Ubuntu gallery-h1">MEALS</p>
      <p className='gal-p2 Poppins'>Daily Ongoing Meals !!!</p>
      <p className='gal-p3 Poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.,</p>
      </div>
      <div className='col-6 gal-col2'>
        <div className='row row-cols-3 '>
        {gallery.map((gall, index)=>(
          <div className='col' key={index}>
            <img src={gall} className='gall-img' alt={`gallery img-${index}`} />
          </div>
        ))}
        </div>
      </div>
    </div>
   </section>
  )
}

export default Gallery
