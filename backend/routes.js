const router = require('express').Router();
const axios = require('axios');
const qs = require('qs');
const jwt = require('jsonwebtoken');

const basic_auth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')

router.post('/link-spotify', (req, res) => {
    axios.post('https://accounts.spotify.com/api/token', qs.stringify({
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: 'http://localhost:3000/spotify-callback'
    }) ,{
        headers: {
            'Authorization': `Basic ${basic_auth}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    }).then(response => {
        res.json({
            token: jwt.sign({
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token,
                expires_in: response.data.expires_in
            }, process.env.SECRET)
        })
    })
});

module.exports = router;
