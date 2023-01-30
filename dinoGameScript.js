var { character, block } = newFunction();
const newLocal = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockleft < 20 && blockleft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
    }
}, 10);
var checkDead = newLocal;

function newFunction() {
    var character = document.getElementById("character");
    var block = document.getElementById("block");
    return { character, block };
}
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}