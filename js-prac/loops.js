// ##################  FOR LOOP  ####################


for(let i = 1; i < 10; i++){
    if (i % 2 !== 0) //odd numbers
    console.log(i);
}


let list = ["apple","boy","cat","dog"]

for(var x = 0; x < list.length; x++){
    if (list[x] == "boy"){
        console.log("I found boy", x)
    }   
}


for(let x = 0; x <= 4; x++){
    console.log("Hello World")
}


for(var x = 0; x < list.length; x++){
    console.log(list[x])
}


for(var x = 0; x < list.length; x++){
    if (list[x] === "cat"){
        console.log(list[x])
        break
    }
}



// ##################  WHILE LOOP  ####################


var i = 0
while (i < 10){
    console.log(i)
    i++
}


arr = ["Manny", "Joe", "Lisa"]

var i = 0
while (i < arr.length){
    console.log(arr[i])
    i++
}
