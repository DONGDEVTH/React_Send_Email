import React, { useRef } from 'react'
import { Navbar, Nav, Container, Col, Row, Image, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('gmail', 'template_API', e.target, 'TOKEN API')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
           <h1 className="textcenter">Contact me</h1>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="col-8 form-group pt2 mx-auto space">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt2 mx-auto space" >
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt2 mx-auto space">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt2 mx-auto space">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt3 mx-auto space">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}













