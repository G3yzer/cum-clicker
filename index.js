let yodas = 0

let snd = new Audio("augh.mp3");

let yodasMum = 1.0
let base = 1

const yodanumbertext = document.querySelector(".yodanumbertext")
const clickerbutton = document.querySelector(".clicker-button")
clickerbutton.addEventListener("mousedown", () => {
    console.log("Yodasdown")
    clickerbutton.style.width = "58%";
    snd.currentTime = 0;
    snd.play();
})
clickerbutton.addEventListener("mouseup", () => {
    console.log("Yodasup");
    clickerbutton.style.width = "";
    yodas+= base * yodasMum
    yodas = Math.round(yodas * 10) / 10
    console.log(yodas)
    yodanumbertext.textContent = yodas
})


console.log("Yodas")