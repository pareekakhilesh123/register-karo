import React from 'react'
import mobilephoto from "../images/MobileAppServices/mobilephoto.png"
import play from "../images/MobileAppServices/playstroe.png"
import app from "../images/MobileAppServices/applestroe.png"

function MobileAppServices() {
  return (
    <div className="text-white py-5" style={{ backgroundColor:"rgb(1, 29, 71)"}}>
    <div className="container">
      <div className="row align-items-center">
      
        <div className="col-md-6">
          <h2 className="mb-4">Manage Your Services by your Mobile Phone</h2>
          <p className="mb-4">
            Download our app to manage and track your services. Our app
            enables you to stay in touch with our experts and aids you in
            tracking your progress.
          </p>
          
          <div className="d-flex gap-3">
            <a
              href="#"
              className="btn btn-light d-flex align-items-center px-4 py-2"
              style={{ borderRadius: "10px" }}
            >
              <img
                src={app}
                alt="App Store"
                style={{ width: "20px", marginRight: "10px" }}
                  loading="lazy"
              />
              Get it on <strong className="ms-1">App Store</strong>
            </a>
            <a
              href="#"
              className="btn btn-light d-flex align-items-center px-4 py-2"
              style={{ borderRadius: "10px" }}
            >
              <img
                src= {play}
                alt="Google Play"
                style={{ width: "20px", marginRight: "10px" }}
                  loading="lazy"
              />
              Get it on <strong className="ms-1">Google Play</strong>
            </a>
          </div>
        </div>

     
        <div className="col-md-6 text-center">
          <img
        src={mobilephoto}
            alt="Mobile Mockup"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
              loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobileAppServices
 
 
 
