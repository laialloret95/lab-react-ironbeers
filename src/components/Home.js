import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return(
            <div className="home-container">
                 <Link className="section-container" to="/beers">
                    <img src={require("../assets/beers.png")} alt="beers"></img>
                    <h1>All Beers</h1>
                    <p>Edge Brewing was founded by two Americans to join the craft beer revolution to Barcelona. Using American equipment.</p>
                 </Link>

                 <Link className="section-container" to="/random-beer">
                    <img src={require("../assets/random-beer.png")} alt="beers"></img>
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                 </Link>

                 <Link className="section-container" to="/new-beer">
                    <img src={require("../assets/new-beer.png")} alt="beers"></img>
                    <h1>New Beers</h1>
                    <p>Lacinia quis vel eros donec ac. Mauris a diam maecenas sed enim ut.</p>
                 </Link>
            </div>

        )
    }
}

export default Home
