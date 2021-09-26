const a1=document.querySelector('#angle1');
const b1=document.querySelector('#angle2');
const c1=document.querySelector('#angle3');
// const submitBtn=document.querySelector('#submit-button');
const outputEl=document.querySelector('#output');
const form = document.querySelector('#area');

form.addEventListener('submit', calculateArea);

function calculateArea(e){
    e.preventDefault();

    const a=Number(a1.value);
    const b=Number(b1.value);
    const c=Number(c1.value);

    const sum=(a+b+c);
    const s=sum/2;
    let area;

    if((a+b)>c && (b+c)>a && (a+c)>b){
        area=Math.sqrt((s*(s-a)*(s-b)*(s-c)));
        // console.log(area);
        outputEl.innerText = `Area of a triangle using heron's formula is ${area.toFixed(2)} units.`
    }else{
        outputEl.innerText ="Enter valid side lengths such that each side length should be less than sum of other two sides."
    }

}

