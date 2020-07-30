const request = require("request");

const args = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?name=${args[0]}`,
  (err, response, body) => {
    const data = JSON.parse(body);
    if (err) {
      console.log("Error: ", err);
      return;
    }
    if (response.statusCode !== 200) {
      console.log(`StatusCode: ${response} ${response.statusCode}`);
      return;
    }
    if (data[0] === undefined) {
      console.log("Please enter valid breed");
      return;
    }
    console.log(data[0].description);
  }
);
