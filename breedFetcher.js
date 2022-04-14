const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = { url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}` };

  request(url, function(error, response, body) {
    if (error) return callback(error, null);
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(null, 'Breed not found');
    }
    // console.log(response.statusCode);
    return callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription,
};