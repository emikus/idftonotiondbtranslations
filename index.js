import url from 'url';
import http from 'http';
import * as TranslationsUtils from "./IDFparser.js";
import * as notionDBModyfier from "./notionDBModyfier.js";
import util from 'util';

// process.env.PORT ||
const PORT =  8080

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


      console.log(444444444)

      let data = '';
  req.on('data', chunk => {
    data += chunk;
    console.log(111111111111111)
  });
  req.on('end', () => {
    console.log(2222222222222)
    console.log(JSON.parse(data)); // 'Buy the milk'


    const wordToTranslate = queryObject.wordToTranslate
              // console.log(wordToTranslate)
              // TranslationsUtils.getTranslationsFromIDF(wordToTranslate, Object.keys(wordTranslations))
              // .then(function(wordTranslations) {
              //   notionDBModyfier.addTranslationsToNotionDB(wordTranslations)
    res.end();
  });
        switch(req.url){
            case '/':         res.write('website.com');          break;
            case '/about_us': res.write('website.com/about_us'); break;
            case '/api':  
// console.log("-------------++++++++++++++++___________+++++++++++++++++++---------------")
// req.on('data', function (chunk) {
//   console.log('BODY: ' + chunk);
// });
// // console.log(util.inspect(res, false, null, true /* enable colors */))
// console.log("-------------++++++++++++++++___________+++++++++++++++++++---------------")



              // const queryObject = url.parse(req.url, true).
              // // const queryObject = url.parse(req.url, true).query;
              // const wordToTranslate = queryObject.wordToTranslate
              // console.log(wordToTranslate)
              // TranslationsUtils.getTranslationsFromIDF(wordToTranslate, Object.keys(wordTranslations))
              // .then(function(wordTranslations) {
              //   notionDBModyfier.addTranslationsToNotionDB(wordTranslations)
              // })
            //   break;
            // default:          res.write('website.com/error_404');
        }
        res.end();
}).listen(PORT);




