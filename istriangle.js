const Angles=document.querySelectorAll('.angle-inp');
const submitBtn=document.querySelector('#submit-button');
const outputEl=document.querySelector('#output');

submitBtn.addEventListener('click', isTriangle);

function isTriangle(){
    const sumAngles=calculateSumOfAngles(Number(Angles[0].value),Number(Angles[1].value),Number(Angles[2].value))
    if(sumAngles===180){
        outputEl.innerText="Yaayy! The angles form a triangle";
    }else if(sumAngles==""){
        outputEl.innerText="Please enter all the fields!🙄";
    }
    else{
        outputEl.innerText="Oh oh! The angles doesn't form a triangle";
    }

}

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=(angle1+angle2+angle3);
    return sumOfAngles;

}