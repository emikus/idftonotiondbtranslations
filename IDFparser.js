
import $ from "cheerio";
import rp from 'request-promise';
import * as Utils from "./index.js";

var wordTranslations = {
  Swedish: "Swedish",
  French: "French",
  Esperanto: "Esperanto",
  Portuguese: "Portuguese",
  Polish: "Polish",
  Danish: "Danish",
  Chinese: "Chinese",
  Dutch: "Dutch",
  Hindi: "Hindi",
  Turkish: "Turkish",
  Indonesian: "Indonesian",
  Spanish: "Spanish",
  Icelandic: "Icelandic",
  Greek: "Greek",
  Latin: "Latin",
  Korean: "Korean",
  Russian: "Russian",
  Ukrainian: "Ukrainian",
  Italian: "Italian",
  German: "German",
  Swahili: "Swahili",
  Vietnamese: "Vietnamese",
  Norwegian: "Norwegian",
  WordInEnglish: "WordInEnglish"
}

var languagesNames = Object.keys(wordTranslations);


function getTranslationsFromIDF (word, languagesNames) {
  const IDFUrl = "https://www.indifferentlanguages.com/words/"
  
  // return puppeteer
  // .launch({
  //   headless: true,
  //   args: ['--no-sandbox','--disable-setuid-sandbox']
  // })
  // .then(function(browser) {
  //   console.log(222222222)
  //   return browser.newPage();
  // })
  // .then(function(page) {
  //   console.log(3333333333)
  //   return page.goto(IDFUrl + word).then(function() {
  //     console.log(31313131313131313131)
  //     return page.content();
  //     console.log(323323232323232323)
  //   });
  // })
  return rp(IDFUrl + word)
  .then(function(html) {
    console.log(44444444444)

    languagesNames.forEach((language) => {

      $('a.translation-link[href*=' + language.toLowerCase() + ']', html)
        .each(function() {
          
          wordTranslations[language] = $(this).text().trim();
        });
    })

    wordTranslations.WordInEnglish = word;

    console.log('-------',wordTranslations, '-------')

    
    return wordTranslations;
  })
}

export {getTranslationsFromIDF}