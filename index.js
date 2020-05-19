// console.log(33)

// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
let stgArr = ["isaac", "opie", "arik"]

// * Function all by itslef 
// function doubler(arr){
//   let firstItem = arr[0].repeat(2);
//   let againItem = arr[0];
//   // console.log(firstItem);
//   // console.log(againItem); 
  
//   let newArr = [];
//   newArr.push(firstItem);
//   // newArr.push(againItem);
//   return newArr;
// }
// // console.log(doubler(stgArr))


function joiner(data){
  return data.join("")
}
// console.log(joiner(doubler(stgArr)));


function processFirstItem(arr, cb) {
//   1) Double the first item in the array
  let firstItem = arr[0].repeat(2);
  let againItem = arr[0];
  // console.log(firstItem);
  // console.log(againItem); 
  
  let newArr = [];
  newArr.push(firstItem);
  // newArr.push(againItem);
  // return newArr;
  
  
// 2) Join the array
  return cb(newArr)
  
};

// console.log(processFirstItem(stgArr, joiner))


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// function randomNumber(min, max) {  
//     return Math.round(Math.random() * (max - min) + min); 
// }  



function inning(){
  let score = Math.round(Math.random() * (2 - 0) + 0); 
  function counter(){
    return +score
  }
  return counter()
//   I can repeat it in 
}

// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
"Home": 11,
"Away": 5,
}

*/ 

function finalScore(innings, ing){

console.log(typeof ing)
const homeScoreArr = [];
const awayScoreArr = [];


for (let i = 0; i < innings; i++){
// let hScore = Math.round(Math.random() * (2 - 0) + 0); 
homeScoreArr.push(ing());
//     ing() invoke the function 
}


for (let i = 0; i < innings; i++){
// let aScore = Math.round(Math.random() * (2 - 0) + 0); 
// console.log(ing);
awayScoreArr.push(ing());
//     ing() invoke the function "I will now hoist my way up to refrence the pointed function "
}
// console.log(scoreArr)

//   Now I need to reudce the score 
let hometotalScore = homeScoreArr.reduce((acc, crrV) => acc + crrV)
let awaytotalScore = awayScoreArr.reduce((acc, crrV) => acc + crrV)


return {"Home": hometotalScore, "Away": awaytotalScore}

}
// console.log(finalScore(9, inning));
// console.log(finalScore(11, inning));
// console.log(finalScore(12, inning));
// // console.log(finalScore(14))

// ***Was not able to pass a callback as an argument: callback just repeated the same result the given inning amunt of times



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings
and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(innings) {
  const homeScoreArr = [];
  const awayScoreArr = [];
  
  
  for (let i = 0; i < innings; i++){
  let hScore = Math.round(Math.random() * (2 - 0) + 0); 
  homeScoreArr.push(hScore)
  }
  
  
  for (let i = 0; i < innings; i++){
  let aScore = Math.round(Math.random() * (2 - 0) + 0); 
  awayScoreArr.push(aScore)
  }
  // console.log(scoreArr)
  
  //   Now I log each score per inning 

  function getInning(i){
    var result = i + 1;
    if (result == 1){
      return '1st';
    } else if (result == 2){
      return '2nd';
    } else if(result ==3){
      return '3rd'
    } else if (result > 3){
      return `${result}th`;
    }
  };
  
  for (let i = 0; i < innings; i++){
      var scorePerInning = `${getInning(i)}: inning ${awayScoreArr[i]} - ${homeScoreArr[i]}`
      console.log(scorePerInning); 
  }
  }
  
  scoreboard(9);
  