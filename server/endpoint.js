const router = require('express').Router()
const { readdirSync, statSync } = require('fs')
const { join } = require('path')
const junk = require('junk')

// gets all current directories in the current directory
const getDirs = path =>
    readdirSync(path)
    .filter( file => statSync(join(path, file)).isDirectory() )
    .filter( junk.not ) 
    .filter( file => {if(! /^\..*/.test(file)) return file })

// gets all files in the current directory
const getFiles = path =>
readdirSync(path)
.filter( file => !statSync(join(path, file)).isDirectory() ) 

router.use('/', (req, res) => {
    // console.log(req.body)
    if(req.body.type == 'GET_DATA') {
        var files = getFiles(req.body.url)
        var dirs = getDirs(req.body.url)
        res.send({
            files: files,
            dirs: dirs
        })
    } else {
        res.sendFile(req.body.url+`/${req.body.filename}`)
    }
})

module.exports = router