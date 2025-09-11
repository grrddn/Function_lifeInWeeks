var guestList =[
  "Angela",
  "Jack",
  "James",
  "Lara",
  "Jason"
];

function welcomeInside(guest){
  if(guestList.includes(guest)){
  return("Welcome, "+guest)
  }else{
    return("You are not on the list")
  }
}

welcomeInside("Dani")