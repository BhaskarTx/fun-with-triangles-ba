const sides = document.querySelectorAll(".sides")
const calcBTN = document.querySelector("#calculate")
const outputAns = document.querySelector("#output")

function calcSquares(a,b){
    var summ = a*a + b*b;

    return summ
}

function calcHypo(){
    // console.log("Hypoooo")
    const hypooSquare = calcSquares(Number(sides[0].value),Number(sides[1].value))
    // console.log(hypooSquare);
    const hypo = Math.sqrt(hypooSquare)
    // console.log(hypo)
    outputAns.innerHTML = "Length of Hypotenuse is = " + hypo

}



calcBTN.addEventListener("click",calcHypo)