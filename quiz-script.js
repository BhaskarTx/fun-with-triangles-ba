const formInput = document.querySelector(".quiz-form")
const submitBTN = document.querySelector("#submit")
const results = document.querySelector(".output") 
const rValue = document.querySelector(".output-value")
const refreshBTN = document.querySelector("#refresh")
const rightAns = ["80°","4√3","right angled","6","80"];

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
    results.style.display = "inline"
    rValue.style.display = "inline"
    results.innerHTML = "You Scored "
    rValue.innerHTML =  score
    console.log(score)
}
function refreshHandler(){
    formInput.reset();
    results.style.display = "none"
    rValue.style.display = "none"
    alert("Page Refreshed!")

}

submitBTN.addEventListener("click", calcResults)
refreshBTN.addEventListener("click", refreshHandler)
