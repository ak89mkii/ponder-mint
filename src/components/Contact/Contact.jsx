import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import logo from '../../Img/01.png';

class Contact extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Container>
                    <p className='title'>Contact Info</p>
                    <p className='subTitle'>Email: Info@pondermint.com</p>
                    <p>At Ponder Mint, we continue to work on creative projects. Learning and and building is our mission. If anything we are working on or involved with interests you, to get more information, please feel free to contact us at the email address above.</p>
                </Container>
            </div>
        )
    }
}

export default Contact;