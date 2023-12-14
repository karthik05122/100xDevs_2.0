/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(t);
        },t);
    });
    

}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(t);
        },t);
    });
    
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(t);
        },t);
    });
    
}

function calculateTime(t1, t2, t3) {
    var start = new Date().getTime();
    wait1(t1).then(function(t){
        console.log(t/1000+" seconds resolved ");
        return wait2(t2);
    }).then(function(t){
        console.log(t/1000+" seconds resolved ");
        return wait3(t3);
    }).then(function(t){
        console.log(t/1000+" seconds resolved ;");
        var end = new Date().getTime();
        console.log(`total time is ${(end-start)/1000} `);
    });


}

calculateTime(1000,1000,1000);


async function calculateTime2(t1,t2,t3){
const starttime = new Date().getTime();
    let a = await wait1(t1);
    console.log(a);
    let b = await wait2(t2);
    console.log(b);
    let c = await wait3(t3);
    console.log(c);
const endtime = new Date().getTime();
console.log("total time"+(endtime-starttime));    
}

//calculateTime2(1000,2000,3000);

module.exports = calculateTime;
