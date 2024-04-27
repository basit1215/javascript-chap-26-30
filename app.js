var userInp= +prompt("Enter any positive integer");
document.write("Number: " + userInp + "<br>" + " Round off value of the number: " + Math.round(userInp) + "<br>"+  "Floor value of the number: " + Math.floor(userInp)  + "<br>" + "Ceil value of the number: " + Math.ceil(userInp) + "<br>" + "<br>" );

var userInp2= +prompt("Enter any negative integer");
document.write("Number: " + userInp2 + "<br>" + " Round off value of the number: " + Math.round(userInp2) + "<br>"+  "Floor value of the number: " + Math.floor(userInp2)  + "<br>" + "Ceil value of the number: " + Math.ceil(userInp2)  + "<br>" + "<br>" );

var num= -5 ;
document.write("The absolute value of " + num + " is " + Math.abs(num)+ "<br>"+ "<br>");

var dice1 = Math.floor(Math.random() * 6 + 1) ;
var dice2 = Math.floor(Math.random() * 6 + 1) ;
document.write("Random Dice 1 Value is: "+ dice1  + "<br>" +"Random Dice 2 Value is: "+ dice2  + "<br>"  + "<br>");

var coins= Math.floor(Math.random() *2 +1);
if(coins===1){
document.write(coins + "<br>"+ "Random coin value: Tails"+ "<br>"+ "<br>");
}
else if(coins===2){
    document.write(coins + "<br>"+ "<br>" + "Random coin value: Heads"+ "<br>"+ "<br>");
}
else{
    document.write("Error"+ "<br>"+ "<br>");
}

var randomNum= Math.floor(Math.random() *100 +1);
document.write("Random number between 1 and 100: " + randomNum+ "<br>"+ "<br>");

var userInp3 = prompt("Enter your weight in kilograms [For example: 50, 50kgs, 50.2kgs, 50.2kilograms]55");
var strToNum = parseFloat(userInp3);
if(!isNaN(strToNum)){
document.write("The weight of users is " + strToNum + " kilograms...")
}
else{
    document.write( "Invalid input, Please enter a number...");
}

var randomSecretNum = Math.floor(Math.random() *10 +1);
var userInp4 = +prompt("Enter a number between 1 and 10");
if(userInp4===randomSecretNum){
document.write("Congratulations! You guessed the right number")
}
else{
    document.write("Sorry, That's not the secret number");
}