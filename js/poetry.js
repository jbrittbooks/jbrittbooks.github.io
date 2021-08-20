//trilogy variables
let trilogyBookImage = document.getElementById("trilogy-book");
let trilogyBookPoem = document.getElementById("trilogy-poem");
let trilogyBookHeader = document.getElementById("trilogy-header")

//trilogy buttons
let trilogyBookBtnOne = document.getElementById("trilogy-book-1");
let trilogyBookBtnTwo = document.getElementById("trilogy-book-2");
let trilogyBookBtnThree = document.getElementById("trilogy-book-3");
let trilogyBuyBtn = document.getElementById("trilogyBuyBtn");
let trilogyShareBtn = document.getElementById("trilogyShareBtn");
let trilogyPreviewBtn = document.getElementById("trilogyPreviewBtn");

//trilogy text option
let trilogyBookHeaderOptions = ["Closed Doors", "Love You Can Feel", "Sometimes You Sing Alone"];
let trilogyBookPoemOptions = [
  "<br>Sometimes doors are closed<br>To save us anguish and precious time<br>And give God room to swing open<br>The doors He has in mind.<br><br>I've learned<br>In this lifetime <br>Don't push on closed doors<br>Too hard<br>The entryway may be blocked<br>By the protective arms of God.",
  "Did you ever<br>Feel love<br>Love you could share <br>Bubbling all over<br>Landing here and there?<br><br>There once was a time<br>I'd gotten kind of flat <br>The Lord came along <br>And said, \"That's enough of that!<br><br>The love I have for you <br>I want you to<br>Experience <br>Delve into my joy<br>Find your deliverance.\"<br><br>Well, I took Him at His word <br>And dared to enter in <br>Love so sweet<br>It's tasty<br>I found in my Good Friend!",
  "Lone nightingale<br>In a pear tree<br>Moon pulls back the clouds<br>Strains to see. <br><br>The golden throat<br>On the beautiful bird<br>Chirping and warbling<br>A pleasing song to be heard.<br><br>Where is your partner<br>Brave little one<br>As your heart lifts up to heaven<br>Your song to the son?<br><br> Sometimes your companions<br>Sing sad songs<br>Sometimes like the nightingale<br>You're left to sing alone.<br><br> But don't you dare give up<br>Hang your harp upon a tree<br>Keep singing Zion's songs<br>Until we all get on key."
];

//Trilogy image change
const trilogyChangeImage = function(string) {
  if (string === "bookOne") {
    trilogyBookImage.src="/assets/resize/poems-from-the-fast_250x380.JPG";
  };
  if (string === "bookTwo") {
    trilogyBookImage.src="/assets/resize/reunion_250x380.JPG";
  };
  if (string === "bookThree") {
    trilogyBookImage.src="/assets/resize/third-ear_250x380.JPG";
  };
};


// create a body text change
const trilogyChangeText = function(string) {
  if(string === "bookOne") {
    trilogyBookHeader.innerHTML = trilogyBookHeaderOptions[0];
    trilogyBookPoem.innerHTML = trilogyBookPoemOptions [0];
    trilogyBookPoem.style.fontSize = "1rem"
  };
  if(string === "bookTwo") {
    trilogyBookHeader.innerHTML = trilogyBookHeaderOptions[1];
    trilogyBookPoem.innerHTML = trilogyBookPoemOptions [1];
    trilogyBookPoem.style.fontSize = ".85rem"
  };
  if(string === "bookThree") {
    trilogyBookHeader.innerHTML = trilogyBookHeaderOptions[2];
    trilogyBookPoem.innerHTML = trilogyBookPoemOptions[2]
    trilogyBookPoem.style.fontSize = ".75rem"
  };
};

//trilogy create a button text change
const trilogyChangeButtons = function(string) {
  if(string === "bookOne") {
    trilogyBuyBtn.href = "https://www.amazon.com/Poems-Fast-Trilogy-Book-One-ebook/dp/B085ZL66HH/ref=sr_1_4?dchild=1&keywords=poems+from+the+fast&qid=1628694903&s=digital-text&sr=1-4";
    trilogyShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A//www.amazon.com/Poems-Fast-Trilogy-Book-One-ebook/dp/B085ZL66HH/ref=sr_1_4?dchild=1%26keywords=poems%2Bfrom%2Bthe%2Bfast%26qid=1628694903%26s=digital-text%26sr=1-4";
    trilogyPreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B085ZL66HH&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_F69EBNYVCM5MXKXSMVP9";
  };
  if(string === "bookTwo") {
    trilogyBuyBtn.href = "https://www.amazon.com/Reunion-Trilogy-Book-Jeanetta-Britt-ebook/dp/B0861F3PYP/ref=sr_1_16?crid=2CHW1Z37GHDT1&dchild=1&keywords=jeanetta+britt&qid=1628694209&sprefix=jeanetta+britt%2Caps%2C164&sr=8-16";
    trilogyShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A//www.amazon.com/Reunion-Trilogy-Book-Jeanetta-Britt-ebook/dp/B0861F3PYP/ref=sr_1_16?crid=2CHW1Z37GHDT1%26dchild=1%26keywords=jeanetta%2Bbritt%26qid=1628694209%26sprefix=jeanetta%2Bbritt%252Caps%252C164%26sr=8-16";
    trilogyPreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B0861F3PYP&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_FP41218ZB556KQMBJE4X";
  };
  if(string === "bookThree") {
    trilogyBuyBtn.href = "https://www.amazon.com/Third-Ear-Triology-Jeanetta-Britt/dp/0971236321/ref=sr_1_12?crid=2CHW1Z37GHDT1&dchild=1&keywords=jeanetta+britt&qid=1628694209&sprefix=jeanetta+britt%2Caps%2C164&sr=8-12";
    trilogyShareBtn.href = "https://www.facebook.com/sharer/sharer.php?u=https%3A//www.amazon.com/Third-Ear-Triology-Jeanetta-Britt/dp/0971236321/ref=sr_1_12?crid=2CHW1Z37GHDT1%26dchild=1%26keywords=jeanetta%2Bbritt%26qid=1628694209%26sprefix=jeanetta%2Bbritt%252Caps%252C164%26sr=8-12";
    trilogyPreviewBtn.href = "https://read.amazon.com/kp/embed?asin=B0868VBQ8T&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_STYH5TXB0JDQPNDJYKKT";
  };
};

// call all the functions if one book is changed
const trilogyBookSelector = function(e){
  let ourTarget = e.target
  if (ourTarget === trilogyBookBtnOne) {
    trilogyChangeImage("bookOne");
    trilogyChangeText("bookOne");
    trilogyChangeButtons("bookOne");
  };

  if (ourTarget === trilogyBookBtnTwo) {
    trilogyChangeImage("bookTwo");
    trilogyChangeText("bookTwo")
    trilogyChangeButtons("bookTwo")
  };

  if (ourTarget === trilogyBookBtnThree) {
    trilogyChangeImage("bookThree")
    trilogyChangeText("bookThree")
    trilogyChangeButtons("bookThree")
  };
  return;
};

// trilogy event listeners
trilogyBookBtnOne.addEventListener("click", trilogyBookSelector);
trilogyBookBtnTwo.addEventListener("click", trilogyBookSelector);
trilogyBookBtnThree.addEventListener("click", trilogyBookSelector);

