import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import projects from '../../Img/main.png';

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
                    <p>- Subsidiary: Ponder Enterprises LLC | Ponder Code | A.I. Chasm Games (A division of Ponder Enterprises).</p>
                    <h5>Ponder Enterprises LLC | Ponder Code (Registered Alternate Name)</h5>
                    <p>- Etsy Store: Fidget Ki (3D printed fidget gadget).</p>
                    <p>- TeePublic Store: custom nerdy shirts, stickers, mugs, and prints (largely programming related).</p>
                    <p>- Deployed Apps: Code Seonbi (Coding references and bug Tracker), Sholodex.com, the Show Lowdown Index (Streaming platform price guide and calculator).</p>
                    <h5>A.I. Chasm Games, (Ponder Enterprises Tabletop and Video Games Branch)</h5>
                    <p>- Itch.io: Bug Buster (2D platformer with coding commentary), Schrodinger the Cat (2D top-down puzzle game).</p>
                    <p>- Google Play: Flappy Flea (2D endless runner style game).</p>
                    <p>- The Game Crafter: Codeck (Programming card game), Nerd Word (Competative nerd trivia card game), Routes and Reptiles (Race to the finish RPG board game).</p>
                </Container>
            </div>
        )
    }
}

export default Main;