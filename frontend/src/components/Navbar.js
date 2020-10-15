import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div id="colorlib-logo"><Link to="/">My App</Link></div>
                            </div>
                            <div className="col-md-10 text-right menu-1">
                                <ul>
                                    <li className={ this.props.active === 'home' ? 'active' : '' }><Link to="/">Home</Link></li>
                                    <li className={ this.props.active === 'about' ? 'active' : '' }><Link to="/about">About</Link></li>
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
