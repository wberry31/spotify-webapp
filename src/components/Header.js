import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="home" class="video-hero" data-section="home">
                <div class="overlay" />
                <div class="display-t display-t2 text-center">
                    <div class="display-tc display-tc2">
                        <div className="container">
                            <div className="col-md-12 col-md-offset-0">
                                <div className="animate-box">
                                    <h2>{this.props.children}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
