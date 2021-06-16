import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return(

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma logo"/>
                </a>
            </div>


        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" to="/beers">Beers</Link>
                <Link className="navbar-item" to="/random-beer">Random Beers</Link>
                <Link className="navbar-item" to="/new-beer">New Beer</Link>
            </div>
        </div>
        </nav>

        )
    }
}

export default Navbar
