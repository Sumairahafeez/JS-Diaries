
// const readline =  require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
let x = 0;
let y = 0;
{
    let op = 0;
    x = prompt("Enter First number: ");
    y = prompt("Enter second number: ");
    while(op != 5)
        {
            op = Menu();
            if(op == 1)
                {
                   Console.log("Your Sum is: "+ Add(x,y));
                   prompt("Your Sum is: "+ Add(x,y));
                }
                if(op == 5)
                    {
                        break;
                    }
        }
}
function Menu()
{   let op;
    console.log("Welcome to my calculator");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");
    // r1.question("Enter your option: ",(option) =>{
    //     op = option;
    //     r1.close();
    // })
    prompt("Enter your option: ",op);
    return op;
}
function Add(x,y)
{
    return x+y;
}
