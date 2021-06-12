const request = require('request')

var status = undefined;

request.get("https://google.com", (error, response, body)=>{
    if(!error && response.statusCode == 200){
        status = response.statusCode
        console.log('8: ',status)
        console.log(response.body)
    }
})
console.log('11 :',status)