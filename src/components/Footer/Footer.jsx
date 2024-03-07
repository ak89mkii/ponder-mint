import React, { Component, createRef } from 'react'
import '../../App.css'

class Footer extends Component {
    state = {

    }

    render() {
        return (
            <div className='footer'>
                <div class="container">
                    <div class='row'>
                        <div class="col">
                            © 2017 - 2024 Ponder Mint LLC
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;