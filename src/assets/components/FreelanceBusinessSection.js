import React from 'react'

import logoimg from "../images/FreelancebBusinessSection/Logos.webp"

function FreelanceBusinessSection() {
  return (
    <div style={{width:"100%" , height:"240px"}}>
        <h2 className='p-5'>Trusted By Over 100+ Startups and freelance business</h2>
        <img src={logoimg}
            alt=' Startups logo'
            width={"100%"}
            loading="lazy"
        />
    </div>
  );
};

export default FreelanceBusinessSection;