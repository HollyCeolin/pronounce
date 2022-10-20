const express = require('express')
const cors = require ('cors')
const path = require('path')

const app = express()

let Rollbar = require("rollbar");
let rollbar = new Rollbar({
  accessToken: 'c26cbf32fdd14f40979c3d8d2cab31b4',
  captureUncaught: true,
  captureUnhandledRejections: true
});


rollbar.log("Hello world!");


app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {getHTML, getCSS, getJS} = require('./controller')
app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

const port = process.env.PORT || 4000

app.listen(port, console.log(`Server running on ${port}`))

