import React from 'react'

import Header from './Header'
import Navbar from './Navbar'

import api from '../lib/api'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            tracks:[]
        }
    }

    componentDidMount() {
        api.get('/top-artist').then(response => {
            this.setState({
                artists: response.data.artists
            })
        })
        api.get('/top-track').then(response => {
            console.log(response.data.tracks)
            this.setState({
                tracks: response.data.tracks
            })
        })
    }


    render() {
        return (
            <div id="page">
                <Navbar active="home" />
                <Header>
                    YOUR TOP ARTISTS AND TRACKS
                    <p> Enter profile pic </p>
                </Header>
                <div className="colorlib-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                                <h2>Top Artists</h2>
                                <p>Your most listened to artists of all time according to Spotify.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            { this.state.artists.map((artist, index) => (
                                <div className="col-md-4 text-center animate-box" key={artist.id}>
                                    <div className="staff-entry">
                                        <div className="desc">
                                            <h3>{ artist.name }</h3>
                                            <span>{ index + 1 }</span>
                                            <p>Follower Count: { artist.followers.total }</p>
                                            <p>Popularity: { artist.popularity }</p>
                                            <img src={artist.images[2].url} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                                <h2>Top Tracks</h2>
                                <p>Your most listened to tracks of all time according to Spotify.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            { this.state.tracks.map((track, index) => (
                                <div className="col-md-4 text-center animate-box">
                                    <div className="staff-entry">
                                        <div className="desc">
                                            <h3>{ track.name }</h3>
                                            <span>{ index + 1 }</span>
                                            <p>Artist: { track.artists[0].name }</p>
                                            <p>Album: { track.album.name }</p>
                                            <p>Popularity: { track.popularity }</p>
                                            <img src={track.album.images[2].url} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Home
