const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash')

console.log("server file is available");
let age = notes.age;
console.log(age);
const result = notes.addnumber(2,3)
console.log("result is",result);

const data = ['person', 'person',1, 2, 1,'name', 'age', '2' ];
const filter = _.uniq(data);
console.log(filter);
console.log(_.isString(true));

// let user = os.userInfo();

// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'hi \n' + user.username + '!', ()=>{
//     console.log("file is created");
// })