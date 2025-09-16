var bottles = 10

function bottlesOfBeer(bottles){
    while(bottles > 0){
        console.log(bottles + " bottles of beer on the wall, " + bottles +" bottles of beer. Take one down and pass it around, " + (bottles - 1)  +" bottles of beer on the wall")
        bottles = (bottles - 1);
        console.log(bottles);
        }
}

bottlesOfBeer(bottles);