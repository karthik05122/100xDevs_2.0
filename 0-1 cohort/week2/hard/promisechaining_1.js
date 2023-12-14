function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi");
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 3000);
    });
}

function calculateTime() {
    var start = new Date().getTime();
    waitOneSecond().then((val) => {
        console.log('one second resolved');
        console.log(val);
        return waitTwoSecond();
    }).then(() => {
        console.log('two second resolved');
        return waitThreeSecond();
    }).then(() => {
        console.log('three second resolved');
        var end = new Date().getTime();
        console.log(`Time to complete is ${end - start} milliseconds`);
    });
}

calculateTime();


//from discord