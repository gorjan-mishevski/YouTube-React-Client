const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

require('./YouTubeAPI/routes')(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
