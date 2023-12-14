// Simulated asynchronous function that returns a Promise
function someAsyncFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "Result from someAsyncFunction";
        resolve(result);
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Another simulated asynchronous function
  function anotherAsyncFunction(input) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `Modified by anotherAsyncFunction: ${input}`;
        resolve(result);
      }, 500); // Simulating a delay of 0.5 seconds
    });
  }
  
  // Yet another simulated asynchronous function
  function yetAnotherAsyncFunction(input) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `Modified by yetAnotherAsyncFunction: ${input}`;
        resolve(result);
      }, 800); // Simulating a delay of 0.8 seconds
    });
  }
  
  // Create a Promise chain
  someAsyncFunction()
    .then((result1) => {
      console.log(result1); // Result from someAsyncFunction
      return anotherAsyncFunction(result1);
    })
    .then((result2) => {
      console.log(result2); // Modified by anotherAsyncFunction: Result from someAsyncFunction
      return yetAnotherAsyncFunction(result2);
    })
    .then((finalResult) => {
      console.log(finalResult); // Modified by yetAnotherAsyncFunction: Modified by anotherAsyncFunction: Result from someAsyncFunction
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  

    //by chatgpt