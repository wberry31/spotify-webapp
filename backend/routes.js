const router = require('express').Router();
const axios = require('axios');
const qs = require('qs');
const jwt = require('jsonwebtoken');

const auth = require('./auth');

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
    }).then(async (response) => {
        const result = await req.app.locals.db('users').insert({
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
            expiration: new Date(new Date() + parseInt(response.data.expires_in)).toISOString()
        });

        res.json({
            token: jwt.sign({
                id: result[0]
            }, process.env.SECRET)
        });
    })
});

router.get('/top-artist', auth, async (req, res) => {
    const user = await req.app.locals.db('users').where({ id: req.payload.id })
    const access_token = user[0].access_token

    axios.get('https://api.spotify.com/v1/me/top/artists', {
        params: {
            limit: 9
        },
        headers: {
            'Authorization': `Bearer ${access_token}`
          }
    }).then(apiResponse => {
        res.json({
            artists: apiResponse.data.items
        })
    })
})

router.get('/top-track', auth, async (req, res) => {
    const user = await req.app.locals.db('users').where({ id: req.payload.id })
    const access_token = user[0].access_token

    axios.get('https://api.spotify.com/v1/me/top/tracks', {
        params: {
            limit: 9
        },
        headers: {
            'Authorization': `Bearer ${access_token}`
          }
    }).then(apiResponse => {
        res.json({
            tracks: apiResponse.data.items
        })
    })
})



module.exports = router;
