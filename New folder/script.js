// console.log("task1");
// setTimeout(
//     ()=>{
//         console.log("task2")
//     },4000
// )
// console.log("task3")



// HIGHER ORDER FUNCTION

// function fetchData(callback){
//     console.log("data fetched")
//     callback();
// }
// function displayData(){
//     console.log("Data Displaying")
// }
// fetchData(displayData);



// function operation(a,b,callback){
//     return callback(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function multiply(c,d){
//     return c*d;
// }
// console.log(operation(8,7,multiply));




const ticket=new Promise(function(resolve,reject){

const isBoarded=false;
if(isBoarded){
    reject("you are in the flight")
}
else{
    resolve("your flight has been cancelled")
}
})

ticket.then((data)=>console.log("wao",data))
.catch((data)=>{
    console.log("oh no",data);
})
.finally(()=>{
    console.log("lastly");
}
)
