// ###########  Selecting elements  ###################

// getElementById()
// const shop = document.getElementById("shop"); // shop being the id


// getElementByClassName()
// const menuCards = document.getElementsByClassName("menuCards"); // menuCards being the class name

// getElementByTagName()
// const li = document.getElementsByTagName("li"); // li being the tag

// querySelector()
// const div = document.getElementByQuerySelector("div"); // pics the first element of the same kind elements

// querySelectorAll()
// const button = document.getElementByQuerySelector("button"); // pics the all the elements that are the same

// function colorChanger(){
// //  const mainHeading = document.getElementById("mainHeading").innerHTML = "This is Nell"
//     const mainHeading = document.getElementById("mainHeading")
//     if (mainHeading.innerHTML === "Introduction to DOM"){
//         mainHeading.innerHTML = "This is Nell"
//     }else {
//         mainHeading.innerHTML = "Introduction to DOM"
//     }
// }

// ###########  Styling elements  ###################
document.getElementById("myH1").style.color = "blue";

document.getElementById("mainHeading").style.color = "red"
mainHeading.style.fontSize = "5rem"
console.log(mainHeading) 

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("myH1").style.color = "blue";
//     document.getElementById("mainHeading").style.color = "red";
// });


// ###########  Creating elements  ###################
const firstList = document.getElementsByClassName("firstList")[0]; //use the indexing when using the class since it selects from
                                                                     // multiple elements with the same class name when using the id 
                                                                     //or unique identifier you have to use the index identifier
const listItem1 = document.createElement("li");

listItem1.textContent = "New item";

firstList.appendChild(listItem1);

// alert (listItem1.textContent); // for checking if the code is working properly


// ###########  Creating elements  ###################

listItem1.setAttribute('id', 'mainHeading');

// ###########  Deleting elements  ###################

const listItem1 = document.getElementsByTagName("li")

li.remove();
