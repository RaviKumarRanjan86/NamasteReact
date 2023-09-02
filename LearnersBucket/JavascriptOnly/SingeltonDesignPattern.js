// Create an implementation of Singelton Design Pattern in javascript

// In a singelton design pattern, only one object is created for each interface and the same object is returned evertime when called.
// this is helpful in the case of notifications

// Example :- let's write a code with class counter

class counter {
  count = 0;

  increment(){
      this.count++
  }

  decrement(){
      this.count--;
  }

  display(){
      console.log('count value ', this.count);
  }
}
// const cnt1 = new counter();
// const cnt2 = new counter();
// console.log(cnt1 == cnt2);
// Above cnt1 and cnt2 is not going to be equal, to make it equal we can use singelton design pattern

let singelton = (function(){
    let instance;
    return {
        getInstance(){
            if(!instance){
                instance = new counter();
            }
            return instance;
        }
    }
})()

const cnt1 = singelton.getInstance();
const cnt2 = singelton.getInstance();
 cnt1.increment();
 cnt2.increment();
 cnt1.display();
console.log(cnt1 == cnt2);

