/*
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
*/

console.log("Welcome to the love calculator");
console.log("What is your name?");
var yourName = prompt();
console.log("Perfect!!")
console.log("Now, what is your crush's name?");
var yourCrush = prompt();
var lovePercent = Math.random();
lovePercent = lovePercent * 100;
lovePercent = lovePercent.toFixed(2);
if (lovePercent > 75) {
    console.log("Congratulations, you "+ yourName + " and " + yourCrush + " are meant to be with a " + lovePercent + "%");
}if(lovePercent >50 && lovePercent < 75){
    console.log("The love score between "+ yourName + " and " + yourCrush + " is " + lovePercent + "%");
}if(lovePercent <50){
    console.log("Sorry, you better off alone. "+ yourName + " and " + yourCrush + " is " + lovePercent + "%")
}