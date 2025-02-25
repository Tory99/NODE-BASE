let http = require('http');

function start(route, handle){
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        if( pathname == '/favicon.ico'){
            response.writeHead(200, { 'Content-Type': 'image/x-icon'});
            return response.end
        }

    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start = start;