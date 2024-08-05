console.log("server file is running");

// function add(a,b) {
//     return a + b;
// }

// var add = function(a,b) {
//     return a + b
// }

// var add = (a,b) => {
//     return a + b
// }

// var add = (a , b) => a + b

// var result = add(42,7)
// console.log(result);

//iife
// (function () {
//     console.log("hamza id added");
// })();

// function callback() {
//     console.log('now adding is successfully completed');
// }

const add = (a, b, callback) => {
    var result = a + b;
    console.log(`result: ${result}`);
    callback()
}

add(3,12, () => console.log('add complete'));