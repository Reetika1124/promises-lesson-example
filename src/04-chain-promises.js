const fs = require('fs')
const crypto = require('crypto')
const dns = require('dns')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const randomBytes = promisify(crypto.randomBytes)
const lookup = promisify(dns.lookup)


// get some random bytes and write them to a file

const randomBytesOutputFile = path.join(__dirname, '../files/randomBytes.txt')


// read the contents of `urlInputFile`, 
// transform urls to ip address
// save to `ipAddressOutputFile`

const urlInputFile = path.join(__dirname, '../files/urls.txt')
const ipAddressOutputFile = path.join(__dirname, '../files/ipaddresses.txt')

const arrayOfUrlToPromise = (array) => array.map(url => lookup(url, { family: 4, hints: dns.ADDRCONFIG | dns.V4MAPPED }))
