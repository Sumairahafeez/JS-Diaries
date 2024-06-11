document.getElementById("container").style.width = "10vw";
document.getElementById("container").style.backgroundColor = "black";
let e = document.getElementsByClassName("box")
Array.from(e).forEach(e => {
    e.style.backgroundColor = "aqua";
});