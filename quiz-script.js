const formInput = document.querySelector(".quiz-form")
const submitBTN = document.querySelector("#submit")
const results = document.querySelector(".output") 

const rightAns = ["80°","obtuse"];

function calcResults(){
    let score = 0;
    let ind = 0;

    let formRes = new FormData(formInput);
    for(let value of formRes.values()){
        if(value === rightAns[ind] ){
            score++;
        }
        ind++;
    }
    results.innerHTML = "You Scored " + score
    console.log(score)
}

submitBTN.addEventListener("click", calcResults)

