var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question(chalk.blue("Enter Your Name : "));
console.log(chalk.green("welcome " + userName));

var dateOfBirth = readlineSync.question(chalk.blue('Enter your birth-date in DD/MM/YYYY format : '));

let userDD = "";
let userMM = "";
let userYYYY = "";

function leapYear(year) {
  if ((year % 400 == 0 && year % 100 != 0) || year % 4 == 0) {
    console.log(chalk.green.underline.bold(userName + "!! your birth year is leap year"));
  } else {
    console.log(chalk.redBright.underline.bold(userName + "!! your birth year is not leap year"));
  }
}

function validateDOB(date) {
  userDD = date.substring(0, 2);
  userMM = date.substring(3, 5);
  userYYYY = date.substring(6, 10);

  if (isNaN(userDD) || isNaN(userMM) || isNaN(userYYYY) || 0 > Number(userDD)|| Number(userDD)>31 || 0 > Number(userMM) || Number(userMM) >13 || Number(userYYYY) < 0) {
    console.log(console.log(chalk.red("please enter valid birth date 😡 ")));
  }else {
    leapYear(userYYYY);
  }
}



validateDOB(dateOfBirth);
