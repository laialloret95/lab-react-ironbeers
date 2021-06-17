import React, { Component } from 'react';
import axios from "axios";

class NewBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
            beerSubmitted: 'false'
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleAddBeer = () => {
        this.setState({
            beerSubmitted: 'waiting'
        })

        const newBeer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: parseFloat(this.state.attenuation_level),
            contributed_by: this.state.contributed_by,
        };

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => {
                console.log(response)
                this.setState({
                    beerSubmitted: 'true'
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, beerSubmitted } = this.state
        return (
            <div className="beer-form">
                {beerSubmitted === 'waiting' && <p className="submitMessage" >Your <strong>beer</strong> is being added... ⏳</p>}
                {beerSubmitted === 'true' && <p className="submitMessage">Congratulations you just added a <strong>New Beer!</strong> 🍺</p>}
                {beerSubmitted === 'false' &&
                <>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="name" value={name} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Tagline</label>
                        <div className="control">
                            <input className="input" type="text" name="tagline" value={tagline} onChange={this.handleChange} />
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea className="textarea" type="text" name="description" value={description} onChange={this.handleChange}></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">First brewed</label>
                        <div className="control">
                            <input className="input" type="text" name="first_brewed" value={first_brewed} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Brewers tips</label>
                        <div className="control">
                            <input className="input" type="text" name="brewers_tips" value={brewers_tips} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Contributed by</label>
                        <div className="control">
                            <input className="input" type="text" name="contributed_by" value={contributed_by} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Attenuation Level</label>
                        <div className="control">
                            <input className="input" type="number" name="attenuation_level" value={attenuation_level} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="control">
                        <button className="button is-link" onClick={this.handleAddBeer}> ADD NEW</button>
                    </div>
                </>
                }
            </div>
        )
    }

}

export default NewBeer;