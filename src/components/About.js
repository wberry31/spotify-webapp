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
                <div class="colorlib-services">
                    <div className="container">
                        <div className="col-md-6 animate-box">
                            <div class="overlay">
                            </div>
                            <a class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=vqqt5p0q-eU',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a> 
                            <div class="display-t text-center">
                                <div class="display-tc">
                                    <div class="container">
                                        <div class="col-md-12 col-md-offset-0">
                                            <div class="animate-box">
                                                <article>
                                                    <h3>Click here to receive your personalized playlist. </h3>
                                                    <p>Based on your most listened to tracks and top songs from your favorite artists.</p>
                                                    <p><a href="gallery.html" class="btn btn-primary btn-lg btn-custom">Create Playlist</a></p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="colorlib-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <article>
                                    <h2>This Playlist's Mood:</h2>
                                    <p className="admin"><span>May 12, 2018</span></p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                    <p><span className="author">by Dave Miller</span></p>
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
