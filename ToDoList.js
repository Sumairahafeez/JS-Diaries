
let button = document.querySelector(".button");
button.addEventListener('click',()=>{
    let Data = document.getElementById("Input").value;
    let div = document.createElement("div");
    div.className = "List";
    div.style.fontSize = "20px";
    div.style.width = "100%";
    div.style.height = "30%";
    div.style.margin = "30px";
    div.style.borderRadius =  "20px";
    div.style.color = "black";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.gap = "160px"
    div.style.alignItems = "center";
    div.innerHTML = Data;
    let svg = document.createElement("img");
    svg.className = "delete";
    svg.style.width = "48";
    svg.style.height = "48";
    svg.src = "https://img.icons8.com/fluency-systems-regular/48/filled-trash.png";
    div.appendChild(svg);
    let container = document.querySelector(".container");
    let currentheight = parseFloat(window.getComputedStyle(container).height);
    container.style.height = (currentheight+window.innerHeight*(0.1))+"px";
    container.appendChild(div);
    Isdel();
})
function Isdel(){
    let del = document.getElementsByTagName("img");
    del.addEventListener('click',()=>{
        let div = document.querySelector(".List");
        div.hidden = true;
    })
}
