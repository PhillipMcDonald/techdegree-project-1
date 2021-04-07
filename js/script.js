/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/*** 
 *  An array Named quotes
 * Contains 6 objects with 2 - 4 property values 
 * for extra credit I added a property named 'tag'
***/

const quotes =[

  {
    quote: "You miss 100% of the shots you dont take.",
    source: "Wayne Gretzky",
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
    source: "Obi-Wan Kenobi",
    citation: "Star Wars",
    year: 1977
  },
  {
    quote: "You only loose what you cling to",
    source: "Buddah",
    tag: "Spiritual"
  }
]


/***
 * The `getRandomQuote` function 
 * This function uses math.random to choose a random number that correspondes with an object within the array
 * returns the raandom object, containing the quote
***/


function getRandomQuote(){
  const randomNumber= Math.floor(Math.random()*quotes.length)
  return quotes[randomNumber]

};

/***
 * The `printQuote` function, containing 3 variables, 
 * One named objectNumber that calls the getRandomQuote function to retrive a randm object (quote) from the array
 * One named randomColor (for extra credit) that uses math.random to generate a number that then correspods to a color I used part of the code found at "https://css-tricks.com/snippets/javascript/random-hex-color/" to do this . 
 * I then used code snippet from "https://css-tricks.com/snippets/javascript/random-hex-color/" to acsses the body element and change the background color to the corresponding number everytime the print quote function runs.
 * The third is named htmlString and holds the the information that will always be included in the htmlString which is determinded by the if and else if statments below
***/




function printQuote(){
  // randomColor code snippet addapted from 'https://css-tricks.com/snippets/javascript/random-hex-color/' writen by Chris Coyier
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let objectNumber = getRandomQuote()
  let htmlString= `<p class="quote"> ${objectNumber.quote} </p>` +
  `<p class="source"> ${objectNumber.source}`



    if (objectNumber.citation === undefined & objectNumber.year != undefined & objectNumber.tag === undefined){
      htmlString+= `<span class="citation"> ${objectNumber.year} </span></p>`
    }

    if (objectNumber.citation === undefined & objectNumber.year === undefined & objectNumber.tag != undefined){
      htmlString+= `<span class="citation"> ${objectNumber.tag} </span></p>`
    }

    if (objectNumber.citation != undefined & objectNumber.year === undefined & objectNumber.tag === undefined){
      htmlString+= `<span class="citation"> ${objectNumber.citation} </span></p>`
    }

    if (objectNumber.citation === undefined & objectNumber.year != undefined & objectNumber.tag != undefined){
      htmlString += `<span class="citation"> ${objectNumber.year} </span> <span class="citation"> ${objectNumber.tag} </span> </p> `
    }

    if (objectNumber.citation != undefined & objectNumber.year === undefined & objectNumber.tag != undefined){
      htmlString += `<span class="citation"> ${objectNumber.citation} </span> <span class="citation"> ${objectNumber.tag} </span> </p> `
    }

      
    if (objectNumber.citation != undefined & objectNumber.year != undefined & objectNumber.tag === undefined){
      htmlString += `<span class="citation"> ${objectNumber.citation} </span> <span class="citation"> ${objectNumber.year} </span> </p> `


    } else if (objectNumber.citation != undefined & objectNumber.year != undefined & objectNumber.tag != undefined){
      htmlString += `<span class="citation"> ${objectNumber.citation} </span> <span class="citation"> ${objectNumber.year} </span> <span class="citation"> ${objectNumber.tag} </span> </p> `
    }

  // code snippet adapted from 'https://css-tricks.com/snippets/javascript/random-hex-color/' written by Chris Coyier  
  document.body.style.backgroundColor = "#" + randomColor;


return document.getElementById('quote-box').innerHTML = htmlString; 



};


// For extra credit I used the setInterval() method to change my quote ever 20 sec
setInterval(printQuote, 9000)



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

