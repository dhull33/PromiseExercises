const express = require('express');
const app = express();
const promise = require('bluebird');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const fs = require('fs-extra');

const cheerio = require('cheerio');


const urls = [
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
];
/*
urls.forEach(function(url){
    rp(url).then(function(htmlString){
        console.log(htmlString);
    })
        .catch(function(err){
        console.log(err);
    })
});
*/


function saveWebPage(url, filename) {
    const options = {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(options).then(function (data) {
        //$('p').text()

        fs.outputFile(filename, htmlString)

    }).catch(err => console.log(err));
}

saveWebPage('https://en.wikipedia.org/wiki/Futures_and_promises', 'test.html');

