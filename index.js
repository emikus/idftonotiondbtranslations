import url from 'url';
import http from 'http';
import * as TranslationsUtils from "./IDFparser.js";
import * as notionDBModyfier from "./notionDBModyfier.js";



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

// TranslationsUtils.getTranslationsFromIDF("result", Object.keys(wordTranslations))
// .then(function(wordTranslations) {
//   notionDBModyfier.addTranslationsToNotionDB(wordTranslations)
// })



    http.createServer(function (req, res) {
        // switch(req.url){
            // case '/':         res.write('website.com');          break;
            // case '/about_us': res.write('website.com/about_us'); break;
            // case '/api':  
              const queryObject = url.parse(req.url, true).query;
              const wordToTranslate = queryObject.wordToTranslate
              console.log(wordToTranslate)
              TranslationsUtils.getTranslationsFromIDF(wordToTranslate, Object.keys(wordTranslations))
              .then(function(wordTranslations) {
                notionDBModyfier.addTranslationsToNotionDB(wordTranslations)
              })
            //   break;
            // default:          res.write('website.com/error_404');
        // }
        res.end();
}).listen(8080);




