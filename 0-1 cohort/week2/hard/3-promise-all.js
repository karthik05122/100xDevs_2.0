function wait1(t) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(t);
      }, t);
    });
  }
  
  function wait2(t) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(t);
      }, t);
    });
  }
  
  function wait3(t) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(t);
      }, t);
    });
  }
  
  function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function (values) {
        const endTime = Date.now();

      const totalTime = values.reduce((acc, current) => acc + current, 0);
      console.log(" total time inside "+totalTime+" total time out "+(endTime-startTime)/1000+" seconds");
      return totalTime;
    });
  }
  
calculateTime(1000,1000,1000);


async function calculateTime1(t1, t2, t3) {
    const startTime = Date.now();

    let k = await Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function (values) {
        const endTime = Date.now();

      const totalTime = values.reduce((acc, current) => acc + current, 0);
      console.log(" total time inside "+totalTime+" total time out "+(endTime-startTime)/1000+" seconds");
      return totalTime;
    });
  }
  

calculateTime1(1000,2000,3000);

  module.exports = calculateTime;
  