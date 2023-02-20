import './App.css';
import { Navbar,Nav,Container,Col,Row,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {Portfolio} from './components/Portfolio';

export default function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar bg="dark" variant="dark" >
          <Container >
            <Navbar.Brand href="#home" >
              <img src="./Images/github.png" 
          className="logogit--image" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
             
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
      
          </div>
          </BrowserRouter>
    
  )
}
