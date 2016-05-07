# File Metadata Microservice
Built with Node.js, Express, and multer

## Overview

This simple API returns metadata of a single uploaded file as a browser alert

## Usage

The FormData object should be submitted to '/api/fileanalyze'

## Notes
- index.html is a simple test harness for the API that submits a FormData object using an AJAX request with jQuery
- Harness only posts text fields, does not append/upload a file unless `data.append("fileToAnalyze", file, file.name);` is uncommented
- Max file size is set to 500 kB by default