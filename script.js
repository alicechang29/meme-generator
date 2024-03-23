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
  let memeItem = document.createElement("div");

  img.appendChild(memeItem);

  let image = new Image();
  image.width = 300;
  image.height = 200;
  image.src = img.src;

  console.log(image.src);

  memeItem.appendChild(image); //appending image child to memeItem parent


  // Create text nodes for title and description
  let titleTextNode = document.createTextNode(title);
  let descripTextNode = document.createTextNode(descrip);

  // Create paragraph elements for title and description
  let titlePara = document.createElement("p");
  titlePara.appendChild(titleTextNode);
  memeItem.appendChild(titlePara);

  let descripPara = document.createElement("p");
  descripPara.appendChild(descripTextNode);
  memeItem.appendChild(descripPara);


  memesContainer.appendChild(memeItem); //appending memeItem child to memesContainer parent

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

  imageURL = url.value;
  console.log("image URL", imageURL);


  memeTitle = document.querySelector("#memeTitle");
  memeDescription = document.querySelector("#memeDescription");

  generateMeme(imageURL, memeTitle, memeDescription);
})



