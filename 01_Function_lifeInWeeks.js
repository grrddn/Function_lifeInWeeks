function lifeInWeek(age){
    var years = (90-age);
    var weeks = (years * 52);
    var days = (years * 365);
    console.log("You have " + days + " days, " + weeks + " and " + years + " years left");
}

lifeInWeek(37);