import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
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
                    <p className='title'>Company Summary </p>
                    <p className='subTitle'>Brand, Product, and Project Breakdown</p>
                    <p>From software development to 3D printing, Ponder Mint is involved in various aspects of the creative process. Through Ponder Enterprises LLC, a Ponder Mint subsidiary, concepts and business ideas are tested as consumer available products. Below is a general breakdown of the Ponder Mint company structure.</p>
                </Container>
                <Container className='breakdown'>
                
                {/* Section 01: Ponder Mint LLC */}
                <Image className='logo2' src={logo} />
                <h4><b>- Ponder Mint LLC (Parent Company) -</b></h4>
                <Image className='logo2' src={pondere} />
                <p><b>Ponder Enterprises LLC (Subsidiary)</b></p>
                <p>Ponder Enterprises LLC operates as a business ventures and distribution subsidiary of Ponder Mint.</p>
                <Image className='logo2' src={logo3} />
                <p><b>Ponder Code (Registered Alternate Name of Ponder Enterprises LLC)</b></p>
                <p>Website and web application development firm.</p>
                <br></br>
                <h1>|</h1>
                <br></br>

                {/* Section 02: Ponder Enterprises LLC */}
                <Image className='logo2' src={pondere} />
                <h4><b>- Ponder Enterprises LLC -</b></h4>
                <Image className='logo2' src={games} />
                <p><b>A.I. Chasm Games (Ponder Enterprises Game Development Division)</b></p>
                <p>Ponder Enterprises tabletop and video games branch.</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank"><Image className='logo2' src={ecom} /></a>
                <p><b>E-Commerce (Amazon Seller)</b></p>
                <p> Video games, consoles, accessories, and tabletop games.</p>
                <Image className='logo2' src={etsy} />
                <p><b>Etsy Shop</b></p>
                <p>An Etsy shop with a 3D printed gadgets and fidget devices product focus .</p>
                <p>- Fidget Ki (3D printed fidget gadget)</p>
                <Image className='logo2' src={pondere} />
                <p><b>The Ponder Enterprises Store</b></p>
                <p>The Ponder Enterprises store currently offer both original products and assorted retail games and gear.</p>
                <Image className='logo2' src={teepublic} />
                <p><b>TeePublic Shop</b></p>
                <p>Custom nerdy shirts, stickers, mugs, and prints (largely programming related).</p>
                <br></br>
                <h1>|</h1>
                <br></br>

                {/* Section 03: Ponder Code */}
                <Image className='logo2' src={logo3} />
                <h4><b>- Ponder Code -</b></h4>
                <br></br>
                <h1>|</h1>
                <br></br>

                {/* Section 04: A.I. Chasm Games */}
                <Image className='logo2' src={games} />
                <h4><b>- A.I. Chasm Games -</b></h4>
                <Image className='logo2' src={itch} />
                <p><b>Itch.io Shop</b></p>
                <p>A web-based video game hosting platform and storefront. You can try A.I. Chasm video game projects here.</p>
                <p>- Bug Buster (2D platformer with coding commentary)</p>
                <p>- Schrodinger the Cat (2D top-down puzzle game).</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank"><Image className='logo2' src={google} /></a>
                <p><b>Google Play App Store</b></p>              
                <p>Android apps and games.</p>
                <p>- Dual-Lists (simple shopping list tracking app)</p>
                <p>- Dual-Lists 2 (simple shopping list tracking app with save feature)</p>
                <p>- Flappy Flea (2D endless runner style game)</p>
                <Image className='logo2' src={tgc} />
                <p><b>The Game Crafter Shop</b></p>
                <p>A custom tabletop game storefront and manufacting plaform.</p>
                <p>- Cataclysm (Dualing elemental nand nature card game)</p>
                <p>- Codeck (programming card game)</p>
                <p>- Nerd Word (competative nerd trivia card game)</p>
                <p>- Routes and Reptiles (Race to the finish RPG board game)</p>

                <br></br>
                <h1>|</h1>
                <br></br>

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