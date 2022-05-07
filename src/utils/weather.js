var url;
const axios = require("axios");
const ACCESS_KEY = "6af490a05c95dbb5a24bd5ef32ddaa80";
const ACCESS_TOKEN =
  "pk.eyJ1IjoiZXNjYWxvcGEiLCJhIjoiY2t6OXE4bGNlMDRnajJvczZza2ZndzYwNSJ9.AygfK_UK3FCvFULBktptGA";

async function get(city, url, access_key_token) {
  var response;
  try {
    response = await axios.get(url, {
      params: {
        access_key: access_key_token,
        access_token: access_key_token,
        query: city,
      },
    });
  } catch (e) {
    console.log(e);
  } finally {
    return response;
  }
}

//Map
function getMap(city) {
  url = "http://api.weatherstack.com/current";
  return get(city, url, ACCESS_KEY);
}

//Geo
function getGeo(city) {
  url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`;
  return get(city, url, ACCESS_TOKEN);
}

module.exports = { getMap, getGeo };
