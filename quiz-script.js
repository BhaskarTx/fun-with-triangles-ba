const formInput = document.querySelector(".quiz-form")
const submitBTN = document.querySelector("#submit")
const results = document.querySelector(".output") 
const rValue = document.querySelector(".output-value")
const refreshBTN = document.querySelector("#refresh")
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
    results.innerHTML = "You Scored "
    rValue.innerHTML =  score
    console.log(score)
}
function refreshHandler(){
    formInput.reset();
    results.style.display = "none"
    rValue.style.display = "none"
}

submitBTN.addEventListener("click", calcResults)
refreshBTN.addEventListener("click", refreshHandler)
