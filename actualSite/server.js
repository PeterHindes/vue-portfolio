var express = require('express');
var app = express();
var fs = require('fs');
var util = require('util');
//const { resolve } = require('path');

var preloadCount = 3;

app.get('/', function (req, res) {
    // set response content   
    fs.readFile('home.html', 'utf8', function(err, page) {
        fs.readFile('home.script', 'utf8', function(err, script) {
            fs.readFile('main.style', 'utf8', function(err, style) {
                fs.readdir( 'data/pages', (error, files) => { 
                    if (err) console.log(err);
                    //console.log("Data:\n"+data);
                    //console.log(typeof(data));
                    script=script.replace(/{{{{{Insert Here}}}}}/g,files.length.toString())

                    // Preload The Cache
                    let pcvar = ""
                    let fetchers = new Array
                    for (let i = 1; i<=preloadCount; i++) {
                        let fname = i.toString()+'.html';
                        console.log(fname);
                        fetchers[i-1] = util.promisify(fs.readFile) ('data/pages/'+fname, 'utf8')
                        .then((dataa) => {
                            pcvar+='"./pages/'+fname+'":`'+dataa+'`,\n'
                            console.log("\n\nNew\n");
                        })
                    }

                    fetchers[fetchers.length] = new Promise ((resolve) => {
                        page=page.replace(/{{Style Here}}/g,style)
                        resolve()
                    })
                    
                    Promise.all(fetchers).then(() => {
                        console.log("All Fetched");
                        script=script.replace(/{{Preload Here}}/g,pcvar)
                        //console.log("Data replaced:\n"+data);
                        page=page.replace(/{{Script Here}}/g,script)
                        res.send(page);
                    })

                })
            })
        })
    })
    //res.send('Hello World!')
});

app.use(express.static('data')); //Serves resources from public folder


//var server = 
app.listen(5000);