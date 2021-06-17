import React, {Component} from 'react'
import axios from 'axios'

class SearchBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
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

    handleChange = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        const { query } = this.state
        return(
            <div className="beer-search">
                <div className="control text">
                    <input className="input" type="text" placeholder="search for a beer" name="query" value={query} onChange={this.handleChange} />
                </div>

                <div className="control">
                    <button className="button lupa" onClick={() => this.props.handleSearch(this.state.query)}> 🔍 </button>
                </div>
            </div>
        )
    }
}

export default SearchBeer