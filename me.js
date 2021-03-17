'use strict';


 let userName=prompt('Hi, let me know your Name plz') ;
alert( `welcome ${userName}`);
alert('lets start Guess Who Am I Game') ;

let age = function()
{
  let t = 0;
  let f= 0;
  
  let myAge=prompt('I Am 25 Years Old ?');
  if(myAge.toLowerCase()==='yes'|| myAge.toLowerCase()==='y')
  {alert ('Ohh, I am not!! I am still 23 years!');
  t++;
  }
  else if(myAge.toLowerCase()==='no'|| myAge.toLowerCase()==='n' ) {
    alert('sure! haha , because I am 23 years only !');
  f++}
}
age();




let intrest = function()
{ 
  let intrest=prompt('do you think I like programming?');
  if (intrest.toLowerCase()==='yes'|| intrest.toLowerCase()==='y')

  {alert ('Sure ! I joined ASAC because I like it as well as to work in it');
t++;

}
  else if (intrest.toLowerCase()==='no'||intrest.toLowerCase()==='n' ) 
  {alert('Oops! really I like it !');

f++ ;
  }
}
intrest();




 let birth = function()
{
  let mybirth =prompt('I was born in UAE ?');

  if(mybirth.toLowerCase()==='yes'|| mybirth.toLowerCase()==='y')
  {alert('Yes I was born in Abu-Dhabi!');

    t++ ;
  }
  else if(mybirth.toLowerCase()=== 'no'||mybirth.toLowerCase()=== 'n')
  {alert('Oops! , I was born in Abu-Dhabi!');
      f++ ; 
  }
};
birth ();




let like = function(){
  let whatILike=prompt('Do you think that I like Coffee more than anything?');
  if(whatILike.toLowerCase()==='yes'|| whatILike.toLowerCase()==='y')


  {alert('I like it more that you can imagine! haha yes');

  t++ ;
    console.log();}
  else if (whatILike.toLowerCase==='no' ||whatILike.toLowerCase==='n' )
   {alert('I like it more that you can imagine! haha yes');
  f++ ; 
  }
}


like();

alert(` your scores are ${t} so you did not guess ${f}`)



let numGame = function()
{alert('guess a number!') ;
  let myNum =8;
  let guess = prompt('enter a number between 0 and 10 !');
  let trial =0;
  for(let i =0 ; i<3 ;i++)
  {
    if (guess === '8' )
    {
      alert('you got me ! this is the number ');
      break;
    }
    else if (guess<myNum)
    {
      alert('you are close, increase the num! ! try once again');
      guess= prompt('try once again!');
      trial++;
    }
    else if (guess>myNum)
    {alert('you are fare away from the Num');
      guess=prompt('try once again!');
      trial++;
    }
    if(trial>=3){
      alert('Sorry ! you have exhasted your trials! the Num was 8');}
  }};
numGame();


let fav = function(){
  let favcoffee = ['latte','turkish','mocha','snapish ','american', 'french '];
  alert('we will play guess game of multi kind of drinks I like , you have only 7 trials to guess ok?');
  alert(`these are the suggestions ${favcoffee}`);
  
  let right =0 ;
  let wrong = 0;
  let i=0 ;
  for(i=0;i<7;i++)
  {
    let correct = false ;
  let CoffeeGuess= prompt(`you have ${7-i} trials , try!`);

for (let c=0; c< favcoffee.length ; c++)
{
    if (CoffeeGuess.toLowerCase()=== favcoffee[c])
    {right++ ;
      correct= true;
      // alert('WoOoW! you got me !');
      break;
    }
    
    else if (CoffeeGuess.toLowerCase() !==favcoffee[c])
    { wrong++;
      // alert('Oops ! this is not my Fav !');
      correct=false;
      break;
    }
  }  
  if (correct)

  {alert('WoOoW! you got me !');}  

else {alert('Oops ! this is not my Fav !');}




  }
  
  alert(`you have guessed  ${right} right answers and ${wrong} wrong answers , Good luck!`);
  document.write(favcoffee);
}
fav();
