var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

    var randomName = Math.random() * 5;
    randomName = Math.floor(randomName);
    return (names[randomName] + " is going to buy lunch today!")
}