/*  let size = parseInt(prompt("Enter your disired size"));
let name = new Array(size);

for(let i = 0; i<size; i++){
    name[i] = prompt(`enter your name at index ${i+1}`);
}

console.log(size);
for(let i = 0; i<name.length; i++){
    console.log(name[i]);
}

const no=["asdfaf","asdfasf"];
const dos=["qwert", "poiuy"];
let stud=[no,dos];

for(let it in stud){
     console.log(stud[it]);

     for(let val of stud[it]){
        console.log(val);
     }
} 




const uno =["this is the number 1", "and this is number 2", "this the number before 3"];
const doss =["and this is number 3", "and this is number 4", "this is the number after 4"];
const number=[uno,doss];

for(let it in number ){
    console.log(number[it]);    
    for(let val of number[it]){
        console.log(val);
    }
}

console.log("");
  
    for (let i = 0; i < number.length; i++) {
        console.log("Subarray:", number[i]);
        for (let j = 0; j < number[i].length; j++) {
            console.log("Item:", number[i][j]);
        }
    }


*/


// thsi the part 1 of the act on sept sept 15
function startWorkout(){
    document.write("Workout started <br>");
    
}
function calculateSteps(){
    let morning =   2500;
    let evening =   3000;
    document.write(morning + evening + "<br>");
}
startWorkout();
calculateSteps();


//this is the part 2
function logWorkout(activity = "unknown", duration = 0){
    document.write("I did " + activity + " for " + duration + " minutes. <br>");
}

logWorkout("push up", 20);
logWorkout("squats", 10);
logWorkout("planks", 12);
logWorkout();

//thsi is part 3
function caloriesBurned(minutes){
 
    return minutes * 5;
  
}
let calling = caloriesBurned(10);
document.write(calling + "<br>");

function isGoalMet(steps){
    if(steps >= 10000) return true;
    return false;
}
let isTrue = isGoalMet(12000);
let isFalse = isGoalMet(8000);
document.write(isTrue + "<br>");
document.write(isFalse + "<br>");

//this is part 4

function multiplyCalories(rate, minutes) {
    return rate * minutes;
}
  
  function dailyCalories(rate, minutes) {
    let caloriesBurned = multiplyCalories(rate, minutes);
    let totalCalories = caloriesBurned + 50;  
    return totalCalories;
  }
  
  console.log(dailyCalories(8, 30));  
  





