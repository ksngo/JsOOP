var net = require('net')
var events = require('events')
var emmiter = new events.EventEmitter;

emmiter.on('join', (id, caller)=>{
    console.log(`${id} - joined`)
})

emmiter.on('quit', (id, caller)=>{
    console.log(`${id} - left`)
})

var server = net.createServer((caller)=>{
    var id = `${caller.remoteAddress} : ${caller.remotePort}`;
    emmiter.emit('join', id, caller)
    caller.on('end', ()=>{
        emmiter.emit('quit', id, caller)
    }) 
})

server.listen(8124, ()=>{
    console.log('net server running on 8124...')
})


// install telnet : sudo apt-get install telnet
// run telnet to connect to server : telnet 127.0.0.1 8124
// quit telnet : ctrl + ]  & telnet> close