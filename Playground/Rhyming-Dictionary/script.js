"use strict";

// Getting elements:

const rhymeKeyTitle = document.querySelector(".rhymeKeyTitle");

let rhyme = "Search";

// Functions:
const myFun = function () {
  rhyme = document.querySelector("#rhymeKey").value;
  if (rhymeKeyTitle) {
    console.log(`https://api.datamuse.com/words?rel_rhy=${rhyme}&md=d`);
  }
};
