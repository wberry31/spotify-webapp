import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <nav class="colorlib-nav" role="navigation">
                <div class="top-menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2">
                                <div id="colorlib-logo"><Link to="/">My App</Link></div>
                            </div>
                            <div class="col-md-10 text-right menu-1">
                                <ul>
                                    <li class={ this.props.active === 'home' ? 'active' : '' }><Link to="/">Home</Link></li>
                                    <li class={ this.props.active === 'about' ? 'active' : '' }><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
