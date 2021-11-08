console.log("Hi??");
console.log("Hi!");

//create a Function
//want it to accept an arguement
//the arguement will represent where the user clicked on the table
//When they click on how that corresponds to an arguement
const randomTreasure = Math.floor(Math.random() * 9);
const randomBomb = Math.floor(Math.random() * 9);
const treasure = (location) => {
    console.log("It RAN!!!");
    if (location=== randomBomb){
      console.log("found the randomBomb");
    } else if (location=== randomTreasure){

    }
}


// const bouncerRobot = (age) => {
//   // check the age of the person at the door
//   // 21 years olds can drink alcohol
//   console.log(age);
//   if(age >= 21) {
//     alert("You can drink, vote, and drive! But not at the same time.")
//     var drinkOrder = prompt("What would you like to drink?")
//     alert(`Here is your ${drinkOrder}`)
//     // 18 year olds can vote
//   } else if(age >= 18) {
//     alert("You can vote and drive!")
//     // 16 year olds can drive
//   } else if(age >= 16) {
//     alert("You can drive!")
//   } else {
//     alert("Come back again in a few years!")
//   }
// }
//
// bouncerRobot("22")
