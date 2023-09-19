// Module package EXTERNAL

// const moment = require('moment');
// // console.log(time);

// setInterval(()=>{
//     const time = moment().format();
//     console.log(`hozirgi vaqt:  ${time}`);
// }, 5000);

// const inquirer = require('inquirer');
// inquirer
// .prompt([{type: 'input', name: 'raqam', message: 'raqamni kiriting ?'}])
// .then(answer => {
//     console.log("man kiritgan raqam qiymati: ", answer.raqam);
// })
// .catch(err => console.log(err));

const validator = require('validator');
// const test = validator.isEmail('foo@bar.com');
// console.log(test);
// const test = validator.isInt('123');
// console.log('test ', test);
// const test = validator.isIP('114.200.12.154');
// console.log('test ', test);

// const {v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log(random);

// const chalk = require('chalk');
// const log = console.log;
// log(chalk.blue(`uuid creates ${random}`));
// ==============================================================


// Module package FILE

// const calculate = require('./hisob.js');
// const natija = calculate.kopaytirish(4, 56);
// console.log('natija', natija);
// const natija2 = calculate.qoshish(4, 56);
// console.log('natija2', natija2);
// const natija3 = calculate.ayirish(404, 56);
// console.log('natija3', natija3);
// const natija4 = calculate.bolish(56, 4);
// console.log('natija4', natija4);

// console.log(require('module').wrapper);
// console.log(arguments);

// MYACCOUNT MODULE FILE START
const Account = require('./account.js');
Account.tellMeAboutClass();
Account.tellMeTime();
console.log('=======================');
const myAccount = new Account('Shon', 200000, 2343567182);
myAccount.giveMeDetails();
myAccount.makeDeposit(1000000);
// ferrari 400000 usd
myAccount.withdrawMoney(400000);

// bugatti chiyron 2,4 mln usd
myAccount.makeDeposit(200000);
