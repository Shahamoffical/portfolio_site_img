/*let modeBtn= document.querySelector("#mode");
let currentmode = "light";
let body= document.querySelector("body");

modeBtn =addEventListener('click', () =>{
 if (currentmode === "light"){
    currentmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");

 }else{
    currentmode = "light";
    body.classList.remove("dark");
 }
 console.log(currentmode);
   // console.log('You are trying to change mode');
});*/
var mode= document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
   
}