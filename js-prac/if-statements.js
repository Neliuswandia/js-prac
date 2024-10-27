
// ############ IF STATEMENTS ################

// below 18 = not allowed
// 18 - 60 = allowed 
// above 60 = not allowed


age = 80
if (age < 18){
    console.log("You have not reached the legal age of driving!");
}else if(age <= 60 && age >= 18){
    console.log("You are allowed to drive, but it's recommended to get a driver's license.");
}else{
    console.log("You are not allowed to drive!");
}


let hour = 20
if (hour >= 6 && hour <= 12) {
    console.log("Good Morning");
} else if(hour >= 12 && hour <= 18) {
    console.log("Good Afternoon");
}else
    console.log("Good Evening");
