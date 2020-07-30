console.log("Sup");

var http = require('http'); // Import Node.js core module
var fs = require('fs');



var server = http.createServer(function (req, res) {   //create web server


    if (req.method !== 'GET') {
        res.statusCode = 501;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Method not implemented');
    } else {
        if (req.url == '/') { //check the URL of the current request
        
            // set response header
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            
            // set response content   
            fs.readFile('index2.html', 'utf8', function(err, data) {
                fs.readdir( 'pages', (error, files) => { 
                    if (err) console.log(err);
                    //console.log("Data:\n"+data);
                    data.replace("{{{{{Insert Here}}}}}",files.length.toString())
                    //console.log("Data replaced:\n"+data);
                    res.write(data);
                    res.end();
                })
            }); 
        
        }
        else {
    
            console.log(req.url);
    
            // set response header
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            
            // set response content
            var fileAddr = req.url.slice(1)
            if(!fs.existsSync(filecAddr)) {
                console.log("Requested Non Existant File");
                res.statusCode(404)
                res.end()
            } else {
                fs.readFile(filecAddr, 'utf8', function(err, data) {
                    if (err) console.log(err);
                    //console.log(data);
                    res.write(data);
                    res.end();
                })
            }
        }
    }
    
        

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')