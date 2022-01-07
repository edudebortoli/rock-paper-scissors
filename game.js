const roundEvent = document.querySelector("#round-event");

const rps = document.querySelectorAll(".rps");

function selectPcHand(){
    let randomNumber = Math.random();

    for(let x = 0; x < 12; x++){

    }
    
    if (randomNumber < 0.3333){
        return("rock")
    } else if (randomNumber > 0.666){
        return("scissor")
    } else {
        return("paper")
    }
}

function roundStart(playerHand){
    console.log(`${playerHand} x ${selectPcHand()}`)
}



function selectHand(a){
    roundStart(a.target.id);
}

console.log(rps);

window.addEventListener("click", selectHand);