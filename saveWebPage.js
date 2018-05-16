const express = require('express');
const app = express();
//const promise = require('bluebird');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const fs = require('fs-extra');


function saveWebPage(url, filename) {
    rp(url).then(function (htmlString) {
        //$('p').text()
        fs.outputFile(filename, htmlString)
    }).catch(err => console.log(err));
}

module.exports = saveWebPage



//saveWebPage('https://en.wikipedia.org/wiki/Futures_and_promises', 'test2.txt');
