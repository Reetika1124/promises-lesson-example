const dns = require('dns')
const { promisify } = require('util')

const lookup = promisify(dns.lookup)

// create a function that takes a url, and it returns a promise
// that will resolve with the IP address

function getIPv4(url){

}

getIPv4('google.com')