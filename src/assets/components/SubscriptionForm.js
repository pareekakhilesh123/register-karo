import React from 'react'
import content from "../images/SubscriptionForm/Content.png"

function SubscriptionForm() {
  return (
    <div>  
     <div className="d-flex align-items-center justify-content-center  " style={{ background: 'linear-gradient(to right, #f5a623, #0052cc)',}}>
      <div className="text-center text-white p-4">
        <h6 className="fw-bold">1% OF THE INDUSTRY</h6>
        <h1 className="fw-bold my-3">
          Welcome to your new digital reality. Now.
        </h1>
        <div className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter Your Email"
            style={{ maxWidth: '300px' }}
          />
          <button className="btn btn-warning fw-bold">Submit</button>
        </div>
        <div className="mt-4">
          <span className="me-3">
            ✅ <span>Instant results</span>
          </span>
          <span className="me-3">
            ✅ <span>User-friendly interface</span>
          </span>
          <span>
            ✅ <span>Personalized customization</span>
          </span>
        </div>
      </div>
    </div>

<img src={content}
alt='Content'
width={"100%"}

/>
    </div>
  )
}

export default SubscriptionForm