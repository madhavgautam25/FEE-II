mybody=document.body;
console.log(mybody);
mybody.style.backgroundColor='red';

const box=document.getElementById("box1");
console.log(box);
const tag=document.getElementsByTagName('p');
console.log(tag);
const box1=document.getElementById('box1');

box1.classList.add('round-border');

const boxes=document.getElementsByClassName('box');
for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add('round-border');
}

const newPara=document.createElement('p');
newPara.innerText="suppose this is new para";
const cont=document.getElementsByTagName('container');
document.body.append(newPara);

function myfunction(){
    console.log("clicked");
}
function myfun2(){
    console.log('mouse is over');
    
}

const res = document.getElementById('box3');
res.addEventListener('click',()=>{
    console.log("box3 clicked");
})
const ress = document.getElementById("box3");
res.addEventListener('click',()=>{
    console.log("box3 clicked again");
})
const resss = document.getElementById("box3");
res.addEventListener('click',(e)=>{
    console.log("event object",e);
})