// function job() {
//     let prom = new promise((resolve,reject),()=>{
//         setupTime = ( ()=>
//         {
//             resolve("hello world");
//         },2000)
//     })
//     let p1 = prom.try((e)=>
//     {
//         return e;
//     }).catch((err)=>{
//         return err;
//     })
// }

module.exports = job;
function job()
{
     let prom = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Hello world!");
        },2000)
     })

     let p1 = prom.then((e) =>
    {
        return e;
    }).catch((err) => {
        return err;
    })
    return p1;
}