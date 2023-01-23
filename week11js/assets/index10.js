let result = document.getElementsByClassName('.result');
let sumOne=document.getElementsByClassName('.sum1');
let sumTwo=document.getElementsByClassName('.sum2');
let sumThree=document.getElementsByClassName('.sum3');
let sumFour=document.getElementsByClassName('.sum4');
let button=document.getElementsByClassName('.discountButton');

result.textContent = (`${+(sumOne.innerHTML)+ +(sumTwo.innerHTML) + +(sumThree.innerHTML) + +(sumFour.innerHTML)} руб.`);

button.addEventListener('click', makeDiscount); 
function makeDiscount() {
    let countDiscount=(`${+(sumOne.innerHTML)*0.2 + +(sumTwo.innerHTML)*0.2 + +(sumThree.innerHTML)*0.2 + +(sumFour.innerHTML)*0.2}`);
    result.textContent = (`${+(sumOne.innerHTML) + +(sumTwo.innerHTML)+ +(sumThree.innerHTML)+ +(sumFour.innerHTML) - countDiscount} руб.`); 
}