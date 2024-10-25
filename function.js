function sayhi(){/*nested function */
    console.log("say hi ra chinna:");
    function sayhi1(){
        console.log("say hi anna")
    }
sayhi1();
}
function sayhello()
{
    console.log("say hello ra chinna;");
}
sayhi();


/* arrow functoin
this arrow function excute faster*/

const sayhellotobalayya=()=>{
    console.log("say jai balayya ")
}
const arrownarsah=()=>{
   console.log("arrownarsah bahi bolthey")
}
sayhellotobalayya();
arrownarsah();


