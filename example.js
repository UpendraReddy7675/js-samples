var fs = require('fs');
fs.readFile('array.js','utf8',function(err,data){
    console.log(data);
});