let adj = ("crazy","amazing","fire");
let _shopName = ("Engine","Food","Garments");
let _anotherWord = ("Bros","Limited","Hub");


 GenerateName = (x) =>
    {
        let _name = (adj[x],_shopName[x],_anotherWord[x]);
        return _name;
    }

let int = Math.round(Math.random()*2);
console.log(GenerateName(int));