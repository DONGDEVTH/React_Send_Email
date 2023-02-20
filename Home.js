import React from 'react'
import { Navbar,Nav,Container,Col,Row,Image } from 'react-bootstrap';

export const Home = () =>{
    return (
        
             
        <main className="my-5">
        <Container fluid="md">
          <Row className="">
           <img src="./Images/home.png" />
          </Row>
          <Row>
          <img src="./Images/Background.png" className="banner--image" />    
    
          </Row>
          <Row>
          <img src="./Images/Footer.png" className="footage--image" /> 
          </Row>
          <Row>
            <Col>2 of 2</Col>
          </Row>
        </Container>
    
        </main>

    )
}