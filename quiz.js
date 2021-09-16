const submitBtn=document.querySelector('#submit-button');
const quizForm=document.querySelector('#form-quiz');
const outputEl=document.querySelector('#output');

const correctAnswers=["90°","right-angled","one right angle","12,16,20","Equilateral triangle","85°","None","a + b + c","no","45°"];

submitBtn.addEventListener('click', calculateScore);

function calculateScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);

    // for(let entries of formResults.entries()){ //key-value pair//["question-7", "no"]
    //     console.log(entries);
    // }
    for(let value of formResults.values()){ //["no"]
        // console.log(value);
        if(value===correctAnswers[index]){
            score=score+1;
        }else{
            outputEl.innerText="Your score is 0";
        }
        index=index+1;
        outputEl.innerText="Your score is " +score;
    }
    // outputEl.innerText="Your score is " +score;
}