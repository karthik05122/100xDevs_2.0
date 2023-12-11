
function counter() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

const timerID = setInterval(counter, 1000);
const stopTime = 10 * 1000;

setTimeout(function () {
    clearInterval(timerID);
    console.log("Counter stopped ");
}, stopTime);




