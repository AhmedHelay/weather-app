const axios = require("axios");
const ACCESS_KEY = "6af490a05c95dbb5a24bd5ef32ddaa80";

async function get(city) {
  var response;
  try {
    response = await axios.get("http://api.weatherstack.com/current", {
      params: {
        access_key: ACCESS_KEY,
        query: city,
      },
    });
  } catch (e) {
    console.log(e);
  } finally {
    return response;
  }
}

module.exports = { get };
