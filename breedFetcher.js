const request = require('request');
const arg = process.argv.slice(2);

const options = {
  method: 'GET',
  url: `https://api.thecatapi.com/v1/breeds/search?q=${arg}`,
  headers: { 'x-api-key': 'DEMO-API-KEY' }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found');
    return;
  }
  // console.log(response.statusCode);
  console.log(data[0].description);
});

