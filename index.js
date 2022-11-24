// Code your solutions in this file
// for(let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old, Happy birthday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   //return gifts;
// }

// wrapGifts(gifts);

function writeCards(arraySt) {
    let newArr = []
    for(let count = 0; count < arraySt.length; count++) {
     newArr.push("Thank you, " + arraySt[count] + ", for the wonderful surprise gift!")
    }
    return newArr;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) { 
    while(number >= 0) {
        console.log(number--);
    }
}
countDown(10);