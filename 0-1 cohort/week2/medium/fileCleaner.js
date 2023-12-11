var fs = require("fs");


function readfile(){
    // Read the newly written file and print all of its content on the console
    fs.readFile('demo.txt', function (err, data) {
        console.log("Asynchronous read: " + data.toString());

       var str = data.toString();
       str = str.replace(/\s+/g, ' ');
       str = str.replace("with","without");
       setTimeout(()=>{
        fs.writeFile('demo.txt', str, function(err) {
            console.log("Data written successfully!");  
         });
    },100);
    });
    
}
   
readfile();


setTimeout(()=>{
    fs.readFile('demo.txt', function (err, data) {
        console.log("Asynchronous read: " + data.toString());
    });
},500);



