import React from 'react';
import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "../Header"

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
     //   e.stopPropagation();
     //   e.nativeEvent.stopImmediatePropagation();
       emailjs.sendForm('service_jyzulv9', 'template_fkozhvj', e.target, 'user_hMVwPXjkXWplU7qsrXBM0')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
         e.target.reset()
     }
    return (
    <>
    <Header/>
        <form onSubmit={sendEmail}>
        <Form.Group role="form">
        <Form.Group controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Subject" name="subject" style={{width: "95vw"}}/>
        </Form.Group>
        <Form.Group controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control placeholder="Name" name="name" style={{width: "95vw"}}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" style={{width: "95vw"}}/>
        <Form.Text className="text-muted">
        I'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" style={{width: "95vw"}}/>
        </Form.Group>
        <p> </p>
        <p></p>
        <Button variant="primary" type="submit">Submit form</Button>
        </Form.Group>
    
        </form>
        </>
    )
}
