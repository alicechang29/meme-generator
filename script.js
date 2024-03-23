/*
- Need to listen for submit events
- Once submit happens:
-- if image URL is populated, pull the image
-- else, use default image
-- append the title and description onto the image

structure of meme:
within the memes-container (rows, wrap )
meme-item
- image
-- title
-- description
- delete button

listen for delete button
- have a function that deletes the div

test image: https://tinyurl.com/y39p455z
*/

/*
==========
DOM Setup
==========
*/

const generateMemeButton = document.querySelector("#generateMemeButton");
const memesContainer = document.querySelector(".memes-container");
const url = document.querySelector("url");


/*
================
Meme Generator
================
*/

let imageURL;
let memeTitle;
let memeDescription;

function generateMeme(img, title, descrip) {
  let memeItem = document.createElement("div"); //overall container for the a single meme, contains the image
  memeItem.classList.add("meme-item");

  //the image
  let image = new Image();
  image.src = img;

  memeItem.appendChild(image);


  //creating div for the text elements
  let memeTitleContainer = document.createElement("div");
  memeTitleContainer.classList.add("meme-title-overlay-text");

  //meme title
  let titleText = document.createElement("p");
  titleText.textContent = title;
  titleText.classList.add("title-text");

  memeTitleContainer.appendChild(titleText);


  //meme description

  let memeDescripContainer = document.createElement("div");
  memeDescripContainer.classList.add("meme-descrip-overlay-text");

  let descripText = document.createElement("p");
  descripText.textContent = descrip;
  descripText.classList.add("descrip-text");

  memeDescripContainer.appendChild(descripText);


  //appending memeItem child to memesContainer parent
  memeItem.appendChild(memeTitleContainer);
  memeItem.appendChild(memeDescripContainer);
  memesContainer.appendChild(memeItem);

}

/*
================
Event Listeners
================
*/

generateMemeButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("generating meme");

  //update the variables for the meme

  //https://www.geeksforgeeks.org/html-dom-input-url-object/

  //this is wrong. call by id?
  imageURL = document.getElementById("imageURL").value;

  memeTitle = document.getElementById("memeTitle").value;
  memeDescription = document.getElementById("memeDescription").value;

  generateMeme(imageURL, memeTitle, memeDescription);
})



