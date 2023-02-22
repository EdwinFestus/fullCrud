const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`<h1>This is all the users available... </h1>`)
})

router.get('/new', (req, res) => {
    res.send(`<h1>User's Dashboard </h1>`)
})

module.exports = router