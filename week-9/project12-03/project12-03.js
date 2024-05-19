"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Leah Harris
      Date:    05/18/24

      Filename: project12-03.js
*/

$( () => {

  //apply click method to article > h2 selector

  $("article > h2").click(e => {
    //Declare variables with jQuery
    let heading = $(e.target);
    let list = $(heading).next();
    let headingImage = $(heading).children("img");
    //Apply slideToggle method to list
    $(list).slideToggle(500);
    //change symbol based on the source attribute
    if($(headingImage).attr("src") === "plus.png") {
      $(headingImage).attr("src", "minus.png");
    } else {
      $(headingImage).attr("src", "plus.png");
    }
  });
});


