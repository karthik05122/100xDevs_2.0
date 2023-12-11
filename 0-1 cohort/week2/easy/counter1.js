function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString());
}

const intervalID = setInterval(myTimer, 1000);


//to stop counter after some time 
const stoptime = 10*1000

setTimeout(function(){
  clearInterval(intervalID);
  console.log("counter stopped ");
},stoptime);
