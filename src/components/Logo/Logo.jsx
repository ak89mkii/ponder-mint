import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import logo from '../../Img/01.png';

class Main extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar>
                    <Container className='nav'>
                            <Image
                            alt=""
                            src={logo}
                            className="logo"
                            fluid
                            />   
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Main;