var triviaSections = document.getElementsByClassName("trivia")
var awnserSection = document.getElementsByClassName("awnser")





fetch("https://opentdb.com/api.php?amount=5")
 .then(response => response.json())
 .then(data => SaveTheData(data))


function SaveTheData(data){
    let trivia = data.results
    console.log(trivia);
    triviaSections[0].textContent = trivia[0].question;
    awnserSection[0].textContent = trivia[0].correct_answer;
    triviaSections[1].textContent = trivia[1].question;
    awnserSection[1].textContent = trivia[1].correct_answer;
    triviaSections[2].textContent = trivia[2].question;
    awnserSection[2].textContent = trivia[2].correct_answer;
    triviaSections[3].textContent = trivia[3].question;
    awnserSection[3].textContent = trivia[3].correct_answer;
    triviaSections[4].textContent = trivia[4].question;
    awnserSection[4].textContent = trivia[4].correct_answer;
}

/*
function accordion(){
    if 
}
*/

for (item of triviaSections){
    item.addEventListener('click',accordion)
}

function accordion(e){
    console.log("pls")
    let target = e.target;
    if (target == triviaSections[0]){
        awnserSection[0].id = "AccordionOpen"
    }
    else if (target == triviaSections[1]){
        awnserSection[1].id = "AccordionOpen"
    }
    else if (target == triviaSections[2]){
        awnserSection[2].id = "AccordionOpen"
    }
    else if (target == triviaSections[3]){
        awnserSection[3].id = "AccordionOpen"
    }
    else if (target == triviaSections[4]){
        awnserSection[4].id = "AccordionOpen"
    }
}
