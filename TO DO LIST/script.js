

function HideElements()
{   
//     document.getElementById("heading").hidden = true;
//     document.getElementById("button").hidden = true;
//     let e = document.getElementsByClassName("screen");
// Array.from(e).forEach(e => {
//     e.hidden = true;
// });
// Array.from(document.getElementsByTagName("input")).forEach(e =>
//     {
//         e.hidden = true;
//     }
// )
Array.from(document.getElementsByClassName("hidden")).forEach(e =>
    {
        e.hidden = true;

    }
)
document.getElementById("border").style.border = "none";

}

function GenerateBox()
{   

HideElements();
// let Task = document.getElementById("Task").innerHTML;
// let Time = document.getElementById("Time").innerHTML;
// let Date = document.getElementById("Date").innerHTML;
    let d = document.createElement("div");
    
    d.className = "box";
    d.style.backgroundColor = "gray";
    d.innerHTML = `Tasks are updated`;
    d.style.fontFamily = "Times New Roman";
    d.style.fontSize = "70px";
    d.style.color = "white";
   

    
    //let container = document.getElementById("container");
    var container = document.getElementById('container');
            if (container) {
                container.appendChild(d);
            } else {
                console.error('Container element not found');
            }
}
function ShowHidden()
{
    // let e = document.getElementsByClassName("screen");
    // Array.from(e).forEach(e => {
    //     e.hidden = false;
    // });
    // Array.from(document.getElementsByTagName("input")).forEach(e =>
    //     {
    //         e.hidden = false;
    //     }
    // )
    // document.getElementById("heading").hidden = false;
    // document.getElementById("button").hidden = false;
    Array.from(document.getElementsByClassName("hidden")).forEach(e =>
        {
            e.hidden = false;
        }
        
    )
    let e = document.getElementById("border");
    e.style.border = "2px solid black";
}

