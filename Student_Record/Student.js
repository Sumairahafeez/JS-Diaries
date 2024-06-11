// let Student = {}
//     Name,
//     _fscMarks,
//     _matricMarks,
//     _EcatMarks,
//     GenerateMerit: function()
//     {
//         let merit = (this._fscMarks*0.5)+(this._EcatMarks*0.3)+(this._matricMarks*0.1);
//         return merit;
//     }   
// }
// function Student(_name,_fscMarks,_matricMarks,_EcatMarks)
// {
//     this.Name = _name;
//     this._fscMarks = _fscMarks;
//     this._EcatMarks = _EcatMarks;
//     this._matricMarks = _matricMarks;
// }


function Confirm()
{   let st1 = {};
st1.Name = document.getElementById("Name").value;
st1._fscMarks = document.getElementById("FSC").value;
st1._EcatMarks = document.getElementById("Ecat").value;
st1._matricMarks = document.getElementById("Matric").value;
    prompt(`your name is ${st1.Name} FSC Mars are ${st1._fscMarks},Ecat Marks ${st1._EcatMarks} and Matric Marks are ${st1._matricMarks}`);
}
