// 2. Employee Management System
let data = `{
"employees": [
{"id": 1, "name": "Neha", "salary": 50000, "department": "HR"},
{"id": 2, "name": "Amit", "salary": 60000, "department": "IT"},
{"id": 3, "name": "Pooja", "salary": 75000, "department": "Finance"}
]
}`;
let obj = JSON.parse(data);
let emp = obj.employees;
for(let i in obj.employees){
    if(emp[i]['department'] === "IT"){
        emp[i]['salary'] = emp[i]['salary'] + (0.1*emp[i]['salary']);
    }
}
console.log("Employee names with updated salaries: ");
for(let i in obj.employees){
    console.log(emp[i]['name'], "=>", emp[i]['salary']);
}