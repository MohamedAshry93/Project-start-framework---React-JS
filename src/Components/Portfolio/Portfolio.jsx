import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../Assets/Images/port1.png';
import img2 from '../../Assets/Images/port2.png';
import img3 from '../../Assets/Images/port3.png';


export default function Portfolio() {
  // let boxImage = document.querySelectorAll('.pic')
  // let mainImage=document.querySelector('.pic2');
  // for(let i=0 ; i< boxImage.length; i++){
  //   boxImage[i].addEventListener('click',function(e){
  //     let imgSrc=e.target.getAttribute('src');
  //     mainImage.setAttribute('src',imgSrc)
  //   });

  let [boxImage, setBoxImage] = useState(false);
  let [image, setImage] = useState("");
  let imgRef = useRef();

  let showImage = (imgSrc) => {
    setBoxImage(true);
    setImage(imgSrc);
  }

  useEffect(() => {

    let selected = (e) => {
      if (imgRef.current && !imgRef.current.contains(e.target)) {
        setBoxImage(false);
      }
    };

    document.addEventListener("mousedown", selected)
  }, []);

  return (<>
    <div className='container portfolio py-5'>
      <div className="row justify-content-center gy-5 align-items-center mt-2">
        <h2 className='fw-bolder fs-1 text-center mb-0'>PORTFOLIO COMPONENT</h2>
        <div className='d-flex align-items-center justify-content-center mt-3 mb-0'>
          <div className='line2'></div>
          <i className='fa-solid fa-star mx-3'></i>
          <div className='line2'></div>
        </div>
        <div onClick={() => { showImage(img1) }} className="col-md-4 mt-3 portfolio-img">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={img1} alt="Image1" className='rounded-3 w-100 pic' />
            <div className='layer position-absolute opacity-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 portfolio-img">
          <div onClick={() => { showImage(img2) }} className='rounded-3 overflow-hidden position-relative'>
            <img src={img2} alt="Image1" className='rounded-3 w-100 pic' />
            <div className='layer position-absolute opacity-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3 portfolio-img">
          <div onClick={() => { showImage(img3) }} className='rounded-3 overflow-hidden position-relative'>
            <img src={img3} alt="Image1" className='rounded-3 w-100 pic' />
            <div className='layer position-absolute opacity-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 portfolio-img">
          <div onClick={() => { showImage(img1) }} className='rounded-3 overflow-hidden position-relative'>
            <img src={img1} alt="Image1" className='rounded-3 w-100 pic' />
            <div className='layer position-absolute opacity-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 portfolio-img">
          <div onClick={() => { showImage(img2) }} className='rounded-3 overflow-hidden position-relative'>
            <img src={img2} alt="Image1" className='rounded-3 w-100 pic' />
            <div className='layer position-absolute opacity-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 portfolio-img">
          <div onClick={() => { showImage(img3) }} className='rounded-3 overflow-hidden position-relative'>
            <img src={img3} alt="Image1" className='rounded-3 w-100 pic' />
            <div className='layer position-absolute opacity-0 top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus text-white fa-6x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id='lightBox' className={boxImage? 'position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-opacity-25 bg-primary':'d-none'}>
      <div className='w-50 d-flex justify-content-center align-items-center ' ref={imgRef}>
        <img src={image} className=' pic2' alt="" />
      </div>
    </div>
  </>
  )
}
