'use strict';

//max file size in bytes (5 kB)
var maxSize = 500000;

var multer = require("multer");

var upload = multer(
    {
        dest: './uploads/',
        limits: { fileSize: maxSize }
    });

var path = process.cwd();

module.exports = routes;

function routes(app) {
    
    //Displays test harness, index.html
    app.get('/', function(req, res) {
        res.sendFile(path + '/public/index.html');
    });
    
    //API POST request router
    //Note: Upload.single() argument must match name on file input in index.html
    app.post('/api/fileanalyze', upload.single('fileToAnalyze'), function(req, res, next) {
        
        if (req.file) {
            console.log(req.file);
            
            res.json(req.file);
            
        } else if (req.body) {
            console.log(req.body);
            
            res.json(req.body);
            
        } else {
            res.end("No file uploaded");
        }
        
    });
    
}