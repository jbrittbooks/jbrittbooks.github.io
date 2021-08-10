/*!
* Start Bootstrap - Blog Home v5.0.2 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

console.log("Javascript power on");
//create our variables
let bookImage = document.getElementById("trilogy-book");
let bookPoem = document.getElementById("trilogy-poem");
let bookHeader = document.getElementById("trilogy-header")
let bookBtnOne = document.getElementById("book-1");
let bookBtnTwo = document.getElementById("book-2");
let bookBtnThree = document.getElementById("book-3");

let bookHeaderOptions = ["Closed Doors", "Love You Can Feel", "Big Eraser"]
let bookPoemOptions = [
  "Sometimes doors are closed<br>To save us anguish and precious time<br>And give God room to swing open<br>The doors He has in mind.<br><br>I've learned<br>In this lifetime <br>Don't push on closed doors<br>Too hard<br>The entryway may be blocked<br>By the protective arms of God.",
  "Sometimes I don't know this person<br>You're changing me into<br>Flaming Beauty<br>From inside out<br>For all to see it's you<br><br>Strangers come up to me<br>With a smile on their face",
  "Lord,<br>You are so tender<br>With Your creation<br>You watch us<br>Fumble, and falter, and fall<br>Instead of rejecting us<br>For our flaws<br>You died<br>To save us all<br><br>You could have used<br>Your big eraser<br>Started over from scratch<br>Instead, you rose on Easter morn<br>So to heaven You can take us back"
]

//create an image change

const changeImage = function(string) {
  console.log(`this is our change image target ${string}`)
  if (string === "bookOne") {
    bookImage.src="assets/resize/poems-from-the-fast_250x380.JPG";
  };
  if (string === "bookTwo") {
    bookImage.src="assets/resize/reunion_250x380.JPG";
  };
  if (string === "bookThree") {
    bookImage.src="assets/resize/third-ear_250x380.JPG";
  };
}

// create a body text change

const changeText = function(string) {
  if(string === "bookOne") {
    bookHeader.innerHTML = bookHeaderOptions[0];
    bookPoem.innerHTML = bookPoemOptions [0];
  }
  if(string === "bookTwo") {
    bookHeader.innerHTML = bookHeaderOptions[1];
    bookPoem.innerHTML = bookPoemOptions [1];
  }
  if(string === "bookThree") {
    bookHeader.innerHTML = bookHeaderOptions[2];
    bookPoem.innerHTML = bookPoemOptions [2];
  }
}
// create a button text change

const changeButtons = function(string) {

}

// call all the functions if one book is changed

const bookSelector = function(e){
  let ourTarget = e.target
  if (ourTarget === bookBtnOne) {
    changeImage("bookOne");
    changeText("bookOne");
    changeButtons("bookOne");
  };

  if (ourTarget=== bookBtnTwo) {
    changeImage("bookTwo");
    changeText("bookTwo")
    changeButtons("bookTwo")
  };

  if (ourTarget === bookBtnThree) {
    changeImage("bookThree")
    changeText("bookThree")
    changeButtons("bookThree")
  };
  return;
}


// Event listeners
bookBtnOne.addEventListener("click", bookSelector)
bookBtnTwo.addEventListener("click", bookSelector)
bookBtnThree.addEventListener("click", bookSelector)