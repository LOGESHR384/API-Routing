const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Home Page')
})

app.get('/about', (response, request) => {
  response.send('About Page')
})

module.exports = app
