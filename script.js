/*
- add a delete button

- listen for delete button
- have a function that deletes the div

Clicks:
- listen for the enter button on keyboard for submit

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


  //add delete meme button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete-button");

  //delete button event listener
  deleteButton.addEventListener("click", function () {
    memesContainer.removeChild(memeItem);
  });


  //appending memeItem child to memesContainer parent
  memeItem.appendChild(deleteButton);
  memeItem.appendChild(memeTitleContainer);
  memeItem.appendChild(memeDescripContainer);
  memesContainer.appendChild(memeItem);
}


function assignValues() {
  imageURL = document.getElementById("imageURL").value;

  memeTitle = document.getElementById("memeTitle").value;
  memeDescription = document.getElementById("memeDescription").value;

  generateMeme(imageURL, memeTitle, memeDescription);
}


/*
================
Event Listeners
================
*/

function handleClick() {
  event.preventDefault();
  assignValues();
}

function handleKeyDown(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    assignValues();
  }
}

generateMemeButton.addEventListener("click", handleClick);

generateMemeButton.addEventListener("keydown", handleKeyDown);
