import React, {Component} from 'react'
import axios from 'axios'
import SearchBeer from './SearchBeer'

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
                this.setState({
                    beers: response.data,
                    status: 'loaded'
                })
            })
            .catch(e=> { console.log(e)})
    }

    handleSearch = (query) => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(response => {
                const beersSearch = response.data
                this.setState({
                    beers: beersSearch
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        const { status, beers } = this.state
        return(
            <>
            {status === 'loading' && (<p>Loading...</p>)}
            {status === 'loaded' && (
                <div className="list-container"> 
                    <SearchBeer handleSearch={this.handleSearch}/>
                    {beers.map(beer => {
                            return(
                                <div key={beer._id} className="single-beer-container">
                                    <div className="single-beer-img">
                                        <img className="beer" src={beer.image_url} alt="bee" />
                                    </div>
                                    <div className="single-beer-content">
                                        <h1>{beer.name}</h1>
                                        <p>{beer.tagline}</p>
                                        <p> <strong>Created by</strong> {beer.contributed_by.substring(0, beer.contributed_by.indexOf('<'))}</p>
                                    </div>
                                </div>
                            )

                        })}
                </div>
                
            )}
        </>
        )
    }
}

export default Beers