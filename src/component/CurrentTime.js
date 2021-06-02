import React, { useState } from 'react';
const cdate=new Date().toLocaleDateString();


let chour =new Date();
chour=chour.getHours();
let greet="";
let clr={};
if(chour>=1&&chour<12)
{
  greet="Good Morning!";
  clr.color="green";
  
}
else if(chour>=12&&chour<=16)
{
    greet="Good Afternoon!";
    clr.color="orange";
}
else if(chour>=16&&chour<=20)
{
    greet="Good Evening!";
    clr.color="	#00bfff";
}
else
{
    greet="Good Night!";
    clr.color="Blue";
}
const Heading=()=>{
    const time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const UpdateTime=()=>{
        const ntime=new Date().toLocaleTimeString();
        setCtime(ntime);
    };
    setInterval(UpdateTime,1000);
    return(
    <div class="datetime">
    <h1 >Hi, <span style={clr}>{greet}</span></h1>
    <h4 >{`Date: ${cdate}  Time: ${ctime}`}</h4>
</div>);
}
export default Heading;