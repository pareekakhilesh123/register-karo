import React from 'react'
import { Container , Button} from 'react-bootstrap'
import ourclinet from "../images/ourclients/Pagination.webp"

function OurHappyClinet() {
    return (
        <div>
            <Container className="my-5">
                <h2 className="text-center mb-4">Our Happy Clients</h2>
                <p className='.text-muted text-center' style={{display:"inline-grid" ,width:"60%"}}>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                </Container>

           
            <Container  className="my-5">
            <img src={ourclinet}
                    alt='our clinet logo'
                width={"100%"}
                  loading="lazy"
                    />
                     <Button variant=" d " className="text-primary p-0 fw-bolder ">
                  See More →  <i className="fas fa-arrow-right"></i>
                </Button>

                     </Container>

        </div>
    )
}

export default OurHappyClinet