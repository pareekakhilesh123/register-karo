import React from 'react'

function SomeRegisterNo() {
  return (
    <div>
    <div className="bg-light py-5">
<div className="container text-center">
<p className="m-4" style={{ color: "#EB8D15" }}>Why Register karo</p>
 
  <h4>Some Numbers are Important</h4>
  <div className="row mt-4">
    {[
      { number: "1M+", label: "Customers" },
      { number: "12+", label: "Years of Excellence" },
      { number: "41+", label: "R&D Engineers" },
      { number: "78+", label: "Countries" },
      { number: "3287+", label: "Partners" },
      { number: "41+", label: "Awards Received" },
    ].map((stat, index) => (
      <div className="col-md-4 col-lg-2 mb-4" key={index}>
        <h3 className="text-primary">{stat.number}</h3>
        <p>{stat.label}</p>
      </div>
    ))}
  </div>
</div>
</div>


    </div>
  )
}

export default SomeRegisterNo

