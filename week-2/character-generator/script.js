/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Leah Harris
  Date: 03/27/2024
  Filename: script.js for character generator
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function (){
      return name;
    },
    getGender: function(){
      return gender;
    },
    getClass: function(){
      return characterClass;
    }
  };
}


document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let name = document.getElementById("heroName").value;

  let gender = document.getElementById("heroGender").value;

  let characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
  const newCharacter = new createCharacter(name, gender, characterClass);

  // TODO: Display character information
  document.getElementById("characterOutput").innerHTML =
  `${newCharacter.getName()}`+ "-  " + `${newCharacter.getGender()}` + ":  " + `${newCharacter.getClass()}`;

});
