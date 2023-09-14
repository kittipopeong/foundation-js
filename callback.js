//fucntion
function callMe() {
  console.log(`hello from callback function`);
}
function greeting(callback) {
  console.log(`hello world`);
  callback();
}
greeting(callMe);

//arrow
const callMeMore = () => {
  console.log("hello again from call function");
};

const greetingMore = (callback) => {
  console.log("hello again");
  callback();
};

greetingMore(callMeMore);

// Annoymous function

greeting(function () {
  console.log(`hello from callback function annoymous`);
});

// Annoymous arrow

greeting(() => {
  console.log("hello again from call arrow annoymous");
});

// test

function greetingJa(callback) {
  console.log(`hello world Ja`);
  callback();
}

greetingJa(function () {
  console.log(`hello Ja from callback function annoymous`);
});

//Callback function with parameter

const greeting2 = (callback) => {
  console.log("Hello from who");
  callback("John");
};

greeting2((name) => {
  console.log(`hello from ${name}`);
});

//CB + Array

const originalArr = [1, 2, 3, 4];
const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

loopThroughArrayV2(originalArr, (item) => {
  console.log(item);
});

// callback return


---- รอไปก่อนไม่เข้าใจละครับ----


//Callback Function Exercise

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(arr, cb) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
      const isKeeping = cb(arr[i])
      // * fill here
      // *
    }
  
    return result
  }
  
  const beforeFilter = [-1, 3, 20, -24]
  
  const afterFilter = filterArray(beforeFilter, (item) => {
    return // * fill here
  })


