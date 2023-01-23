import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main.jsx'
import Logo from './components/Logo/Logo.jsx'
import Breakdown from './components/Breakdown/Breakdown.jsx'
import Footer from './components/Footer/Footer.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="main">
        <Logo />
        <Main />
        <Breakdown />
        <Footer />
      </div>
      
    )
  }
}

export default App;
