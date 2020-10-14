import React from 'react'
import { Redirect } from 'react-router-dom'

import api, { setAPIToken } from '../lib/api'

class SpotifyCallback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')

        api.post('/link-spotify', {
            code: code
        }).then((response) => {
            setAPIToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            this.setState({loggedIn: true});
        });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }

        return null
    }
}

export default SpotifyCallback
