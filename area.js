const a1=document.querySelector('#first');
const b1=document.querySelector('#second');
const c1=document.querySelector('#third');
const submitBtn=document.querySelector('#submit-button');
const outputEl=document.querySelector('#output');

submitBtn.addEventListener('click', calculateArea);

function calculateArea(){
    const a=Number(a1.value);
    const b=Number(b1.value);
    const c=Number(c1.value);

    const sum=(a+b+c);
    const s=sum/2;
    let area;

    if(area=Math.sqrt((s*(s-a)*(s-b)*(s-c)))){
        console.log(area);
        outputEl.innerText = `Area of a triangle using heron's formula is ${area.toFixed(2)} units.`
    }else{
        outputEl.innerText ="Enter valid side lengths such that each side lengths must be greater than 0"
    }

}

