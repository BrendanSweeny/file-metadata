'use strict';

var multer = require("multer");
var upload = multer({ dest: './uploads/' });

var path = process.cwd();

module.exports = routes;

function routes(app) {
    
    app.get('/', function(req, res) {
        //sendfile() in express 3, sendFile() in express 4
        res.sendFile(path + '/public/index.html');
    });
    
    //upload.single() argument must match name on file input in index.html
    app.post('/api/fileanalyze', upload.single('fileToAnalyze'), function(req, res, next) {
        console.log(req.body);
        //if jQuery is excluded from index.html, file is uploaded and req.body is empty object,
        //if jQuery is included, req.file is undefined, req.body contains file information
        console.log(req.file);
        console.log(req.files);
        console.dir(req.headers['content-type']);
        
        res.end(req.body.size);
        
    });
    
}