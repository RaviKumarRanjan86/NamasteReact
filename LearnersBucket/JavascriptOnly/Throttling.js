function throttling(func, delay){
    let timerId;
    let lastTimeRun = 0;

    return function(...args){
        clearTimeout(timerId);

        let currentTime = new Date().getTime();

        let remainingTime = Math.max(lastTimeRun + delay - currentTime, 0 );

        if(remainingTime == 0){
            func.apply(this, args),
            lastTimeRun = currentTime
        }
        timerId = setTimeout(() => {
            func.apply(this, args),
            lastTimeRun = new Date().getTime();
        }, remainingTime)
    }
}

function myFunc(name){
    console.log(`my name is ${name}`)
}

const throttledFunction = throttling(myFunc, 1000); // Throttle myFunction with a delay of 200 milliseconds

// Call throttledFunction multiple times in quick succession
throttledFunction('ravi');
throttledFunction('pra');
throttledFunction('sar');

setTimeout(() => {
    throttledFunction('tar'); 
}, 100)