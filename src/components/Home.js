import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return(
            <div className="home-container">
                 <Link className="section-container" to="/beers">
                    <img src={require("../assets/beers.png")} alt="beers"></img>
                    <h1>All Beers</h1>
                    <p>Edge Brewing was founded by two Americans to join the craft beer revolution to Barcelona. Using American equipment, ingredients and know-how, Edge produces fresh American craft beer for one of the most exciting cities in Europe. Our goal is to make beer that makes a difference in a market that is just discovering there’s an alternative to factory-produced commercial lager.</p>
                 </Link>

                 <Link className="section-container" to="/random-beer">
                    <img src={require("../assets/random-beer.png")} alt="beers"></img>
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </Link>

                 <Link className="section-container" to="/new-beer">
                    <img src={require("../assets/new-beer.png")} alt="beers"></img>
                    <h1>New Beers</h1>
                    <p>Lacinia quis vel eros donec ac. Molestie at elementum eu facilisis sed odio morbi quis commodo. Ut faucibus pulvinar elementum integer. Nam libero justo laoreet sit amet cursus sit amet dictum. Orci a scelerisque purus semper eget. Mauris a diam maecenas sed enim ut.</p>
                 </Link>
            </div>

        )
    }
}

export default Home
