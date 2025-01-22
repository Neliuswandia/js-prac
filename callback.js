// // ############ Synchronous callback (operates line by line) ###############
// function greet(name, callback){
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function sayGoodbye(){
//     console.log("Goodbye!");
// }

// greet("John", sayGoodbye());


// ############ Asynchronous callback (operates concurrently) ###############


// let pizza
// function orderPizza(){
//     console.log("Oder Pizza")
//     setTimeout(()=> {
//         pizza = "Margherita"
//     }, 2000)
//     console.log("waiting.........")
//     console.log(`Your ${pizza} is here`)
// }
// orderPizza()
// console.log("Do my laundry")
// console.log("Do my studies")

// setTimeout(() => {
//     console.log(`Your ${pizza} is here`)
// },2000)


// ############ Using the callback ###############


function orderPizza(callback){
    setTimeout(() => {
        console.log("waiting.........")
        const pizza = "chicken"
        callback(pizza)
        
    },2000)
}

function pizzaReady(pizza) {
    console.log(`Your ${pizza} is here`)
}

orderPizza(pizzaReady)
console.log('Call a friend')