const fs = require('fs')
const path = require('path')
const { promisify } = require('util');

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const fileToRead = path.join(__dirname, './01-using-promises.js')

// read a file from the file system, and print out the contents, or the error


// write a string to the file system