// array of objects to store quote related information
var quotes = [{
    quote: "Every man's life ends the same way, it is only the details of how he lived and how he died that distinguish one man from another.",
    source: "Ernest Hemingway",
    citation: "",
    year: ""
  },
  {
    quote: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    source: "Nikola Tesla",
    citation: "",
    year: ""
  },
  {
    quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    source: "Martin Luther King Jr.",
    citation: "",
    year: "1968"
  },
  {
    quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
    source: "Mahatma Gandhi",
    citation: "",
    year: ""
  },
  {
    quote: "Intelligence without ambition is a bird without winds.",
    source: "Salvador Dalí",
    citation: "",
    year: ""
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    source: "Albert Einstein",
    citation: "Wikipedia",
    year: ""
  },
];

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
  randomQuotes = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuotes];
}

// setTimeout function will automatically run after 5 seconds
function refreshQuote() {
  setTimeout("window.open(self.location, '_self');", 5000);
  printQuote();
}

function printQuote() {
  // creates the singleQuote variable and sets the value to the random object that is returned when the getRandomQuote function is called
  // creates the html variable and uses the singleQuote variable along with key values to build a string
  let singleQuote = getRandomQuote();

  let html = "<p class='quote'>" + singleQuote.quote + "</p>";
  html += "<p class = 'source' >" + singleQuote.source;
  // a condition to checking if citation/year are exists
  if (singleQuote.citation) {
    html += "<span class = 'citation'>" + singleQuote.citation + "</span>";
  } else {
    html += '';
  }
  if (singleQuote.year) {
    html += "<span class = 'year'>" + singleQuote.year + "</span>" + "</p>";
  } else {
    html += "</p>";
  }

  // assignes html variable to the div with the quote-box id
  document.getElementById('quote-box').innerHTML = html;
}

// runs the refreshQuote function for reload quotes
refreshQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);