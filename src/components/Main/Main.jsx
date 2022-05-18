import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import projects from '../../Img/02.png';

class Main extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Container>
                    <h1 className='title'>Ponder Mint</h1>
                    <p className='subTitle'>Invent, Innovate, Iterate</p>
                    <p>Ponder Mint LLC is a company focused on research, design, and development ventures. As a parent comany, we support projects focused on inventive, innovative, and iterative initiatives, taking on and testing ideas.</p>
                    <p className='subTitle'>Ponder Mint Company, Brand, and Project Breakdown</p>
                    <Image
                        alt=""
                        src={projects}
                        className="logo"
                        fluid
                    />   
                    <h5>Ponder Mint LLC (Parent Company)</h5>
                    <h5>Ponder Enterprises LLC | Ponder Code (Registered Alternate Name)</h5>
                    <h5>A.I. Chasm Games, (Ponder Enterprises Tabletop and Video Games Branch)</h5>
                </Container>
            </div>
        )
    }
}

export default Main;