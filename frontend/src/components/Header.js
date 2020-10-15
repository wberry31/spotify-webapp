import React from 'react'
import ReactPlayer from "react-player"

class Header extends React.Component {
    // constructor (props) {
    //     super(props);

    //     this.state = {
    //         videoURL: 'https://www.youtube.com/watch?v=OtOPF8nowpY'
    //     }
    // }

    render() {
        return (
            <section id="home" className="video-hero" data-section="home">
                <div className="overlay" />
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=OtOPF8nowpY" playing={true} loop={true} volume={0} width="100vh" height="100vh" zindex={-1}
                    />
                    <div className="display-t display-t2 text-center">
                        <div className="display-tc display-tc2">
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
