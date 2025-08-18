// LOOPS

//Q1 - if-else
let num = 15;
if (num>0) {
    console.log("Positive");
}else if(num<0){
    console.log("Negative");
}else{
    console.log("Zero");
}

//Q2 - switch case
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");        
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}

//Q3 - while loop
let i = 1;
while (i!=10) {
    console.log(i);
    i++;
}

//Q4 - do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j!=10);