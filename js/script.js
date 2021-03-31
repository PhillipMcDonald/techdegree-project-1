/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * contains 6 objects with 2 - 4 property values 
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
    
  },
  {
    quote: "Why so serious?",
    source: "The Joker",
    citation: "The Dark Knight",
    year: 2008
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


/***
 * `getRandomQuote` function 
 * uses Math.random() to choose a number between 0 and the number of object present in the array
 * returns the random object
***/
function getRandomQuote(){
const randomNumber= Math.floor(Math.random()*quotes.length)
return quotes[randomNumber]

};

/***
 * `printQuote` function, containing 2 variables, 
 * One named objectNumber that uses the getRandomQuote function to retrive a randm object from the array
 * The second is named htmlString and holds the the information that will always be included in the htmlString
***/

function printQuote(){
let objectNumber = getRandomQuote()
let htmlString= `<p class="quote"> ${objectNumber.quote} </p>` +
`<p class="source"> ${objectNumber.source}`

/* if statment that checks if object contains a year property  but No citation property. 
if so it adds the year property to thr string*/

  if (objectNumber.citation === undefined & objectNumber.year != undefined){
  htmlString+= `<span class="citation"> ${objectNumber.year} </span></p>`}
  
/* this is statment checks if the citation property is present but not the year property 
// if so its adds the citation property to the string 
 finally if both properties are present, it adds both properties to the string */

  if (objectNumber.citation != undefined & objectNumber.year === undefined){
    htmlString+= `<span class="citation"> ${objectNumber.citation} </span></p>`
  } else if (objectNumber.citation != undefined & objectNumber.year != undefined){
    htmlString += `<span class="citation"> ${objectNumber.citation} </span> <span class="citation"> ${objectNumber.year} </span> </p> `
  }



return document.getElementById('quote-box').innerHTML = htmlString; 

};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


