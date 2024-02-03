const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let intervelId;

function randomColor() {
    let hexColor = "#";
    for (let i = 1; i <= 6; i++) {
        let random = Math.floor(Math.random() * 16);
        hexColor = hexColor + hexNum[random];
       
    }
    document.body.style.backgroundColor = hexColor;
}

start.addEventListener("click", function () {
    if(!intervelId){
        intervelId = setInterval(randomColor, 1000);
    }
       

})

stop.addEventListener("click",function() {
    clearInterval(intervelId);
    intervelId = null;
})