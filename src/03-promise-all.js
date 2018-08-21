const dns = require('dns')
const { promisify } = require('util')
const lookup = promisify(dns.lookup)

const urls = ['example.com','google.com','yahoo.com']

// create a function to convert array of URL strings to array of promisses
// lookup(url, { family: 4, hints: dns.ADDRCONFIG | dns.V4MAPPED })
function arrayOfUrlToPromises(array){

}


// Use Promise.all to run an array of promises, print out the output and errors