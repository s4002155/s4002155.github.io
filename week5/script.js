// let myName = "william";
// let myName = prompt("what is your name?");
// console.log("hello, my name is", myName);

// let studentNames = ["Rohit","Sarah", "Will"]
// console.log(studentNames[1]);

// let studentRecord = [{name:"rohit", id:2, marks:30}, {name: "tom", id:4, marks:35}, {name:"emily",id:5,marks:45}];
// console.log("Tom got following marks", studentRecord[1].marks);
// console.log("The id of emily is", studentRecord[3].id);


// let tempInput = document.querySelector("#temperature");

// let temperautre = tempInput.value;
// console.log(temperautre);
// // let temperature = prompt("What is the temperature outside?");

// function checkWeather() {
//     console.log(temperautre);
//     if (temperature>=20 && temperature<30){
//         console.log("it feels sunny and warm");
//     } else if (temperature>=10 && temperature<20) {
//         console.log("it feels cold");
//     } else if (temperature<10) {
//         console.log("it is freezing");
//     }
// }


let shoppingCart = [
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Sneakers", price: 80 },
    { name: "Backpack", price: 30 },
    { name: "Purse", price: 50 },
];

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total = total + shoppingCar[i].price;
        console.log("the sum so far", total);
    }
    console.log()
}

