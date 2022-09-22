// Select all elements of interest.
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tweetBtn = document.querySelector("#tweet-btn");
const quoteBtn = document.querySelector("#quote-btn");

// Bind quoteBtn to an add event listener.
quoteBtn.addEventListener("click", generateQuote);

// Initialize variables
let url;

// Define generateQuote Event handler
async function generateQuote() {
  try {
    //fetch Api
    url = "https://type.fit/api/quotes";
    let res = await fetch(url);
    let data = await res.json();
    //Generate a random number.
    const randomNumber = Math.floor(Math.random() * data.length);
    quote.innerText = data[randomNumber].text;
    if (data[randomNumber].author === null) {
      author.childNodes[1].textContent = "Anonymous";
    } else {
      author.childNodes[1].textContent = data[randomNumber].author;
    }
  } catch (err) {
    console.log(`error${err}`);
  }
}

//Tweet button
