//Decorator pattern 

function CreateServer() {

    this.pid = 1;
    this.decorator_list =[]
    
}

CreateServer.decorators = {}

CreateServer.decorators.reverseProxy = {
    init : function(pid){
        console.log("Start reverse proxy...")
        return pid + 1
    }
}

CreateServer.decorators.serveNode = {
    init : function(pid){
        console.log("Start serving Node...")
        return pid + 1
    }
}

CreateServer.prototype.decorate = function(param){
    this.decorator_list.push(param)
}

CreateServer.prototype.init = function(){
    var running_processes = 0;
    var pid = this.pid;
    for(let i=0; i< this.decorator_list.length; i++){
        running_processes = CreateServer.decorators[this.decorator_list[i]].init(pid)
    }
    return console.log(`${running_processes} running processes.`)
}

var nodeServer = new CreateServer();
nodeServer.decorate("reverseProxy")
nodeServer.decorate("serveNode")
nodeServer.init()