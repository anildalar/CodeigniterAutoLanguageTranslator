var unirest = require("unirest");

/*
var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

req.headers({
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": "e70b1b57a1mshc7f118824de57e2p12543djsnc6e4e8fce4ef",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "useQueryString": true
});
*/


var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

//Now Store All Languge in Array
var targetLang = './application/language';
var baseLang = 'english';
var baseLangDir = targetLang+'/'+baseLang;
var lang = [
    'arabic',              'armenian',             'azerbaijani',
    'bengali',             'bulgarian',            'catalan',
    'croatian',            'czech',                'danish',
    'dutch',               'filipino',             'french',
    'german',              'greek',                'gujarati',
    'hindi',               'hungarian',            'indonesian',
    'italian',             'japanese',             'khmer',
    'korean',              'latvian',              'lithuanian',
    'norwegian',           'persian',              'polish',
    'portuguese',          'portuguese-brazilian', 'romanian',
    'russian',             'serbian',              'simplified-chinese',
    'slovak',              'slovenian',            'spanish',
    'swedish',             'tamil',                'thai',
    'traditional-chinese', 'turkish',              'ukrainian',
    'urdu',                'vietnamese'
  ];

//Remove all Files inside other folder
fs.readdir(baseLangDir, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
    files.forEach(function (file, index) {
        console.log(file);

    });
});

//console.log(lang);

for (var i = 0; i < lang.length; i++) {
    console.log(lang[i]);
}


function calltoafunction(){
    
}

(async ()=>{
    await calltoafunction();
})(); // Wrap in parenthesis and call now