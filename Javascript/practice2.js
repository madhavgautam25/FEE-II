const person = {
    name: "Madhav Gautam",
    course: "CSE"
}

let abc = "course";
console.log(person[abc])        

for(let prop in person){             
    console.log(prop + ": " + person[prop]);
}

// for of loop

let fruits = ["Apple", "Mango", "Banana"];

for(let fruit of fruits){
    console.log(fruit);
}

// checking iterable
console.log(typeof fruits[Symbol.iterator])       