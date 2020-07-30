const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`,
    (err, response, body) => {
      const data = JSON.parse(body);
      if (err) {
        return callback(`Error: ${err}`, null);
      }
      if (response.statusCode !== 200) {
        return callback(`StatusCode: ${response} ${response.statusCode}`, null);
      }
      if (data[0] === undefined) {
        return callback("Please enter valid breed", null);
      }
      return callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
