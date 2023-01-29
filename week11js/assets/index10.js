let result = document.querySelector('.result');
let sumOne=document.querySelector('.sum1');
let sumTwo=document.querySelector('.sum2');
let sumThree=document.querySelector('.sum3');
let sumFour=document.querySelector('.sum4');
let button=document.querySelector('.discountButton');

result.textContent = (`${+(sumOne.innerHTML)+ +(sumTwo.innerHTML) + +(sumThree.innerHTML) + +(sumFour.innerHTML)} руб.`);

button.addEventListener('click', makeDiscount); 
function makeDiscount() {
    let countDiscount=(`${+(sumOne.innerHTML)*0.2 + +(sumTwo.innerHTML)*0.2 + +(sumThree.innerHTML)*0.2 + +(sumFour.innerHTML)*0.2}`);
    result.textContent = (`${+(sumOne.innerHTML) + +(sumTwo.innerHTML)+ +(sumThree.innerHTML)+ +(sumFour.innerHTML) - countDiscount} руб.`); 
    button.disabled=true;
    button.style.cursor="default";
}
