/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
const currentDate = new Date();
const currentTime = currentDate.getTime();
let sum = 0;

//let oldtime = currentDate.getTime();
for(let i = 1;i<=n;i++){
sum+=i;
}
const currentDate1 = new Date();
const currentTime1 = currentDate1.getTime();
const timeDiff = (currentTime1-currentTime)/1000;

//let oldtime1 = currentDate.getTime();
//let newtime = oldtime1-oldtime;
//newtime*=1000;
console.log(timeDiff);
console.log(sum);
}

calculateTime(1000000000);
