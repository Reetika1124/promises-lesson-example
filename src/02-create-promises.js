const crypto = require('crypto');
const dns = require('dns')


// transform `crypto.randomBytes` to a promise, and print out the output, and the errors
crypto.randomBytes(256, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.toString('hex')}`);
});



// convert `dns.lookup` to a promise, and print out the output, and the errors
const options = {
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('example.com', options, (err, addresses) => {
  if(err) console.log(err)

  console.log('addresses: %j', addresses);
})