"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Leah Harris
      Date:  04/26/24

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  //declare codeValue and countryValue
  let codeValue = postalCode.value;
  let countryValue = country.value;
  //Set to empty string
  place.value = "";
  region.value = "";
  //fetching API referencing countryValue and codeValue
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
  //parse response object
  .then(response => response.json())
  .then(json => {
    //referencing place name and state abbreviation with bracket notation
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"];
  })
  //error if response is rejected
  .catch(error => {
    console.log(error);
  })
}



