const router = require('express').Router()
const { readdirSync, statSync } = require('fs')
const { join } = require('path')

// gets all current directories in the current directory
const getDirs = path =>
    readdirSync(path)
    .filter( file => statSync(join(path, file)).isDirectory() ) 

// gets all files in the current directory
const getFiles = path =>
readdirSync(path)
.filter( file => !statSync(join(path, file)).isDirectory() ) 


router.use('/', (req, res) => {
    console.log(req.url)
    var files = getFiles(__dirname+req.url)
    var dirs = getDirs(__dirname+req.url)
    console.log(files, dirs)
    // console.log("hello")
    res.send({
        files: files,
        dirs: dirs
    })
})

module.exports = router