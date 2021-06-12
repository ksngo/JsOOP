const http = require('http')

let myServer = http.createServer();

myServer.on('request', (req, res) => {
    res.writeHeader(200, {'Content-Type': 'text/plain'})
    res.end("Ending response\n")
})

myServer.listen(3000, function(){
    console.log("listening at 3000")
})

//curl -v http://localhost:3000