var fs = require('fs');
var Spritesmith = require('spritesmith');

Spritesmith.run({
  src: [
    __dirname + '../assets/info.jpg',
    __dirname + '../assets/cart.jpg', 
  ],
  algorithm: 'alt-diagonal'
  }, function handleResult (err, result) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }
  // Output the image
  fs.writeFileSync(__dirname + '/alt-diagonal.png', result.image);
  result.coordinates, result.properties; // Coordinates and properties
});
