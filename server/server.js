const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 30000

const server = http.createServer((req, res) => {
    //req.url=="/" => 'index.html'
    const Filepath = path.join(__dirname, req.url == '/' ? "index.html" : req.url)
    console.log(Filepath)
    const exname = String(path.extname(Filepath)).toLocaleLowerCase()
    const mineType = {
        '.html': 'text/html',
        '.css': 'text/css',
        'js': 'text/javascript',
        '.png': 'text/png',
        '.xls': 'text/xls',
        '.csv': 'text/csv'
    }

    const contentType = mineType[exname] || 'application/octet-stream'

    fs.readFile(Filepath, (error, content) => {
        if (error) {
            debugger;
            console.log("Rushi",error.code)
            if (error.code == "ENOENT") {
            res.writeHead(404,{'content-type':'text/html'})
            res.end('404:file Not Found Bro')
            }

        } else {
            res.writeHead(200, { 'content-type': contentType });
            res.end(content, "utf-8");

        }
    })
});
server.listen(port, () => {
    console.log(`we listeting the port ${port}`)
});