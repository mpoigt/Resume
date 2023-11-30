const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let k=0;

function jump() {
    if (dino.id != "jump") {
        dino.classList.add("jump")
        k++;
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}
document.addEventListener("keydown", function(event) {
    jump()
});
let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft >0 && dinoTop >= 140 ) {
      
       alert("GAME OVER!!!        " + "        points: " + k)
       k=0;
    }
}, 10)