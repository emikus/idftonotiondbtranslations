import url from 'url';
import http from 'http';
import * as TranslationsUtils from "./IDFparser.js";
import * as notionDBModyfier from "./notionDBModyfier.js";
import util from 'util';

// process.env.PORT ||
const PORT = process.env.PORT || 8080

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
  let data = '';
  req.on('data', chunk => {
    data += chunk;
    console.log(111111111111111)
  });
  req.on('end', () => {
    console.log(2222222222222)
    console.log(); // 'Buy the milk'
    const wordToTranslate = JSON.parse(data).submission.WordInEnglish
    TranslationsUtils.getTranslationsFromIDF(wordToTranslate, Object.keys(wordTranslations))
      .then(function (wordTranslations) {
        notionDBModyfier.addTranslationsToNotionDB(wordTranslations)
      })
    res.end();
  });
}).listen(PORT);




