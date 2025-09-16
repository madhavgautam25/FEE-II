// 1. Students Record System
let students = {
"101": { 
    name: "Ravi", 
    age: 21, 
    marks: { 
        math: 85, 
        science: 90 
    } 
},
"102": { 
    name: "Anita", 
    age: 20, 
    marks: { 
        math: 92, 
        science: 88 
    } 
},
"103": { 
    name: "Suresh", 
    age: 22, 
    marks: { 
        math: 76, 
        science: 80 
    } 
}
};
console.log("All students's name:")
for(let i in students){
    console.log(students[i].name);
};

let topStud = null;
let highestMathMarks = -1;
for(let i in students){
    if(students[i].marks.math > highestMathMarks){
        highestMathMarks = students[i].marks.math;
        topStud = students[i].name;
    }
}
console.log("Student with highest marks in math: ",topStud);

let totalSciMarks = 0;
let count = 0;
for(let i in students){
    totalSciMarks += students[i].marks.science;
    count++;
}
let avgMarks = totalSciMarks/count;
console.log("Average science marks: ",avgMarks);