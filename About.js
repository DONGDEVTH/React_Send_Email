import React from 'react'
import { Navbar,Nav,Container,Col,Row,Image } from 'react-bootstrap';

export const About = () =>{
    return (
        <main className="my-5">
        <Container fluid="md">
          <Row className="">
           <img src="./Images/abouts.png" />
          </Row>
    
          <Row>
            <Col>2 of 2</Col>
          </Row>
        </Container>
    
        </main>
    )
}