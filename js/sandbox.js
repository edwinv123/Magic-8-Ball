const points = [
    "Miguel",
    "Of course",
    "Nuh uh",
    "Yes definitely",
    "Prob",
    "As I see it yes",
    "Most likely",
    "Yes",
    "Thomas",
    "Ryan Liu",
   "tooo lazzzy",
"Gary",
"Luke",
"Not now",
"Idk",
"Nah",
"Arturo",
"No",
"Nuh uh",
"Idk"
];
document.getElementById("response").innerHTML = points;  

function myFunction() {
  points.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById("response").innerHTML = points[0];
  document.getElementById("response").style.fontSize="18px";
  setTimeout(timeup, 4000);

function timeup(){
    document.getElementById("response").innerHTML="8";
    document.getElementById("response").style.fontSize="120px";
    document.getElementById("clear").value="";

}
}