function counter(){
    const date = new Date();
    console.log(date.toLocaleTimeString());
    setTimeout(counter,1000);
  }

counter();
