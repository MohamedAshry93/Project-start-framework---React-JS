import React from 'react'

export default function Contact() {
  return (
    <div className='container py-5'>
      <div className="row justify-content-center gy-5 align-items-center mt-5">
        <div className="col-md-12">
          <h2 className='fw-bolder fs-1 text-center mb-0'>CONTACT SECTION</h2>
          <div className='d-flex align-items-center justify-content-center mt-3 mb-5'>
            <div className='line2'></div>
            <i className='fa-solid fa-star mx-3'></i>
            <div className='line2'></div>
          </div>
          <form>
            <div className="row">
              <div className='col-md-8 mx-auto'>
                <input type="text" className="form-control mb-5 border-0 border-bottom" placeholder="userName" aria-label="Name"
                  name="Name" required />
                <input type="number" className="form-control mb-5 border-0 border-bottom" placeholder="userAge" aria-label="Age"
                  name="userAge" required />
                <input type="password" className="form-control mb-5 border-0 border-bottom" placeholder="userPassword" aria-label="Password"
                  name="userPassword" required />
                <input type="email" className="form-control border-0 border-bottom" placeholder="userEmail" aria-label="Email"
                  name="userEmail" required />
              </div>
              <div className="col-md-8 mx-auto">
                <button type="button" className="border-0 rounded bg-green text-white py-2 px-5 fit-content d-block mt-4">Send Message</button>
              </div>

            </div>


          </form>
        </div>
      </div>

    </div>
  )
}
