function addQuestion(){

let theme=document.getElementById("theme").value
let difficulty=parseInt(document.getElementById("difficulty").value)
let question=document.getElementById("question").value
let answer=document.getElementById("answer").value

alert("Ajout manuel dans data/"+theme+".json\n\n"+JSON.stringify({
question,
answer,
difficulty
},null,2))

}
