// time

const delay = (ms) => new Promise( function(res,rej) { setTimeout(res, ms); })


async function foo(){
    function bar(a){
        i=2
        console.log("a :",a)
        console.log("i :",i)
    }
    for (var i=0; i<10 ; i++){
        console.log("inside for")
        bar(i)
        await delay(5000)
    }
    console.log("end of foo")
}
foo()
