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

class Breakdown extends Component {
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
                {/* 01 */}
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={pondere} />
                </a>
                <p><b>Ponder Enterprises LLC (Subsidiary)</b></p>
                <p>Ponder Enterprises LLC operates as a business ventures and distribution subsidiary of Ponder Mint.</p>
                {/* 02 */}
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={logo3} />
                </a>                
                <p><b>Ponder Code (Registered Alternate Name of Ponder Enterprises LLC)</b></p>
                <p>Website and web application development firm.</p>
                <br></br>
                <h1>|</h1>
                <br></br>

                {/* Section 02: Ponder Enterprises LLC */}
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={pondere} />
                </a>
                <h4><b>- Ponder Enterprises LLC -</b></h4>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={games} />
                </a>
                <p><b>A.I. Chasm Games (Ponder Enterprises Game Development Division)</b></p>
                <p>Ponder Enterprises tabletop and video games branch.</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={ecom} />
                </a>
                <p><b>E-Commerce (Amazon Seller)</b></p>
                <p> Video games, consoles, accessories, and tabletop games.</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={etsy} />
                </a>
                <p><b>Etsy Shop</b></p>
                <p>An Etsy shop with a 3D printed gadgets and fidget devices product focus .</p>
                <p>- Fidget Ki (3D printed fidget gadget)</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={pondere} />
                </a>
                <p><b>The Ponder Enterprises Store</b></p>
                <p>The Ponder Enterprises store currently offer both original products and assorted retail games and gear.</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={teepublic} />
                </a>
                <p><b>TeePublic Shop</b></p>
                <p>Custom nerdy shirts, stickers, mugs, and prints (largely programming related).</p>
                <br></br>
                <h1>|</h1>
                <br></br>

                {/* Section 03: Ponder Code */}
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={logo3} />
                </a>
                <h4><b>- Ponder Code -</b></h4>
                <p>- Code Seonbi (A web-based coding references and bug tracking application)</p>
                <p>- DiceDex.io (A tabletop game group database and tracker)</p>
                <p>- Sholodex.com (The Show Lowdown Index. A breakdown of the most popular streaming services' pricing tiers and interactive costs total calculator)</p>
                <br></br>
                <h1>|</h1>
                <br></br>

                {/* Section 04: A.I. Chasm Games */}
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={games} />
                </a>
                <h4><b>- A.I. Chasm Games -</b></h4>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={itch} />
                </a>
                <p><b>Itch.io Shop</b></p>
                <p>A web-based video game hosting platform and storefront. You can try A.I. Chasm video game projects here.</p>
                <p>- Bug Buster (2D platformer with coding commentary)</p>
                <p>- Schrodinger the Cat (2D top-down puzzle game).</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={google} />
                </a>
                <p><b>Google Play App Store</b></p>              
                <p>Android apps and games.</p>
                <p>- Dual-Lists (simple shopping list tracking app)</p>
                <p>- Dual-Lists 2 (simple shopping list tracking app with save feature)</p>
                <p>- Flappy Flea (2D endless runner style game)</p>
                <a href="https://www.amazon.com/sp?ie=UTF8&seller=A3MN8FMN4UC094&isAmazonFulfilled=0&asin=B08KXB6SZH&ref_=olp_merch_name_6" target="_blank">
                    <Image className='logo2' src={tgc} />
                </a>
                <p><b>The Game Crafter Shop</b></p>
                <p>A custom tabletop game storefront and manufacting plaform.</p>
                <p>- Cataclysm (Dualing elemental nand nature card game)</p>
                <p>- Codeck (programming card game)</p>
                <p>- Nerd Word (competative nerd trivia card game)</p>
                <p>- Routes and Reptiles (Race to the finish RPG board game)</p>
                </Container>
            </div>
        )
    }
}

export default Breakdown;