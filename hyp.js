const b1=document.querySelector('#base');
const h1=document.querySelector('#height');
// const submitBtn=document.querySelector('#submit-button');
const outputEl=document.querySelector('#output');
const form = document.querySelector('#form');


form.addEventListener('submit', calculateHypotenuse);

function calculateHypotenuse(e){
   e.preventDefault();

    const base=Number(b1.value);
    const height=Number(h1.value);
    // const hyp=Math.sqrt(base*base+height*height);
    let hyp;

    if(hyp=Math.sqrt(base*base+height*height)){
        outputEl.innerText=`The length of the hypotenuse is ${hyp.toFixed(2)} units`;
     }else{
        outputEl.innerText="The length of the hypotenuse is 0";
     }

}
