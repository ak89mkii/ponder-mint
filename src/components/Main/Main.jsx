import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import projects from '../../Img/04.png';
import etsy from '../../Img/etsy.png';
import google from '../../Img/google.png';
import itch from '../../Img/itch.png';
import teepublic from '../../Img/teepublic.png';
import tgc from '../../Img/tgc.png';
import logo from '../../Img/01.png';
import logo3 from '../../Img/03.png';
import ecom from '../../Img/ecom.png';
import pondere from '../../Img/pondere.png';
import games from '../../Img/games.png';

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
                    {/* <p className='subTitle'>Ponder Mint Company, Brand, and Project Breakdown</p> */}
                    <Image
                        alt=""
                        src={projects}
                        className="logo"
                        fluid
                    />
                    <p className='subTitle'>Ponder Mint Company, Brand, and Project Breakdown</p>
                    
                    <h4><a href="https://ak89mkii.wixsite.com/pondermint" target="_blank"><Image className='logo2' src={logo} /></a>Ponder Mint LLC (Parent Company)</h4>

                    <ul>

                        <li><a href="" target="_blank"><Image className='logo2' src={pondere} /></a><b>Ponder Enterprises LLC</b></li>


                        <li><a href="https://www.pondercode.com/" target="_blank"><Image className='logo2' src={logo3} /></a><b>Ponder Code</b></li>

                        <li><a href="" target="_blank"><Image className='logo2' src={games} /></a><b>A.I. Chasm Games (A division of Ponder Enterprises)</b></li>

                    </ul>

                    <h4><Image className='logo2' src={pondere} /> | <Image className='logo2' src={logo3} />Ponder Enterprises LLC | Ponder Code (Registered Alternate Name)</h4>

                    <ul>       

                        <li><a href="https://www.etsy.com/shop/PonderEnterprises?ref=seller-platform-mcnav" target="_blank"><Image className='logo2' src={etsy} /></a><b>Etsy Store</b>: Fidget Ki (3D printed fidget gadget).</li>

                        <li><a href="https://www.teepublic.com/user/ponder-print" target="_blank"><Image className='logo2' src={teepublic} /></a><b>TeePublic Store</b>: Custom nerdy shirts, stickers, mugs, and prints (largely programming related).</li>
                        
                        <li><a href="https://www.pondercode.com/" target="_blank"><Image className='logo2' src={logo3} /></a><b>Software Development</b>: Code Seonbi (Coding references and bug Tracker) | Sholodex.com, the Show Lowdown Index (Streaming platform price guide and calculator).</li>

                        <li><a href="https://play.google.com/store/apps/details?id=com.ak89mkii.simplelistapp" target="_blank"><Image className='logo2' src={google} /></a><b>Google Play</b>: Dual-Lists (Simple shopping list tracking app).</li>

                        <li><a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank"><Image className='logo2' src={ecom} /></a><b>E-Commerce</b>: Video games, consoles, accessories, and tabletop games.</li>

                        <li>

                        <p><b><Image className='logo2' src={games} />A.I. Chasm Games, (Ponder Enterprises Tabletop and Video Games Branch)</b>:</p>

                        <ul>
                            
                            <li><a href="https://a-i-chasm-games.itch.io/" target="_blank"><Image className='logo2' src={itch} /></a><b>Itch.io</b>: Bug Buster (2D platformer with coding commentary) | Schrodinger the Cat (2D top-down puzzle game).</li>

                            <li><a href="https://play.google.com/store/apps/details?id=ak89.ig88" target="_blank"><Image className='logo2' src={google} /></a><b>Google Play</b>: Flappy Flea (2D endless runner style game).</li>

                            <li><a href="https://www.thegamecrafter.com/designers/a.i.-chasm-games" target="_blank"><Image className='logo2' src={tgc} /></a><b>The Game Crafter</b>: Codeck (Programming card game) | Nerd Word (Competative nerd trivia card game) | Routes and Reptiles (Race to the finish RPG board game).</li>

                        </ul>
                        
                        </li>

                    </ul>
                </Container>
            </div>
        )
    }
}

export default Main;