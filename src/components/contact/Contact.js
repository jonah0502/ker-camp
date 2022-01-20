import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../Header";
import {
  Instagram,
  Envelope,
  Facebook,
  Twitter,
  Tiktok,
} from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";




export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    //   e.stopPropagation();
    //   e.nativeEvent.stopImmediatePropagation();
    emailjs
      .sendForm(
        "service_jyzulv9",
        "template_fkozhvj",
        e.target,
        "user_hMVwPXjkXWplU7qsrXBM0"
      )
      .then(
        (result) => {
          toast.success("Form Submitted Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
    <Header/>
      <div className="form">
        <div className="container">
        <ToastContainer position="top-center" />
        <div className="form-group">
        <form onSubmit={sendEmail}>
          <div className="contact-me">
            <h1>Contact Us</h1>
          </div>
          <Form.Group role="form">
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                placeholder="Subject"
                name="subject"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                placeholder="Name"
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
              />
            </Form.Group>
            <p> </p>
            <p></p>
            <Row className="align-items-center">
            <Button variant="primary" type="submit" className="center">
              Submit form
            </Button>
            </Row>
          </Form.Group>
        </form>
      </div>
      <div className="contact-group">
        <h3>You can also find us on:</h3>
        <div className="links">
        <a href="https://www.instagram.com/osu4you/">
          <Instagram /> @asosu4u
        </a>
        <a href="asosu4you@gmail.com">
          <Envelope /> asosu4you@gmail.com
        </a>
        </div>
        </div>
      </div>
      </div>
      </>
  );
}
