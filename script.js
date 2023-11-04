const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// the reason for the let here is to declare it so we can change the value in the getQuotes function and we cannot use const for it because if we use const we cannot change the value.
let apiQuotes = [];

// show new quote
function newQuote(){
    // math floor is to know the largest number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field is blank
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // check quote length to determine its style
    if (quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }
    catch(error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();

// newQuote();