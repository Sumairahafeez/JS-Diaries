function Hacker(i)
{
    let prom = new Promise((resolve,reject)=>{
        if(i==1)
            {
                setTimeout(()=>{
                    resolve("Initializing Hacking ");
                },1000)
            } else if(i == 2){
                setTimeout(()=>{
                    resolve("Reading Your Files ");
                },2000)
            }else if(i == 3){
                setTimeout(()=>{
                    resolve("Password files detected ");
                },3000)
            }else if(i == 4){
                setTimeout(()=>{
                    resolve("Sending All password and personal files to server ");
                },4000)
            }else if(i == 5){
                setTimeout(()=>{
                    resolve("Cleaning up ");
                },5000)
            }
            else{
                reject("Hacking Failed")
            }
        
       
    });
    return prom;
}
async function main(){
    var i = 1;
    while(i<=7)
        {   
            let first =  Hacker(i);
            first.then((e)=>{
                console.log(e);
            }).catch((err)=>{
                console.log(err);
            }).then(()=>{
                setTimeout(()=>{
                    console.log(".")
                },1000);
            }).then(()=>{
                setTimeout(()=>{
                    console.log(".")
                },2000);
            }).then(()=>{
                setTimeout(()=>{
                    console.log(".")
                },3000);
            })
            i++;
        
           
        }

}

main();