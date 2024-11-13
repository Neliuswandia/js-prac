// ###########  Selecting elements  ###################

// getElementById()
const shop = document.getElementById("shop"); // shop being the id


// getElementByClassName()
const menuCards = document.getElementsByClassName("menuCards"); // menuCards being the class name

// getElementByTagName()
const li = document.getElementsByTagName("li"); // li being the tag

// querySelector()
const div = document.getElementByQuerySelector("div"); // pics the first element of the same kind elements

// querySelectorAll()
const button = document.getElementByQuerySelector("button"); // pics the all the elements that are the same

function colorChanger(){
//  const mainHeading = document.getElementById("mainHeading").innerHTML = "This is Nell"
    const mainHeading = document.getElementById("mainHeading")
    if (mainHeading.innerHTML === "Introduction to DOM"){
        mainHeading.innerHTML = "This is Nell"
    }else {
        mainHeading.innerHTML = "Introduction to DOM"
    }
}
