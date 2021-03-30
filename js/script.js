/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes =[

  {
    quote: "You miss 100% of the shots you dont take.",
    source: "Wayne Gretzkye",
    year: 1983
  },
  {
    quote: "Be yourself; everyone else is taken.",
    source:"Oscar Wilde"
  },
  {
    quote: "Just keep swimming.",
    source: "Dorey",
    citation: "Finding nemo",
    year: 2003
  },
  {
    quote: "Why so serious?",
    source: "The Joker",
    citation: "The Dark Knight",
    yeat: 2008
  },
  {
    quote: "May the force be with you.",
    source: "Obi Wan Kanobi",
    citation: "Star Wars",
    year: 1977
  },
  {
    quote: "You only loose what you cling to",
    source: "Buddah",
  }
]

console.log(quotes)

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){};


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);