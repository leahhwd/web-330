/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Leah Harris
  Date: 05-29-2024
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  { title: "Kung Fu Panda 4",
    director: "Mike Mitchell",
    year: "2024",
    synopsis: "Po must train a new warrior when he's chosen\
    to become the new spiritual leader of the Valley of Peace."
  },
  { title: "WONKA",
    director: "Paul King",
    year: "2023",
    synopsis: "Armed with nothing but a hatful of dreams, young\
    young chocolatier, Willy Wonka, manages to change the world\
    one delectable bite at a time."
  },
  { title: "Robots",
    director: "Chris Wedge",
    year: "2005",
    synopsis: "In a world of sentient robots, striving young inventor,\
    Rodney Copperbottom, wants to work for the avuncular Bigweld, whose\
    Bigweld Industries makes spare robot parts."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //locate the correct movie object
      let movie = movies.find((movie) => movie.title === title);
      if(movie) {
        //if successful
        resolve(movie);
      } else {
        //reject for failures
        reject("Movie not found.")
      }
      //simulate time
    }, 3000);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  //prevent default behavior
  event.preventDefault();
 //async/await function
  async function displayMovie() {
    //find value of search
    let title = document.getElementById("title-input").value;
    try {
      let movie = await fetchMovie(title);
      //display information
      document.getElementById("movie-title").textContent = movie.title;
      document.getElementById("movie-director").textContent = movie.director;
      document.getElementById("movie-year").textContent = movie.year;
      document.getElementById("movie-synopsis").textContent = movie.synopsis;
    } catch (error) {
      //catch errors
      console.log("An error occurred:", error);
    }
  }
  //call function
  displayMovie();

});