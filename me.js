'use strict';
let userName=prompt('Hi, let me know your Name plz') ;
alert( 'Welcome' ,userName);
alert('lets start Guess Who Am I Game') ;
let ready=prompt ('are you ready ?');
if(ready.toLowerCase() === 'yes' || ready.toLowerCase()==='y')
{let myAge=prompt('I Am 25 Years Old ?');

  if(myAge.toLowerCase()==='yes'|| myAge.toLowerCase()==='y')
  {alert ('Ohh, I am not!! I am still 23 years!');
  }
  else {alert('sure! haha , because I am 23 years only !');}
  let intrest=prompt('do you think I like programming?');
  if (intrest.toLowerCase()==='yes'|| intrest.toLowerCase()==='y')
  {alert ('Sure ! I joined ASAC because I like it as well as to work in it');}
  else{alert('Oops! really I like it !');}
  let mybirth =prompt('I was born in UAE ?');
  if(mybirth.toLowerCase()==='yes'|| mybirth.toLowerCase()==='y')
  {alert('Yes I was born in Abu-Dhabi!');
    //console.log('You are rigth');
  }
  else{alert('Oops! , I was born in Abu-Dhabi!');}
  let whatILike=prompt('Do you think that I like Coffee more than anything?');
  if(whatILike.toLowerCase()==='yes'|| whatILike.toLowerCase()==='y')
  {alert('I like it more that you can imagine! haha yes');
    console.log();}
  else {alert('I like it more that you can imagine! haha yes');}
}
else {alert('Ohh, Sorry retry Again later'); }
alert('thanks for your time! hope you enjoyed! plz have a look at my website!') ;
