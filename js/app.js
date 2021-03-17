'use strict'; 
// let user = prompt('hey ! let me know your good name'); 
// alert(`Welcome ${user}`);

// alert('we will start Guess Game about me ! OK');
// prompt('Are you ready ?');

// let T=0 ;
// let F=0;

// function age ()
// {
// let myAge= prompt('Is My Old 25 Years ?');
// if(myAge.toLowerCase()=== 'yes'|| myAge.toLowerCase()=== 'y')
// {
//     alert('Oops! I Am 23 YO !');
//     F++;
// }
// else if (myAge.toLowerCase()==='no' || myAge.toLowerCase()==='n')
// {
// alert('Right ! I am 23 YO!');
// T++;

// }

// }

// age(); 



// function interest (){
//     let myInterest = prompt('Do I like programming ?')
// if (myInterest.toLowerCase()==='y' || myInterest.toLowerCase()==='yes' )
// {
// alert('Sure I like it !');
// T++ ;

// }
// else if (myInterest.toLowerCase()==='n'|| myInterest.toLowerCase()==='no')
// {
//     alert('Wrong ! I like it !'); 
//     F++ ;
// }

// }

// interest(); 


// function birth (){
// let myBirth = prompt('Was I born in UAE ?')
// if(myBirth.toLowerCase()==='yes' ||myBirth.toLowerCase()==='y')
// {
//     alert('Sure ! I was born in Abu-Dhabi');
//     T++ ;

// }
// else if(myBirth.toLowerCase()==='no' ||myBirth.toLowerCase()==='n')
// {alert('Wrong ! I was born in Abu-Dhabi ');
// F++ ; 
// }

// }

// birth(); 


// function like (){
//     let wtLike = prompt(' Do I like coffe ?')
//     if (wtLike.toLowerCase()==='y' ||wtLike.toLowerCase()==='yes')
//     {
//       alert('Sure I like it more than anything !');
//       T++ ;

//     }
//     else if(wtLike.toLowerCase()==='n' || wtLike.toLowerCase()==='no')
//     {
//       alert('Wrong ! I like more than anything '); 
//       F++ ; 

//     }
// }
 

// like( ); 

// alert(` you scores were ${T} you've answered ${F} wrong Questions!`); 



// let numGame = function()
// {
//  let myNum =8 ;

//  for(let i =0 ; i<4 ; i++)

//  {
//    let guess = prompt('guess a number from 0 - 10 !');


//    if (guess== myNum)
//    {
//        alert ('WoOow ! you got me !');
//        break ;
//    }
// else if (guess<myNum)
// {
//     alert('you are low ! increase your number! ');
// }

// else if (guess> myNum)
// {
//  alert('you are high ! decrease the number!');

// }
// } 

// }

// numGame(); 




let right = 0;
let wrong = 0 ; 


alert("now let's paly what is my Fav kind of coffe !");

let myFav= ['latte', 'turkish','french', 'mocha'];
alert('Guess what is my Fav Coffe !'); 

for(let i =0 ; i< 7 ; i++)
{

 let kind = prompt(`you have ${7-i} attempts ! try one more`);

for (let a =0 ; a<myFav.length;a++)
{

if ( kind.toLowerCase() === myFav[a])
{

    alert('Woow you Got me ! try again I have alot !');
    right ++ ; 
    break ;

}

else if ( kind.toLowerCase() !== myFav[a])
{

alert ('Oops ! it is not my Fav !'); 
wrong ++ ; 
break ;

}


}


}

alert(`wow you guessed ${right} right answeres and ${wrong} wrong answeres !`);





