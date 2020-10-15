import React from 'react'

import Header from './Header'
import Navbar from './Navbar'

class About extends React.Component {
    render() {
        return (
            <div id="page">
                <Navbar active="about" />
                <Header>
                    YOUR PERSONALIZED PLAYLIST
                    <h4> Enter profile pic </h4>
                </Header>
                <div className="colorlib-services">
                    <div className="container">
                        <div className="col-md-6 animate-box">
                            <div className="overlay">
                            </div>
                            <a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=vqqt5p0q-eU',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a> 
                            <div className="display-t text-center">
                                <div className="display-tc">
                                    <div className="container">
                                        <div className="col-md-12 col-md-offset-0">
                                            <div className="animate-box">
                                                <article>
                                                    <h3>Click here to receive your personalized playlist. </h3>
                                                    <p>Based on your most listened to tracks and top songs from your favorite artists.</p>
                                                    <p><a href="gallery.html" className="btn btn-primary btn-lg btn-custom">Create Playlist</a></p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="colorlib-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <article>
                                    <h2>This Playlist's Mood:</h2>
                                    <p>Give audio descriptions for the tracks on the playlist</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
