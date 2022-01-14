import WinBox from "winbox/src/js/winbox.js";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

export default function MainButtons() {
    const createServ = () => {
        const aboutBox = new WinBox({
          title: 'Services',
          class: "modern",
          width: '600vw',
          height: '300vh',
          top: "150vh",
          right: "50vw",
          bottom: "50vh",
          left: "250vw",
          mount: document.querySelector('#Services-About'),
          onfocus: function () {
            this.setBackground(
                `linear-gradient(90deg, rgba(255, 115, 20, 1) 
                0%, rgba(0,0,0,1) 100%)`)
          },
          onblur: function () {
            this.setBackground('#777')
          },
        })
      }
      
      const createHealth = () => {
      
        const aboutBox = new WinBox({
            title: 'Health',
            class: "modern",
            width: '600vw',
            height: '300vh',
            top: "150vh",
            right: "50vw",
            bottom: "50vh",
            left: "250vw",
            mount: document.querySelector('#Health-About'),
            onfocus: function () {
              this.setBackground(
                `linear-gradient(90deg, rgba(255, 115, 20, 1) 
                0%, rgba(0,0,0,1) 100%)`)
            },
            onblur: function () {
              this.setBackground('#777')
            },
          })
        }

      const createEnv = () => {
      
        const aboutBox = new WinBox({
            title: 'Environmental',
            class: "modern",
            width: '600vw',
            height: '300vh',
            top: "150vh",
            right: "50vw",
            bottom: "50vh",
            left: "250vw",
            mount: document.querySelector('#Environmental-About'),
            onfocus: function () {
              this.setBackground(
                `linear-gradient(90deg, rgba(255, 115, 20, 1) 
                0%, rgba(0,0,0,1) 100%)`)
            },
            onblur: function () {
              this.setBackground('#777')
            },
          })
        }

      const createEA = () => {
      
        const aboutBox = new WinBox({
            title: 'Experiences / Accessibility',
            class: "modern",
            width: '600vw',
            height: '300vh',
            top: "150vh",
            right: "50vw",
            bottom: "50vh",
            left: "250vw",
            mount: document.querySelector('#EA-About'),
            onfocus: function () {
              this.setBackground(
            `linear-gradient(90deg, rgba(255, 115, 20, 1) 
              0%, rgba(0,0,0,1) 100%)`)
            },
            onblur: function () {
              this.setBackground('#777')
            },
          })
      }
    return (

        <Row className="align-items-center justify-content-center">
        <Button variant="outline-light" onClick={createServ}>Services</Button>{' '}
        <Button variant="outline-light" onClick={createHealth}>Health</Button>{' '}
        <Button variant="outline-light" onClick={createEnv}>Environmental</Button>{' '}
        <Button variant="outline-light" onClick={createEA}>Experiences / Accessibility</Button>{' '}
        
        </Row>
 
    )
}
