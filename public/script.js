console.log("***this is script reference from express.static which makes files in public folder in my Project folder accessible***")
console.log("unable to import moment from 'moment' in browser javascript because static link does not provide the dependency")
console.log("even if moment module is saved in public folder and can linked to node_modules/moment/src/moment.js, the remaining dependencies in moment.js is not found in serve in static because they are not in public folder(e.g. ./lib")
console.log("***end of script from express.static***")

// import moment from './moment'

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))