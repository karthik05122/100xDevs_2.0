// Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

var fs = require("fs");

console.log("start");


function readfile(){
 // Read the newly written file and print all of its content on the console
 fs.readFile('demo.txt', function (err, data) {
    console.log("Asynchronous read: " + data.toString());
 });}

// Open a new file with name input.txt and write Simply Easy Learning! to it.
function writefile(data){
fs.writeFile('demo.txt', data, function(err) {
   console.log("Data written successfully!");  
});}


function appendfile(data){
    fs.appendFile('demo.txt', data, function(err){
        console.log("append done");
    });
}


readfile();
writefile("hello1");
readfile();
appendfile("hello2");
readfile();
console.log("with set timeput");
readfile();

setTimeout(()=>{
    writefile("hello3");
    readfile();
},2000);

setTimeout(()=>{
    appendfile("hello4");
    readfile();
},3000);

