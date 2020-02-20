const express = require('express')
const io = require('socket.io')
const body_parser = require('body-parser')
const cors = require('cors')
const { join } = require('path')
const { readdirSync, statSync } = require('fs')
const app = new express()
const port = 8080

// middleware
app.use(cors())
app.use(body_parser.json())

// gets all current directories in the current directory
const getDirs = path =>
    readdirSync(path)
    .filter( file => statSync(join(path, file)).isDirectory() ) 

// gets all files in the current directory
const getFiles = path =>
readdirSync(path)
.filter( file => !statSync(join(path, file)).isDirectory() ) 

// // servers folders from the current directory
// getDirs(__dirname).map( currDir => {
//     app.use(`/${currDir}`,express.static(`${currDir}`))
// })
app.use('/public', express.static('public'))


// // serves files from current directory
// app.use('/', express.static(__dirname + '/'))

// serves files from other directories
const endpoints = require('./endpoint.js')
app.use('/', endpoints)


// listening on port
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})