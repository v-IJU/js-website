import React, { useState } from 'react'
import { gallery } from '../constants'
const Gallery = () => {

const [isMouseEnter, setIsMOuseEnter] = useState("")

const handleMouseEnter = (id) =>{
  setIsMOuseEnter(id)
}
const handleMouseLeave = () =>{
  setIsMOuseEnter("")
}

console.log(isMouseEnter);

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
        {gallery.map((gall)=>(
          <div className='col gal-img-container' key={gall.id}>
            <img src={gall.img} onMouseEnter={()=>{handleMouseEnter(gall.id)}} onMouseLeave={handleMouseLeave} className='gall-img' alt={`gallery img-${gall.id}`} />
            <p className={`gal-text ${isMouseEnter === gall.id ? 'text-pop' : ''}`}>{gall.text}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
   </section>
  )
}

export default Gallery
