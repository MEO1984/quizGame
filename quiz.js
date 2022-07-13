let mainDiv = document.getElementById("mainDiv");
let gameDiv = document.getElementById("gameDiv");
let introDiv = document.getElementById("introDiv")

function startGame(){
    introDiv.style.display = "none";
    gameDiv.removeAttribute("style")
}