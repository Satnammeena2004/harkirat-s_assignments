const fs = require("fs");
const path = require("path");

// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;

function callback() {
    console.clear()
    counter = counter + 1;
    console.log(counter);
}

// setInterval(callback,1000)


// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let c = 0;

function withoutSetInterval() {
    console.clear();
    c = c + 1;
    console.log(c);

    setTimeout(withoutSetInterval, 1000)
}
//create
// fs.writeFile(path.resolve(__dirname,"a.txt"),"Hello",(err)=>{
//     console.log(err);
// })

// append
// fs.appendFile(path.resolve(__dirname, "a.txt"), " satnam", (err) => {

//     console.log(err);
// });


// fs.unlink(path.resolve(__dirname,"a.txt",),(err) => {

//         console.log(err);
//     })



// fs.mkdir(path.resolve(__dirname,"hello"),(err)=>{

// })





// fs.rename(path.resolve(__dirname,"b.txt"),path.resolve(__dirname,"a.txt"),(err) => {

//         console.log(err);
//     })




// fs.appendFile(path.resolve(__dirname,"a.json"),JSON.stringify({"name":"satnam"}),(err)=>{
//   console.log(err)
// });

