const fs = require("fs").promises
const path = require("path")

let str = "";


function cleanString(str){
    return str.replace(/\s+/g," ")
}

function structuredDate(){
    const d = new Date()
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${d.getHours()>12?'PM':"AM"}`
}

console.log(structuredDate())





