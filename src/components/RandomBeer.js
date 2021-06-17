import React, {Component} from 'react'
import axios from 'axios'

class RandomBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'loading',
            beer: {}
        }
    }

    componentDidMount = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then( response => {
                console.log(response.data)
                this.setState({
                    beer: response.data,
                    status: 'loaded'
                })
            })
            .catch(e=> { console.log(e)})
    }
    render() {
        const { status, beer } = this.state
        return(
            <div className="list-container">
               {status === 'loading' && <p>Loading...</p>}
               {status === 'loaded' && 
                    <div key={beer._id} className="single-random-beer-container">
                        <div className="single-beer-img">
                            <img className="beer" src={beer.image_url} alt="bee" />
                        </div>
                        
                        <div className="single-random-beer-content">
                            <div className="title">
                                <h1>{beer.name}</h1>
                                <p>{beer.attenuation_level}</p>
                            </div>
                            <div className="tagline">
                                <p>{beer.tagline}</p>
                                <p>{beer.first_brewed}</p>
                            </div>

                            <p className="description">{beer.description}</p>
                            <p> {beer.contributed_by.substring(0, beer.contributed_by.indexOf('<'))} </p>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

export default RandomBeer