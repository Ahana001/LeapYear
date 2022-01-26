var readlineSync = require('readline-sync');
var userName = readlineSync.question('Enter your name please!! ');
var dateOfBirth = readlineSync.question('Enter your birth-date in DD/MM/YYYY format : ');

let userDD = "";
let userMM = "";
let userYYYY = "";

function leapYear(year)
{
  if( (year % 400 == 0 && year % 100 != 0 ) || year % 4 == 0)
  {
    console.log(userName + "!! your birth year is leap year");
  }else
  {
    console.log(userName + "!! your birth year is not leap year");
  }
}

function validateDOB(date){
  userDD = date.substring(0,2);
  userMM = date.substring(3,5);
  userYYYY = date.substring(6);

  if(isNaN(userDD) ||  isNaN(userMM) || isNaN(userYYYY)){
    console.log("please enter valid birth date");
  }else{
    leapYear(userYYYY);
  }
}



validateDOB(dateOfBirth);
