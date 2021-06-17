import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return(

        <nav className="navbar-home" >
                <Link  className="navbar-home" to="/">
                    <img className = "home" src="https://static.thenounproject.com/png/4932-200.png" alt="home" />
                </Link>
        </nav>

        )
    }
}

export default Navbar
