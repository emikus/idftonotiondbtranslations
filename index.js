import http from 'http';
import * as TranslationsUtils from "./IDFparser.js";
import * as notionDBModyfier from "./notionDBModyfier.js";

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



http.createServer(function (req, res) {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const wordToTranslate = JSON.parse(data).submission.WordInEnglish

    TranslationsUtils.getTranslationsFromIDF(wordToTranslate, Object.keys(wordTranslations))
      .then(function (wordTranslations) {
        notionDBModyfier.addTranslationsToNotionDB(wordToTranslate, wordTranslations)
      })
    res.end();
  });
}).listen(PORT);




