import React from 'react'

import Header from './Header'
import Navbar from './Navbar'

import api from '../lib/api'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topArtist: null
        }
    }

    componentDidMount() {
        api.get('/top-artist').then(response => {
            this.setState({
                topArtist: response.data.topArtist
            })
        })
    }

    render() {
        return (
            <div id="page">
                <Navbar active="home" />
                <Header>
                    YOUR TOP ARTISTS AND TRACKS
                    <h4> Enter profile pic </h4>
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
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>{ this.state.topArtist }</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>2</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>3</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>4</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>5</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>6</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>7</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>8</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Artist</h3>
                                        <span>9</span>
                                        <p>Follower Count:</p>
                                        <p>Popularity:</p>
                                    </div>
                                </div>
                            </div>
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
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>1</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>2</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>3</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>4</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>5</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>6</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>7</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>8</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="staff-entry">
                                    <div className="desc">
                                        <h3>Track</h3>
                                        <span>9</span>
                                        <p>Artist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
