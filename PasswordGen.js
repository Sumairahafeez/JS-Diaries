let button = document.getElementById("btn");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Special = "@#$%^&*()_+!";
const length = 12;

//Generating Passwrod using Promise
// button.addEventListener("click", () => {
//     let prom = GeneratePassword()
//       .then((e) => {
//         let input = document.getElementById("password");
//         input.value = e;
//       })
//       .catch((e) => {
//         let input = document.getElementById("password");
//         input.value = e;
//       });
//     let input = document.getElementById("password");
//     input.value = "Pas";
//   });
// GeneratePassword=()=>{
//     let prom = new Promise((resolve,reject)=>{
//         let upper = Math.floor(Math.random()*UpperCase);
//         let Lower = Math.floor(Math.random()*LowerCase);
//         let num = Math.floor(Math.random()*Numbers);
//         let special = Math.floor(Math.random()*Special);
//         resolve(UpperCase[upper]+LowerCase[Lower]+Numbers[num]+Special[special]);
//     })
//     return prom;
// }

//Simple Method

GeneratePassword = () => {
    let Pass = "";
    while(true){
  let upper = Math.floor(Math.random() * UpperCase.length);
  let Lower = Math.floor(Math.random() * LowerCase.length);
  let num = Math.floor(Math.random() * Numbers.length);
  let special = Math.floor(Math.random() * Special.length);
  Pass += UpperCase[upper]
  Pass += LowerCase[Lower] 
  Pass +=  Numbers[num] 
  Pass += Special[special];
  if(Pass.length >= length){
    break;
  }
}
  return Pass;
};
button.addEventListener("click", () => {
  let prom = GeneratePassword()
  let input = document.getElementById("password");
  input.value = prom;
});
