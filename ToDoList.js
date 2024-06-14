
let button = document.querySelector(".button");
button.addEventListener('click',()=>{
    let Data = document.getElementById("Input").value;
    let div = document.createElement("div");
    div.className = "List";
    div.style.background = "linear-gradient(135deg, #BFF0FA 0%, #cf806c 100%)";
    div.style.fontSize = "20px";
    div.style.width = "100%";
    div.style.height = "30%";
    div.style.margin = "30px";
    div.style.borderRadius =  "20px";
    div.style.color = "black";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.innerHTML = Data;
    let container = document.querySelector(".container");
    let currentheight = parseFloat(window.getComputedStyle(container).height);
    container.style.height = (currentheight+window.innerHeight*(0.1))+"px";
    container.appendChild(div);
    
})