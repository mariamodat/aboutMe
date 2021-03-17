'use strict';
let userName=prompt('Hi, let me know your Name plz') ;
alert( 'Welcome' ,userName);
alert('lets start Guess Who Am I Game') ;

let age = function()
{let myAge=prompt('I Am 25 Years Old ?');
  if(myAge.toLowerCase()==='yes'|| myAge.toLowerCase()==='y')
  {alert ('Ohh, I am not!! I am still 23 years!');
  }
  else if(myAge.toLowerCase()==='no'|| myAge.toLowerCase()==='n' ) {
    alert('sure! haha , because I am 23 years only !');}
};
age();
let intrest = function()
{let intrest=prompt('do you think I like programming?');
  if (intrest.toLowerCase()==='yes'|| intrest.toLowerCase()==='y')
  {alert ('Sure ! I joined ASAC because I like it as well as to work in it');}
  else if (intrest.toLowerCase()==='no'||intrest.toLowerCase()==='n' ) {alert('Oops! really I like it !');}};
intrest();
let birth = function()
{
  let mybirth =prompt('I was born in UAE ?');
  if(mybirth.toLowerCase()==='yes'|| mybirth.toLowerCase()==='y')
  {alert('Yes I was born in Abu-Dhabi!');
    //console.log('You are rigth');
  }
  else if(mybirth.toLowerCase()=== 'no'||mybirth.toLowerCase()=== 'n')
  {alert('Oops! , I was born in Abu-Dhabi!');}
};
birth ();
let like = function(){
  let whatILike=prompt('Do you think that I like Coffee more than anything?');
  if(whatILike.toLowerCase()==='yes'|| whatILike.toLowerCase()==='y')
  {alert('I like it more that you can imagine! haha yes');
    console.log();}
  else if (whatILike.toLowerCase==='no' ||whatILike.toLowerCase==='n' ) {alert('I like it more that you can imagine! haha yes');}
};
like();
let numGame = function()
{alert('guess a number!') ;
  let myNums = [1, 2,3,4,5,6,7,8,9,10];
  let guess = prompt('enter a number between 0 and 10 !');
  let trial =0;
  for(let i =0 ; i<3 ;i++)
  {
    if (guess === '8' )
    {
      alert('you got me ! this is the number ');
      break;
    }
    else if (guess<myNums.indexOf(8))
    {
      alert('you are close, increase the num! ! try once again');
      guess= prompt('try once again!');
      trial++;
    }
    else if (guess>myNums.indexOf(8))
    {alert('you are fare away from the Num');
      guess=prompt('try once again!');
      trial++;
    }
    if(trial>=3){
      alert('Sorry ! you have exhasted your trials! the Num was 8');}
  }};
numGame();
let fav = function(){
  let favcoffee = ['latte','turkish','mocha','nescaffe','snapish latte','american', 'french coffee','white mocha','tea','flat white'];
  alert('we will play guess game of multi kind of drinks I like , you have only 7 trials to guess ok?');
  alert(`these are the suggestions ${favcoffee}`);
  let CoffeeGuess = prompt('guess what kind of coffee I prefer ?');
  let right =0 ;
  let wrong = 0;
  let i=0 ;
  for(i=0;i<7;i++)
  {
  // eslint-disable-next-line eqeqeq
    if (CoffeeGuess.toLowerCase()== 'latte' || CoffeeGuess.toLowerCase()=='turkish'|| CoffeeGuess.toLowerCase()=='mocha'||CoffeeGuess.toLowerCase()== 'spanish latte'||CoffeeGuess.toLowerCase()=='american'|| CoffeeGuess.toLowerCase()=='french')
    {right++ ;
      alert('WoOoW! you got me !');
      CoffeeGuess= prompt('Try one more! a have alot');
    }
    // eslint-disable-next-line eqeqeq
    else if (CoffeeGuess.toLowerCase() !=CoffeeGuess.toLowerCase()!== 'latte' || CoffeeGuess.toLowerCase()!=='turkish'|| CoffeeGuess.toLowerCase()!=='mocha'||CoffeeGuess.toLowerCase()!== 'spanish latte'||CoffeeGuess.toLowerCase()!=='american'|| CoffeeGuess.toLowerCase()!=='french')
    { wrong++;
      alert('Oops ! this is not my Fav !');
      CoffeeGuess=prompt('try Again !');
    }
  }
  alert(`you have tried ' , ${i} , '  times'`);
  alert(`you have guessed  ${right} right answers and ${wrong} wrong answers , Good luck!`);
  document.write(favcoffee);
};
fav();
