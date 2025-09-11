function getMilk(money, costPerBottle){
    console.log(calcBottles(money,costPerBottle));
    console.log(calcChange(money, costPerBottle));
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = (Math.floor(startingMoney/costPerBottle));
    return numberOfBottles
}

function calcChange(startingMoney, costPerBottle){
    var change = startingMoney % costPerBottle;
    return change;
}

getMilk(11,1.5);