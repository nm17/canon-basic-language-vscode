"use strict";

var fs = require('fs-extra');
var jsonMerger = require("json-merger");
var path = require('path');

console.log(__dirname);

function templ(fin, fout) {
    var result = jsonMerger.mergeFile(path.join(__dirname,  fin), {params: {
        "cb": jsonMerger.mergeFile("./cbasic_support.yaml")
    }});

    fs.ensureDirSync(path.join(__dirname, "../out"));
    fs.writeFileSync(path.join(__dirname, "../out/" + fout), JSON.stringify(result, null, 2), {
        encoding: "utf8"
    });

}

templ('../syntaxes/cbasic.tmLanguage.yaml', 'cbasic.tmLanguage.json');
//templ('../syntaxes/cbasicmd.tmLanguage.yaml', 'cbasicmd.tmLanguage.json');