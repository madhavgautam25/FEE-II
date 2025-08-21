function countEvenNumber(){
    for (let i=0; i<arr.length; i++) {
        if(arr[i]%2==0){
            count++;
        }
    }
    return count;

}
let count = 0;
let arr = [13,20,30,45,50,60];
console.log(countEvenNumber(arr));