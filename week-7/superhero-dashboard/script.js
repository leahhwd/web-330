/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Leah Harris
  Date: 05-03-24
  Filename: Script.js
*/

"use strict";

let heroes = [
  // TODO: Create superhero objects
  {
    name: 'aquaman',
    superpower: 'strength',
    weakness: 'dryness',
    city: 'Atlanta'
  },
  {
    name: 'batman',
    superpower: 'technology',
    weakness: 'bats',
    city: 'Gotham'
  },
  {
    name: 'spiderman',
    superpower: 'webs',
    weakness: 'family obligations',
    city: 'New York'
  }
];

function fetchHero1() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const aquaman = heroes.find(hero => hero.name === 'aquaman');
      if (aquaman) {
        resolve(aquaman);
      } else {
        reject('Not found');
      }
    }, 2000);
  });
}

function fetchHero2() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const batman = heroes.find(hero => hero.name === 'batman');
      if (batman) {
        resolve(batman);
      } else {
        reject('Not found');
      }
    }, 3000);
  });
}

function fetchHero3() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const spiderman = heroes.find(hero => hero.name === 'spiderman');
      if (spiderman) {
        resolve(spiderman);
      } else {
        reject('Not found');
      }
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage

Promise.allSettled ([fetchHero1(), fetchHero2(), fetchHero3()]).then((results) =>{
  results.forEach((result)=>{
    if(result.status === "fulfilled"){
      console.log(result.value);
    } else {
      console.log("An error occurred", result.reason);
    }
  });
});