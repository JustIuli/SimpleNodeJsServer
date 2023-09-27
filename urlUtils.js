module.exports = function handleUrl(res,view , fs){
    fs.readFile(`${view}`, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}