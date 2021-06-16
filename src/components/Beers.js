import React, {Component} from 'react'
import Link from 'react-router-dom'
import axios from 'axios'

class Beers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'loading',
            beers: []
        }
    }

    componentDidMount = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then( response => {
                console.log(response.data)
                this.setState({
                    beers: response.data,
                    status: 'loaded'
                })
            })
            .catch(e=> { console.log(e)})
    }
    render() {
        const { status, beers } = this.state
        return(
            <div className="list-container">
               {status === 'loading' && <p>Loading...</p>}
               {status === 'loaded' && beers.map(beer => {
                   return(
                    <div key={beer._id} className="single-beer-container">
                        <img src={beer.image_url} alt="bee" />
                        <div className="single-beer-content">
                            <h1>{beer.name}</h1>
                            <p>{beer.tagline}</p>
                        </div>
                    </div>
                   )

               })}
            </div>

        )
    }
}

export default Beers