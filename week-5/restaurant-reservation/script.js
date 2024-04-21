/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Leah Harris
  Date: 04/18/24
  Filename: Script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {
    "tableNumber": 1,
    "capacity": 2,
    "isReserved": false,
  },
  {
    "tableNumber": 2,
    "capacity": 4,
    "isReserved": false,
  },
  {
    "tableNumber": 3,
    "capacity": 4,
    "isReserved": false,
  },
  {
    "tableNumber": 4,
    "capacity": 6,
    "isReserved": false,
  }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  //check the value of the isReserved property
  if (tables[tableNumber].isReserved === false){
    //change the value to true
    tables[tableNumber].isReserved = true;
    setTimeout(() => {
      //callback with sucess message
      callback("Table Reserved");
      //specfied time for setTimeout
    }, time);
  } else {
    //Call back for unavailable table
    callback("Table Unavailable");
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();
    //Create the function to callback
    function displayMessage(message) {
      //display message on webpage
      document.getElementById("message").innerText = message;
    }
    //retrieve the specified table number
    const tableNum = document.getElementById("tableNumber").value;

    //Call reserveTable function with specified table number, displayMessage function
    //and time as actual parameters
    reserveTable(tableNum, displayMessage, 3000);
  });
