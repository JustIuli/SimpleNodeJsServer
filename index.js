let http = require("http");
let url = require('url');
let handleUrl = require('./urlUtils')
let fs = require('fs')
let routes = {
    'home' : {'url' : '/' , 'view' : 'index.html'},
    'about' : {'url' : '/about' , 'view' : 'about.html'},
    'contact' : {'url' : '/contact' , 'view' : 'contact.html'},
}

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    console.log(q.path);
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname)
    switch (q.pathname){
        case '/':{
            handleUrl(res,'Pages/index.html' , fs)
            break;
        }
        case '/contact':{
            handleUrl(res,'Pages/contact.html' , fs)
            break;
        }
        case '/about':{
            handleUrl(res,'Pages/about.html' , fs)
            break;
        }
        default:{
            handleUrl(res,'Pages/404.html' , fs)
            break;
        }
    }
}).listen(8081);

console.log('Server is running at http://localhost:8081/');