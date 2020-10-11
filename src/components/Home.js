import React from 'react'

import Header from './Header'
import Navbar from './Navbar'

class Home extends React.Component {
    render() {
        return (
            <div id="page">
                <Navbar active="home" />
                <Header>
                    HEADER
                </Header>
                <div class="colorlib-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 animate-box">
                                <article>
                                    <h2>Building the Mention Sales Application on Unapp</h2>
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

export default Home
