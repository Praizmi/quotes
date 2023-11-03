// the reason for the let here is to declare it so we can change the value in the getQuotes function and we cannot use const for it because if we use const we cannot change the value.
// let apiQuotes = [];

// show new quote
function newQuote(){
    // math floor is to know the largest number
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     }
//     catch(error) {
//         // Catch Error Here
//     }
// }

// On Load
// getQuotes();

newQuote();