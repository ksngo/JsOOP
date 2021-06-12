

var currentTime, timeDiff;

setTimeout(function () {
    console.log("after 5 sec")
}, 5000)
console.log("line5")

var myInterval = setInterval(function () {
    currentTime = new Date();
    timeDiff = currentTime - startTime;
    console.log("every 3 sec ?")
    console.log(`timeelapsed: ${timeDiff}`)
    if (timeDiff > 12000) {
        clearInterval(myInterval)
    }
}, 3000)
console.log("line10")
const startTime = new Date();

//line5
//line10
//every 3 sec
//after 5sec
//every 3 sec