
function append(){
 const realtime=document.getElementById("clock");

const time=new Date().toLocaleTimeString()

document.getElementById("clock").innerText=time
}

setInterval(append,1000)
