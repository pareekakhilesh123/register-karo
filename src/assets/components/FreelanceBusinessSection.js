import React from 'react'
import '../styles/Sectionbackground.css'
import logoimg from "../images/FreelancebBusinessSection/Logos.png"

function FreelanceBusinessSection() {
  return (
    <div className='Sectionbackground'>
        <h2>Trusted By Over 100+ Startups and freelance business</h2>
        <img src={logoimg}
            alt=' Startups logo'
            width={"100%"}
            loading="lazy"
        />
    </div>
  );
};

export default FreelanceBusinessSection;