/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Hi');
        },n*1000)
    });
    return p;
}


async function main(){
    const v = await wait(2);
    console.log(v);
}

main();


module.exports = wait;
