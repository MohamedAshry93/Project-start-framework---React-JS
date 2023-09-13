import React from 'react'
import img from '../../Assets/Images/avataaars.svg'
export default function Home() {
  return (
    <div className='container-fluid bg-main home'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10 mt-5">
          <figure className='text-center'>
            <img src={img} className='w-25 mb-3 mt-5' alt="HomeImg" />
            <h1 className='fw-bolder text-white'>START FRAMEWORK</h1>
          </figure>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='line'></div>
            <i className='fa-solid fa-star text-white mx-3'></i>
            <div className='line'></div>
          </div>
          <div className='text-white text-center mt-3'>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      
      </div>
      
    </div>
  )
}
