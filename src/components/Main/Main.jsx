import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';

class Main extends Component {
    state = {

    }

    render() {
        return (
            <div>
                {/* <Navbar> */}
                    <Container>
                        <h1 className='title'>Ponder Mint</h1>
                        <p className='subTitle'>Invent, Innovate, Iterate</p>subTitle
                    </Container>
                {/* </Navbar> */}
            </div>
        )
    }
}

export default Main;